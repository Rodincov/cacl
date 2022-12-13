let input = document.querySelector('input')
let res = document.querySelector('.calc-top > button')

let num = document.querySelectorAll('.calc-num > button')
let oper = document.querySelectorAll('.calc-operators > button')


let outer = ''
num.forEach(val => {
    val.addEventListener('click', function() {
        outer += this.innerHTML
        input.value = outer
        console.log(outer);
    })
})
oper.forEach((val, index) => {
    val.addEventListener('click', function() {
        outer = outer + this.innerHTML
        input.value = outer
        
        

    })
})

res.addEventListener('click', function() {
input.value = eval(input.value)
})

// eval('alert(5+5)') превращает строку в код