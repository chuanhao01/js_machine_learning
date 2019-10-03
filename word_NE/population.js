const Population = {
    init(total_pop, mutation_rate, target_phrase){
        this.total_pop = total_pop;
        this.mutation_rate = mutation_rate;
        this.target_phrase = target_phrase;
        this.is_done = false;
        this.mating_pool = [];
        this.best_phrase = null;
        // Init pop
        this.popualtion = []
        for(let i=0; i<this.total_pop; i++){
            this.popualtion.push(new DNA(this.target_phrase, this.mutation_rate, null));
        }
    },
    calculateFitness(){
        let total_fit_score = 0;
        let score_list = [];
        // Getting the list of all fitness score before normalisation
        for(let i=0; i<this.popualtion.length; i++){
            let curr_score = this.popualtion[i].calculateFitness();
            if(curr_score === this.target_phrase.length){
                this.is_done = true;
            }
            score_list.push(curr_score);
            total_fit_score += curr_score;
        }
        let max_obj = getLargestAndIndex(score_list);
        let max_score = max_obj.max;
        let best_phrase = this.popualtion[max_obj.max_index];
        let mating_pool = []
        // Normalising the scores
        // Note order of the DNA in population and score_list is the same
        for(let i=0; i<score_list.length; i++){
            let mapped_score = map(score_list[i], 0, max_score, 0, 100);
            for(let j=0; j<mapped_score; j++){
                mating_pool.push(this.popualtion[i]);
            }
        }
        this.best_phrase = best_phrase;
        this.mating_pool = mating_pool;
        // return the avg fitness
        return total_fit_score / this.popualtion.length;
    },
    generate(){
        let new_population = []
        for(let i=0; i<this.total_pop; i++){
            let parent_a = this.mating_pool[Math.floor(Math.random() * this.mating_pool.length)];
            let parent_b = this.mating_pool[Math.floor(Math.random() * this.mating_pool.length)];
            let child = parent_a.crossOver(parent_b);
            child.mutate();
            new_population.push(child);
        }
        this.popualtion = new_population;
    },
}