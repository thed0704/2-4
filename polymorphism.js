const gamingCapability = Base => class extends Base{
    gaming(){
        return "Playing Apex Legend at 120fps!"
    }
}

const editingCapability = Base => class extends Base{
    editing(){
        return "Edit and Render 8k projects!"
    }
}


class Laptop {
    constructor(brand, type){
        this.brand = brand
        this.type = type
    }

    run(){
        return `${this.brand} ${this.type} is on!`
    }
}

class LaptopGaming extends gamingCapability(Laptop){
    constructor(brand, type){
        super(brand, type)
    }

    run(){
        return super.run() + "\n" + this.gaming()
    }
}

class LaptopEditing extends editingCapability(Laptop){
    constructor(brand, type){
        super(brand, type)
    }

    run(){
        return super.run() + "\n" + this.editing()
    }
}

class LaptopHybrid extends gamingCapability(editingCapability(Laptop)){
    constructor(brand, type){
        super(brand, type)
    }

    run(){
        return super.run() + "\n" + this.gaming() + "\n" + this.editing()
    }
}

const laptop = new Laptop("lenovo", "thinkpad")
const laptopGaming = new LaptopGaming("asus", "rog")
const laptopEditing = new LaptopEditing("lenovo", "legion")
const laptopHybrid = new LaptopHybrid("mac", "pro")

console.log(laptop.run())
console.log()

console.log(laptopGaming.run())
console.log()

console.log(laptopEditing.run())
console.log()

console.log(laptopHybrid.run())
console.log()
