let animal = {
  this.username
  animal[tagline] = "hello"
  animal[noises] = []
}

let keys = Object.keys(animal)
for (i = 0; i < keys.length; i++) {
  if (keys[i] === 'username') {
    console.log('Hi my name is' + Object.values(keys[i]))
  }
  else if (keys[i] === 'tagline') {
    console.log('I like to say' + Object.values(keys[i]))
  }
}
