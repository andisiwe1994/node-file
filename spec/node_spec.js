let {Visitor, } = require('../src/node')

describe('function save()', () => {
    let alice = new Visitor('alice_cooper', 26, '05/10/2020', '16:45', 'happy', 'Andisiwe')

    it('exists', () => {
        expect(alice.save).toBeDefined()
    })

    it("writes a visitor's content to a named file", () => {
    fs = require('fs')

    alice.save()

    fs.readFile('visitor_alice_cooper.json', 'UTF8', (err, data) =>{
        if(err)throw err
        else{
            let readData = JSON.parse(data)

    describe('function load()', () => {
        let readData = JSON.parse(data)

    it("should have visitor's full name", () => {             
        expect(this.fullName).toEqual('alice_cooper')
    })

    it("should have visitor's age", () => {     
        expect(readData.age).toBe(26)
    })
    
    it("should have date of visit", () => {
        expect(readData.date).toBe('05/10/2020')
    })

    it("should have time of visit", () => {
        expect(readData.time).toBe('16:45')
    })

    it("should have comments", () => {
        expect(readData.comments).toBe('happy')
    })

    it("should have assistant's name", () => {
            expect(readData.assistant).toBe('Andisiwe')
    })
})
        })
    })