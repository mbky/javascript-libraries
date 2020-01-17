class testClass {
    constructor() {
        this.x= 10
        this.y = "hello"
        this.l = [0,1,2,3,4,5]
        this.f = (i) => {
            return(i*i)
        }
    }
}

function testPrototype() {
    this.x = 10
    this.y = "hello",
    this.l = [0,1,2,3,4,5]
    this.f = (i) => {
        return(i*i)
    }
}

function testObject() {
    return {
        x: 10,
        y: "hello",
        l:[0,1,2,3,4,5],
        f: (i) => {
            return(i*i)
        }
    }
}

module.exports = { 
    testClass,
    testPrototype,
    testObject
}
