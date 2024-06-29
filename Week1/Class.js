class Animal {
  constructor(name, legCount){
    this.name = name
    this.legCount = legCount
  }

  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let a = new Animal("Pawan", 4)
console.log(a.describe())
