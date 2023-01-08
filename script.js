const defaultDate = new Date()
const defaultTime = defaultDate.toLocaleTimeString([], {hourCycle: 'h23', hour: '2-digit', minute: '2-digit'})
document.querySelector('#time').value = defaultTime
document.querySelector('#date').valueAsDate = defaultDate

const form = document.querySelector('#timestamp-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const selectedDate = document.querySelector('#date').value;
  const selectedTime = document.querySelector('#time').value;

  const newDate = new Date(`${selectedDate} ${selectedTime}`);
  const timestamp = newDate.getTime() / 1000;
  document.querySelector('#result-timestamp').textContent = `<t:${timestamp}>`
  document.querySelector('#result-timestamp').style.display = "block"
  copyToClipboard(`<t:${timestamp}>`)
});

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
