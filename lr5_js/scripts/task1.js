const fInput = document.getElementById('fahrenheit');
const cInput = document.getElementById('celsius');

fInput.addEventListener('input', () => {
  const f = parseFloat(fInput.value);
  if (!isNaN(f)) {
    const c = (5/9) * (f - 32);
    cInput.value = c.toFixed(2);
  } else {
    cInput.value = '';
  }
});


cInput.addEventListener('input', () => {
  const c = parseFloat(cInput.value);
  if (!isNaN(c)) {
    const f = (c * 9/5) + 32;
    fInput.value = f.toFixed(2);
  } else {
    fInput.value = '';
  }
});