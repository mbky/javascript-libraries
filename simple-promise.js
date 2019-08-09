const FinishTimes = {
    timeout: 2000,
    justInTime: 1999,
    tooLate: 2001,
    finishedInTime: 1000
}
const timeToComplete = FinishTimes.tooLate;
 
var p = new Promise((resolve, reject) => {
    setTimeout(() => { reject('timeout') }, FinishTimes.timeout);
    setTimeout(() => { resolve('complete') }, timeToComplete);
})
 
const test = () => {
    console.log('in test1')
    p.then((res) => { console.log(res) })
        .catch((res) => { console.log(res) });
}
 
async function test2() {
    console.log('in test2')
    var x = await p.catch((res) => console.log('it failed'))
    if (x !== undefined) {
        console.log('it completed')
    }
}
 
function start(counter) {
    if (counter++ < 10) {
        setTimeout(function () {
            console.log(counter)
            start(counter);
        }, FinishTimes.timeout / 10);
    }
}
 
console.log('before test called')
start(0)
test()
test2()
console.log('after test called')
 
//exports = { test2 }