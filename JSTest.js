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

