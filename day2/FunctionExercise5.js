animalCreator = (username, species, tagline, noises, friends) => {
    this.username = username
    this.species = species
    this.tagline = tagline
    this.noise = noise
    this.friends = friends
}

var sheep = animalCreator('Cloud',
'sheep', 'You can count on me!',
['baahhh', 'arrgg', 'chewchewchew']
)

var cow = animalCreator('Doooode',
'cow', 'You can\'t count on me!',
['baahhh', 'arrgg', 'chewchewchew']
)

addFriend = (person, friend) => {
  person.friends.push(friend.this)
  return person
}
