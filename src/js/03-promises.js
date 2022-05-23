import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const fistDeplay = document.querySelectorAll('input')[0]
const stepDeplay = document.querySelectorAll('input')[1]
const amountDeplay = document.querySelectorAll('input')[2]
let time = 0

function createPromise(position, delay, step) {
  if (step === 0) {
    time = 0
    time = time + Number(position)
  } else {
    time = time + Number(delay)
  }

  
  return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      
      if (shouldResolve) {
        // Fulfill
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${step+1} in ${time}ms`)) 
      } else {
        reject(Notiflix.Notify.failure(`❌ Rejected promise ${step+1} in ${time}ms`))  
      }
    
  })
}

form.addEventListener("submit", function (event) {

  event.preventDefault()

  for (let i = 0; i <= amountDeplay.value - 1; i += 1) {
    if (i === 0) {
      setTimeout(
        createPromise(fistDeplay.value, stepDeplay.value, i), fistDeplay.value
      )  
    } else {
      setTimeout(
        createPromise(fistDeplay.value, stepDeplay.value, i), stepDeplay.value
      )
    }
}   

} 
);