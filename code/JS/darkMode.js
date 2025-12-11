document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('color-schema-checkbox');
    const label = document.getElementById('color-schema-label');

    const savedState = localStorage.getItem('colorSchema');
    if (savedState === 'true') {
        checkbox.checked = true;
        label.textContent = 'Dark mode on';
    } else {
        checkbox.checked = false;
        label.textContent = 'Dark mode off';
    }

    checkbox.addEventListener('change', () => {
        localStorage.setItem('colorSchema', checkbox.checked);
        label.textContent = checkbox.checked ? 'Dark mode on' : 'Dark mode off';
    });
});