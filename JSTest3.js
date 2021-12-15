function Car(name, color) {
    this.name = name
    this.color = color
}

Car.prototype.material = "steel"

var car1 = new Car('BMW', 'White')
var car2 = new Car('Benz', 'Black')

console.log(car1.material)  //steel
console.log(car2.material)  //steel

//car1.prototype.material = "plastic" //compile error, car1.prototype is undefined
car1.material = "plastic"

console.log(car1.material)  //plastic
console.log(car2.material)  //steel
console.log(Car.prototype.material) //steel

Car.prototype.material = "carbon"
console.log(car1.material)  //plastic
console.log(car2.material)  //carbon
console.log(Car.prototype.material) //carbon
