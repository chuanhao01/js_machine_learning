const Data = {
    init(dimension){
        this.dimension = dimension;
    },
    generateDatasetInt(num_of_points){
        features = []
        targets = []
        for(let i=0; i<num_of_points; i++){
            X = []
            for(let j=0; j<this.dimension; j++){
                X.push(Math.floor(Math.random() * 21));
            }
            X = nj.array(X).reshape([2, 1])
            y = Math.floor(Math.random() * 2);
            features.push(X);
            targets.push(y);
        }
        return {
            features: features,
            targets: targets
        };
    }
}

const NerualNetwork = {
    init(input_nodes, hidden_nodes, learning_rate, features, targets){
        // Init vars
        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.lr = learning_rate;
        this.features = features;
        this.targets = targets;
        // Init weights
        this.weights_i_h = nj.random([hidden_nodes, input_nodes]);
        this.weights_i_h_b = nj.random([hidden_nodes, 1]);
        this.weights_h_o = nj.random([1, hidden_nodes]);
        this.weights_h_o_b = nj.random([1, 1]);
    },
    train(features, targets){
        let num_of_data = features.length
        for(let data_index = 0; data_index<num_of_data; data_index++){
            X = features[data_index];
            fwd_obj = this.forwardFeed(X)
            this.backProp()
        }
    },
    activationFunction(x){
        let sigmoid_output = nj.divide(nj.ones(x.shape), (nj.add(nj.exp(nj.multiply(x, -1)), 1)))
        return sigmoid_output
    },
    forwardFeed(X){
        let hidden_input = nj.add(nj.dot(this.weights_i_h, X), this.weights_i_h_b);
        let hidden_output = this.activationFunction(hidden_input);

        let final_input = nj.add(nj.dot(this.weights_h_o, hidden_output), this.weights_h_o_b);
        let final_output = this.activationFunction(final_input);
        return {
            hidden_output: hidden_output,
            final_output: final_output
        };
    },
    backProp(X, y, fwd_obj){
        let error = nj.subtract(fwd_obj.final_output, y);

        let delta_h_o = nj.multiply(fwd_obj.hidden_output.T, error);
        let delta_h_o_b = error;

        let delta_i_h
        let delta_i_h_b = nj.ones([this.hidden_nodes, 1])

        for(let i=0; i<this.hidden_nodes; i++){
            if(i === 0){
                delta_i_h = X.T;
            }
            else {
                delta_i_h = nj.stack([delta_i_h, X.T], -1);
            }
        }
        console.log(delta_i_h.shape)
    }


}

let data = Data;
data.init(2);
data_obj = data.generateDatasetInt(10);
NerualNetwork.init(2, 3, 0.01, data_obj.features, data_obj.targets);
NerualNetwork.train(data_obj.features, data_obj.targets);