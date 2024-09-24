class Laptop {
    constructor(brand, type, password){
        this.brand = brand
        this.type = type
        this.encryptedPassword = this.#encrypt(password)
    }

    info(){
        const ret = [`Brand Laptop   : ${this.brand}`, `Type Laptop    : ${this.type}`]
        return ret
    }

    run(){
        return `${this.brand} ${this.type} is on!`
    }

    #encrypt(password){
        return `encrypted-version-of-${password}`
    }

    #decrypt(){
        return this.encryptedPassword.split("encrypted-version-of-")[1]
    }

    authenticate(password){
        return this.#decrypt() === password
    }
}

class LaptopGaming extends Laptop{
    constructor(brand, type, password){
        super(brand, type, password)
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

const laptop = new Laptop("lenovo", "thinkpad", "123")
const laptopGaming = new LaptopGaming("asus", "rog", "123")

console.log(laptop.run())
laptop.info().map(v => console.log(v))
console.log(laptop.authenticate("123") ? "password benar" : "password salah")
console.log()

console.log(laptopGaming.gaming())
laptopGaming.info().map(v => console.log(v))
console.log(laptopGaming.authenticate("1234") ? "password benar" : "password salah")