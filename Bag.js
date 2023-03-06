class Bag {
    constructor(weight) {
        this.maxWeight = 23;
        if(!weight){
            throw new Error('bag needs weight')
        } else if(weight > this.maxWeight){
            throw new Error('bag is over the limit of 23kg')
        } else {
            this.weight = weight
        }
    }
}

module.exports = Bag;
