const tariffTitles = document.querySelectorAll('.tariff-title');

tariffTitles.forEach(title => {
    title.addEventListener('click', () => {
        const details = title.nextElementSibling;
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    });
});