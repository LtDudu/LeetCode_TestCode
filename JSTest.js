PrintLine('Start')

let a = "abcd"
for(let i = 0; i < a.length; i++) {
    console.log(a[i])
    let temp = "time" + i.toString()
    PrintLine(temp)
}

PrintLine('End')

function PrintLine(s) {
    console.log('------' + s + '------')
}

<<<<<<< HEAD
console.log('nihao')
=======
console.log('new')
>>>>>>> bc5555c829bfaeea367058c7ffef2a3d2eb3c0f2
