'use strict'



var cat = {
  name: {first: 'Fluffy', last: 'LeBeouf'},
  color: 'White'
}
console.log (cat.name)

// Writable Attribute
Object.defineProperty(cat, 'name', {writable: false})
cat.name.first = 'Scratchy'
console.log (cat.name)

Object.defineProperty(cat, 'name', {enumerable: false})
