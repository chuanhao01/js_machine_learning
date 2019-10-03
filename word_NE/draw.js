function randomChar(){
    let char_set = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    let random_index = Math.floor(Math.random() * char_set.length);
    return char_set[random_index]
}

function getLargestAndIndex(arr){
    if(arr.length === 0){
        return null;
    }

    let max_index = 0;
    let max = arr[max_index];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max_index = i;
            max = arr[max_index];
        }
    }
    return {
        max: max,
        max_index: max_index,
    };
}

// function DOMObj(target_phrase, total_pop, mutation_rate){
//     this.target_phrase = target_phrase;
//     this.total_pop = total_pop;
//     this.mutation_rate = mutation_rate;
//     this.x = 10;
//     this.draw = function(best_phrase, total_gen, avg_fitness){

//     };
// }

let total_pop = 1200,
mutation_rate = 0.005;
target_phrase = 'neuroevolution of augmenting topologies';

function setup(){
    createCanvas(400, 600);
    background(0);
    Population.init(total_pop, mutation_rate, target_phrase);
}

function draw(){
    if(!Population.is_done){
        Population.calculateFitness();
        console.log(Population.best_phrase.genes.join(''));
        Population.generate();
    }
}
