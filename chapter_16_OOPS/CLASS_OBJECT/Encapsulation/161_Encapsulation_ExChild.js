class Person {
  //Hide you childs
  #child1
  #child2

  constructor (name, ch1, ch2) {
    this.name = name
    this.#child1 = ch1
    this.#child2 = ch2
  }

  getchild1 () {
    return this.#child1
  }

  setChild1 (changed_name) {
    return this.#child1 = changed_name
  }
}

let p = new Person('Pavan', 'Test', 'Auto')
console.log(p.name)
// console.log(p.#child1);SyntaxError: Private field '#child1' must be declared in an enclosing class

console.log(p.getchild1())

console.log(p.setChild1('Playwright'))
