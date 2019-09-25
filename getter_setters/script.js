'use strict'



var cat = {
  name: {first: 'Fluffy', last: 'LeBeouf'},
  color: 'White'
}
console.log (cat.name)

//getters and setters
Object.defineProperty(cat, 'fullName',
{
  //getter
  get: function() {
    return this.name.first + ' ' + this.name.last
    },
    //setter
    set: function(value){
      let nameParts = value.split(' ')
      this.name.first = nameParts[0]
      this.name.last = nameParts[1]
    }
})
cat.fullName = 'Muffin Top'
console.log(cat.name)