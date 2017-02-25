animalCreator = (str) => {
  let str = [str]
  for (let i = 0; i < str.length; i++) {
    if (str[i] === null) {
      str[i] = []
    }
    return str
  }
  let obj = {
    'username': str[0],
    'species':, str[1],
    'tagline': str[2],
    'noises': str[3],
    'friends': str[4],
  }
  return obj
}
