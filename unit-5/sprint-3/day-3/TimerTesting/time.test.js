const time=require("./time")

describe("testing time conversion function",()=>{
    test("check for singular second",()=>{
        expect(time(1000)).toBe("1 second")
    })
    test("check for plural seconds",()=>{
        expect(time(5300)).toBe("5 seconds")
    })
    test("check for singular minute",()=>{
        expect(time(60000)).toBe("1 minute")
    })
    test("check for singular minutes",()=>{
        expect(time(60000*3)).toBe("3 minutes")
    })
    test("check for singular minute and singular second",()=>{
        expect(time(181000)).toBe("3 minutes 1 second")
    })
    test("check for singular minute and plural seconds",()=>{
        expect(time(182000)).toBe("3 minutes 2 seconds")
    })
    test("check for singular hour",()=>{
        expect(time(3600000)).toBe("1 hour")
    })
    test("check for plural hours",()=>{
        expect(time(7200000)).toBe("2 hours")
    })
    test("check for singular hour and minutes ans seconds",()=>{
        expect(time(7381000)).toBe("2 hours 3 minutes 1 second")
    })
})