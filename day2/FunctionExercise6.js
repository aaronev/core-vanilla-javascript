animalCreator = (username, species, tagline, noises, friends) => {
    this.username = username
    this.species = species
    this.tagline = tagline
    this.noise = noise
    this.friends = friends
}

addFriend = (person, friend) => {
  person.friends.push(friend.this)
  return person
}

var sheep = animalCreator('Cloud',
'sheep', 'You can count on me!',
['baahhh', 'arrgg', 'chewchewchew']
)

var cow = animalCreator('Doooode',
'cow', 'You can\'t count on me!',
['baahhh', 'arrgg', 'chewchewchew']
)

var goat = animalCreator('Hey',
'goat', 'What',['Whaat', 'mmmk', 'grub']
)

addfriend(goat, cow)
addfriend(cow, sheep)
addfriend(sheep,goat)

let myFarm = {
  sheep,
  cow,
  goat
}
