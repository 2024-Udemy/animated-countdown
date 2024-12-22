const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  nums.forEach((num) => {
    num.classList.value = ''
  })

  nums[0].classList.add('in')
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })  
  })
}

replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})  


// explanation ......

// The nums[0] (number 3) already has the class in from the resetDOM() function.
// The goIn animation starts for 3.

// Start: nums[0] (3) gets the in class → goIn animation begins.
// Event (End goIn for 3):
// 3 → Remove in, add out.
// Triggers goOut for 3.
// Event (End goOut for 3):
// 2 → Add in.
// Repeat: For 2 → 1 → 0.


// goIn Animation: Number moves into view.
// goOut Animation: Number moves out of view.