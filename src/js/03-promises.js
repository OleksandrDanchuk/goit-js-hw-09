import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  if (step <= 0 || delay <= 0 || amount <= 0) {
    Notiflix.Notify.failure(
      'Please enter positive values for delay, step, and amount'
    );
    return;
  }

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + i * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
