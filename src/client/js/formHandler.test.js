const formHandler = require("./formHandler")
// @ponicode
describe("formHandler.handleSubmit", () => {
    test("0", () => {
        let callFunction = () => {
            formHandler.handleSubmit(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            formHandler.handleSubmit(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            formHandler.handleSubmit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
