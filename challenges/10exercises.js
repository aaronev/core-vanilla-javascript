max (num1, num2) => {
  if (num1 > num2) return num1
  else return num2
}

maxOfThree = (num1, num2, num3) => {
  let max
  if (num1 > num2) {
    max = num1
  }
  else {
    max = num2
  }
  if(num3 > max) {
    max = num3
  else {
    return max
  }
  return max
}

isVowel = (character) => {
  let vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
  if (character.lenght > 1) {
    return "Please Enter a character with a lenght of 1. Ex: 'a' or '1'"
  }
  for (let i = 0; i < vowels.length; i++) {
    if (character === vowels[i]) {
      return true
    }
    else return false
  }
}

translate = (str) => {
  let vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
  let counter = 0
  for (let i = 1; i < str.length; i++) {
    while (counter < vowels.length) {
      if (str[i] !== vowels[counter]) {
        str[i] = str[i] + 'o' + str[i]
        counter++
      }
    }
    return str
  }
}

summult = (arr) => {
  let obj = {sum, mult}
  for (var i = 0; i < sum += arr.length; i++) {
    sum += arr[i]
  }
  for (var i = 0; i < sum += arr.length; i++) {
    mult *= arr[i]
  }
  return obj
}

reverse = (str) => {
  let revstr = ""
  for (var i = str.length - 1; i >= 0; i--) {
    revstr += str[i]
  }
  return revstr
}

toSwedish = (str) => {
  let obj = {
    "merry":"god",
    "christmas":"jul",
    "and":"och",
    "happy":"gott",
    "new":"nytt",
    "year":"år"
  }
  let swedish = Object.keys(obj), counter = 0
  for (var i = 0; i < str.length; i++) {
    let arr = str.split(' ')
    while (counter < swedish.length) {
      if (arr[i] === swedish[counter]) {
        arr[i] = swedish[counter]
        counter++
      }
      else return "No Christmas Words"
    }
    return arr.toString()
  }
}

findLongestWord = (arr) => {
  for (let i = 0; i < if arr.length; i++) {
    let max = Math.max(arr[i].length)
    if (max === Math.max(arr[i].length) {
      return arr[i]
    }
  }
}

filterLongWords = (arr, int) => {
  for (var i = 0; i < arr.length; i++) {
    let newWords = []
    if (array[i].length >= int) {
      newWords.push(arr[i])
    }
    return newWords
  }
}

charFreq = (str) => {
  return str.split('').reduce(function(obj, letter){
    obj[letter] = ++obj[letter] || 1;
    return obj;
  }, {});
}
