class Laptop {
    constructor(brand, type){
        this.brand = brand
        this.type = type
    }

    info(){
        const ret = [`Brand Laptop   : ${this.brand}`, `Type Laptop    : ${this.type}`]

        return ret
    }

    run(){
        return `${this.brand} ${this.type} is on!`
    }
}

class LaptopGaming extends Laptop{
    constructor(brand, type){
        super(brand, type)
    }

    info(){
        const ret = super.info()
        ret.push("Able to play games!")

        return ret
    }

    gaming(){
        return super.run() + "\nRunning PUBG and Valorant!"
    }
}

const laptop = new Laptop("lenovo", "thinkpad")
const laptopGaming = new LaptopGaming("asus", "rog")

console.log(laptop.run())
laptop.info().map(v => console.log(v))
console.log()
console.log(laptopGaming.gaming())
laptopGaming.info().map(v => console.log(v))