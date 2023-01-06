const form = document.querySelector('#timestamp-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const year = document.querySelector('#year').value;
  const month = document.querySelector('#month').value;
  const day = document.querySelector('#day').value;
  const hour = document.querySelector('#hour').value;
  const minute = document.querySelector('#minute').value;
  const second = document.querySelector('#second').value;


  const date = new Date(year, month-1, day, hour, minute, second);
  const timestamp = date.getTime() / 1000;
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