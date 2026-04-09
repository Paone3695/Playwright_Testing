class ICICI {
  #balance
  constructor (name, balance) {
    this.name = name
    this.#balance = balance
  }

  getBalance () {
    return this.#balance
  }

  setBalance (balance, cashier) {
    if (cashier) {
      this.#balance = balance
    } else {
      console.log('Not allowed')
    }
  }
}

let bal = new ICICI('Pavan', 1000)
console.log(bal.getBalance())

bal.setBalance(1000000, false)

console.log(bal.getBalance())

console.log('Is cahier is True');

let setbal = new ICICI('Pavan', 2000)
console.log(setbal.getBalance())
setbal.setBalance(300000, true)
console.log(setbal.getBalance())
