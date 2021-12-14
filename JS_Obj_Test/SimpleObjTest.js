//简单的字面量对象
let xiaoming = {
    name :  {                                           //子命名空间
        first : 'Li',
        last : 'Xiaoming'
    },
    birthyear : 1996,
    gender : 'male',
    greeting : function() {
        console.log("Hello! I'm " + this.name.last)
    }
}

xiaoming.greeting()

//括号表示法
console.log('gender: ' + xiaoming['gender'])                           

//动态设置成员
let myDataName = 'height'           
let myDataValue = '1.71m'
xiaoming[myDataName] = myDataValue                        
console.log('height: ' + xiaoming.height)

xiaoming.fart = () => {console.log('Puuuuuuuuuuuf!')}
xiaoming.fart()