const FinishTimes = {
    timeout: 2000,
    justInTime: 1999,
    tooLate: 2001,
    finishedInTime: 1000
}
const timeToComplete = FinishTimes.finishedInTime;
 
const getPromise = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => { reject('timeout') }, FinishTimes.timeout);
        setTimeout(() => { resolve('complete') }, timeToComplete);
    })
}
 
const test = () => {
    getPromise().then((res) => { console.log(res) })
    .catch((res) => { console.log(res) });
    console.log('in test1')
}
 
async function test2() {
    var x = await getPromise().catch((res) => console.log('it failed'))
    console.log('in test2')
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
 
// console.log('before test called')
// start(0)
// test()
// test2()
// console.log('after test called')
 
module.exports = { 
    start: start,
    test: test, 
    test2: test2 
}