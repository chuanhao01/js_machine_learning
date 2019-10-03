// target_phrase = string
// mutation_rate = float num 0 < 1
// genes = array
function DNA(target_phrase, mutation_rate, genes){
    this.target_phrase = target_phrase;
    this.mutation_rate = mutation_rate;
    this.genes = []
    this.fitness_score = null;
    if(genes){
        this.genes = genes;
    }
    else{
        for(let i=0; i<this.target_phrase.length; i++){
            this.genes.push(randomChar());
        }
    }
    this.calculateFitness = function(){
        let score = 0;
        for(let i=0; i<this.genes.length; i++){
            if(this.genes[i] === this.target_phrase[i]){
                score++;
            }
        }
        this.fitness_score = score;
        return score;
    };
    this.crossOver = function(parent_dna){
        let cross_point = Math.floor(Math.random() * (this.genes.length + 1));
        let new_genes = []
        for(let i=0; i<this.genes.length; i++){
            if(i<cross_point){
                new_genes.push(this.genes[i]);
            }
            else{
                new_genes.push(parent_dna.genes[i]);
            }
        }
        return new DNA(this.target_phrase, this.mutation_rate, new_genes);
    };
    this.mutate = function(){
        for(let i=0; i<this.genes.length; i++){
            if(Math.random() < this.mutation_rate){
                this.genes[i] = randomChar();
            }
        }
    }
}