import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let selectDates = 0
const buttonStart = document.querySelector('button[data-start=""]');
const secondsIn = document.querySelector('[data-seconds]');
const minutesIn = document.querySelector('[data-minutes]');
const hoursIn = document.querySelector('[data-hours]');
const daysIn = document.querySelector('[data-days]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      buttonStart.disabled = true
      Notiflix.Notify.failure("Please choose a date in the future")
    } else {
      buttonStart.disabled = false
    }
    selectDates = selectedDates[0]
  },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


buttonStart.addEventListener("click", () => {
  const dateFuture = selectDates
  setInterval(() => {
    const dateNow = new Date() 
    let dateDelta = dateFuture - dateNow
    let result = convertMs(dateDelta)

    secondsIn.textContent = result.seconds
    minutesIn.textContent = result.minutes
    hoursIn.textContent = result.hours
    daysIn.textContent = result.days


  },1000)

  
});
