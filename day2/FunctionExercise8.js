giveMatches = (obj) => {
  for (let i = 0; i < obj.length; i++) {
    let anyKeys = Object.keys(obj)
    if (anyKeys[i] === 'matches') {
      let matchFriend = Object.keys(obj)
      if (matchFriend[i] === 'friends') {
        anyKeys.push(matchfriend[i][0])
      }
    }
  }
}
