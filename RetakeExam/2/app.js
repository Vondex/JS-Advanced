class VegetableStore{
    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts  = [];

        this.history = []
    }

    loadingVegetables(vegetables){

        vegetables.forEach((el) => {
            let [type, quantity, price] = el.split(' ');

            quantity = Number(quantity);
            price = Number(price);

            if (this.availableProducts.some(p => p.type == type)){
                this.availableProducts[quantity] += quantity;

                console.log('Successfully added Okra, Beans, Celery')

                
            }
       
            
        })

    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
