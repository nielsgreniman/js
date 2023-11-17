let a = 1
let b = 2

/* asynkrone funtkioner kan ofte spottes ved 
at de tager en funktion som parameter, der kaldes
efte en vis forsinkelse */

setTimeout(function() {
    console.log('Async1')
}, 1000)

setTimeout(function() {
    console.log('Async2')
}, 800)

setTimeout(function() {
    console.log('Asyn3')
}, 900)

setTimeout(function() {
    console.log('Async4')
}, 799.1)

fetch('/').then(function() {
    console.log('Fetch') 
})

console.log('jeg kommer før')
console.log(a)
console.log(b)