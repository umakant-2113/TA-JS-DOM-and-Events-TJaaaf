function mermory() {
  

  const emojiArray = [
    `😎`, `🥸`, `🤩`, `🤯`, `🤓`, `♥️`, `🤑`, `😈`, `😎`, `🥸`, `🤩`, `🤯`, `🤓`, `♥️`, `🤑`, `😈`
  ]
  
  
  let totalTurn = document.querySelector(`span`)
  
  let arr = [];
  let arrId = [];
  let countClick = 0
  let totalCount = 0
  let win = 0
  let ul = document.querySelector(`ul`)
  
  emojiArray.sort(() => 0.5 - Math.random())
  
  
  
  // foreach
  emojiArray.forEach((emoji, index) => {
    let div = document.createElement(`div`)
  
    let li = document.createElement(`li`)
    div.innerText = emoji
    div.setAttribute("id", index)
  
    //setime out
    setTimeout(() => {
      div.style.display = `none`
    }, 800);
  
    li.append(div)
    li.className = `box`
    ul.append(li)
  
    //addeventlistener
    li.addEventListener(`click`, function (event) {
      div.style.display = `block`
      // let id = 
      arr.push(event.target.firstChild.innerText)
      arrId.push(event.target.firstChild.id)
      // arrId.push(id)
      totalCount++
      totalTurn.innerText = `Total Moves 32/${totalCount}`
      countClick = countClick + 1
  
      if (countClick <= 2) {
  
        if (countClick === 2) {
          if (arr[0] === arr[1]) {
            document.getElementById(arrId[0]).style.display = `block`;
            document.getElementById(arrId[1]).style.display = `block`;
            arr = []
            arrId = []
            win++
            if (win == 8) {
              alert(`You Won 🤑`)
              document.location.reload()
            }
  
          } else {
            setTimeout(() => {
              document.getElementById(arrId[0]).style.display = `none`;
              document.getElementById(arrId[1]).style.display = `none`;
              arr = []
              arrId = []
            }, 1200);
  
          }
          countClick = 0
        }
  
      }
      if (totalCount == 12) {
        alert(`GAME OVER☄️
            
        Try Again`)
        document.location.reload()
      }
    })
  
  
  })
  
  }
  mermory()