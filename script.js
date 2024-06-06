const items = document.querySelectorAll('.item');

items.forEach(item => {
    const image = item.querySelector('.image');
    const description = item.querySelector('.description');
    const texts = item.querySelector('.texts');
    const button = document.createElement('button');
    button.classList.add('more-btn');
    button.innerHTML = 'Know more &#129130;';
    texts.appendChild(button);

    // Hiding the button initially
    button.style.display = 'none';

    item.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.filter = 'grayscale(100%) blur(4px) brightness(50%)';
        image.style.transition = 'all 0.5s ease';

        description.style.transform = 'translateY(-20%)';
        description.style.transition = 'all 0.5s ease';

        // Showing the button the button
        button.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        image.style.filter = 'grayscale(0%) blur(0px) brightness(100%)';
        image.style.transition = 'all 0.5s ease';

        description.style.transform = 'translateY(0%)';
        description.style.transition = 'all 0.5s ease';

        // Hiding the button the button again on mouseout
        button.style.display = 'none';
    });
});
