const email = document.getElementById('email')
const btn = document.getElementById('btn')
const msg = document.getElementById('error-msg')
const container = document.querySelector('.container')
const thankYou = document.querySelector('.thank-you')

const regularExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

email.onfocus = () => {
  msg.style.display = 'none'
  email.style.borderColor = 'hsl(223, 100%, 88%)'
}

function validation() {
  if (!email.value.match(regularExp)) {
    msg.style.display = 'inline-block'
    email.style.borderColor = 'hsl(354, 100%, 66%)'
    return false
  } else {
    email.style.borderColor = 'hsl(223, 100%, 88%)'
    return true
  }
}

btn.addEventListener('click', () => {
  if (validation()) {
    container.innerHTML = `
    <div class="thank-you">
    <i class="fas fa-circle-check"></i>
    <h3>Awesome!</h3>
    <p>You will be notified on the date of launch.</p>
    <button onclick="location.reload()">Close</button>
  </div>
      `
  }
})
