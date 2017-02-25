let animals = []
animals.push('cow')

let quackers = {
  'username': 'DaffyDuck',
  'tagline': 'Yippeee!',
  'noises': ['quack',
  'honk',
  'sneeze',
  'growl'
]}

animals.unshift(quackers)

console.log(animals.length) // 2

let mick = {
  'username': 'MickeyMouse',
  'tagline': 'Hi',
  'noises': ['Yup',
  'what',
  'hmmm',
  'mmkay'
]}

animals.unshift(mick)

let eric = {
  'username': 'EricCartman',
  'tagline': 'Authortee',
  'noises': ['coo',
  'somebody',
  'what',
  'you'
]}

animals.unshift(eric)

console.log(animals.legth) //4
