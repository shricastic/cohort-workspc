const jsonString = '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}'

console.log("Original Json String: ", jsonString)

let parsedObject = JSON.parse(jsonString)
console.log("After parsing JSON: ", parsedObject)

let jsonStringified = JSON.stringify(parsedObject)
console.log("After converting object to string: ", jsonStringified)
