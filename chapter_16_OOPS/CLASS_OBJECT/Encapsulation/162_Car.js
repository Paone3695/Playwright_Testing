class Car{
    #engine;

    constructor(name,enignename){
        this.name=name;
        this.#engine=enignename;
    }

    getengine(){
        return this.#engine;
    }

    setEngineName(nameEngine){
        this.#engine = nameEngine;

    }

}

let tesla = new Car("Tesla", "V8");
console.log(tesla.getengine());
tesla.setEngineName("V9");
console.log(tesla.getengine());