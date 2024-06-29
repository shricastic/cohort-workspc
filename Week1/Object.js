const obj = {
  key1: "value1", 
  key2: "value2", 
  key3: "value3"
}

console.log("Original Object: ", obj)

let keys = Object.keys(obj)
console.log("Keys: ", keys)

let values = Object.values(obj)
console.log("Values: ", values)

let entries = Object.entries(obj)
console.log("Entries: ", entries)

let hasProp = obj.hasOwnProperty("property")
console.log("After hasOwnProperty(): ", hasProp)

let newObj = Object.assign({}, obj, {newProperty: "newValue"})
console.log("After assigning to newObj: ", newObj)
