const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const output = document.getElementById('text');

checkboxes.forEach(box => {
    box.addEventListener('change', () => {
        const selected = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        output.textContent = selected.join(', ');
    });
});
