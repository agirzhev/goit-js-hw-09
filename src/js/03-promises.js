import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const fistDeplay = document.querySelectorAll('input')[0]
const stepDeplay = document.querySelectorAll('input')[1]
const amountDeplay = document.querySelectorAll('input')[2]
let time = 0

function createPromise(position, delay, step, workTime) {
  if (step === 0) {
    time = 0
    console.log(time)
    time = time + Number(position)
    console.log(time)
  } else {
    time = time + Number(delay)
    console.log(time)
  }

  
  const promise = new Promise((resolve, reject) => {
  
    setTimeout(() => {
      const shouldResolve = Math.random();
      if (shouldResolve> 0.3){ 
        resolve(shouldResolve);
      }
        reject(shouldResolve)
    }, time);
    })
    
    
  promise.then(
    result => 
      Notiflix.Notify.success(`✅ Fulfilled promise ${step+1} in ${workTime}ms`) // result - аргумент resolve
    )
  promise.catch(  
    result => 
      Notiflix.Notify.failure(`❌ Rejected promise ${step+1} in ${workTime}ms`) // error - аргумент reject
    )  
}

form.addEventListener("submit", function (event) {

  event.preventDefault()
  let workTime = 0
  for (let i = 0; i <= amountDeplay.value - 1; i += 1) {
    if (i === 0) {
      workTime = workTime + Number(fistDeplay.value)
      createPromise(fistDeplay.value, stepDeplay.value, i, workTime)
    } else {
      workTime = workTime + Number(stepDeplay.value)
      createPromise(fistDeplay.value, stepDeplay.value, i, workTime)
    }
}   
} 
);