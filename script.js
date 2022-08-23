const email = document.getElementById('email')
const btn = document.getElementById('btn')
const msg = document.getElementById('error-msg')
const container = document.querySelector('.container')
const thankYou = document.querySelector('.thank-you')

const regularExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//ultlity-functions
function validation() {
  if (!email.value.match(regularExp)) {
    msg.classList.add('active')
    email.classList.add('active')

    return false
  } else {
    msg.classList.remove('active')
    email.classList.remove('active')
    return true
  }
}

//event-listener
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
