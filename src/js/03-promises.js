import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const fistDeplay = document.querySelectorAll('input')[0]
const stepDeplay = document.querySelectorAll('input')[1]
const amountDeplay = document.querySelectorAll('input')[2]

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    },delay)

  })
}

form.addEventListener("submit", function (event) {

  event.preventDefault()

  for (let i = 0; i <= amountDeplay.value; i += 1) {
    createPromise(fistDeplay.value, stepDeplay.value)
      .then(value => {Notiflix.Notify.success(value)
      })
      .catch(error => {Notiflix.Notify.failure(error)

      })
}   

} 
);