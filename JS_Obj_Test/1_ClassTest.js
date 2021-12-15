//构建函数
function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last': last
    }
    this.age = age
    this.gender = gender
    this.interests = interests
    this.bio = function() {
      console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    }
    this.greeting = function() {
      console.log('Hi! I\'m ' + this.name.first + '.');
    }
}

let xiaoming = new Person('Li', 'Xiaoming', '22', 'male', ['do nothing', 'sleep'])

xiaoming.bio()
//Object()
var person2 = new Object()
person2.name = ['Wang', 'Xiaogang']
person2.age = 24
person2.bio = function() {
    console.log('This is ' + this.name[1] + ', ' + this.age + ' years old')
}
//create()
person2.bio()

var person3 = Object.create(person2)
person3.name = ['Zhao', 'Xiaohong']
person3.bio()