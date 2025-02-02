document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');
    const buttonsContainer = document.querySelector('.buttons');

    yesButton.addEventListener('click', () => {
        buttonsContainer.style.display = 'none';
        message.textContent = 'Sabia que dirias que si jsjsjs, me haces tan feliz que seas mi San Valentín. Eres la luz de mi vida, y tus ojitos son mi debilidad. Me enamoro más de ti cada día😘❤';
        message.classList.remove('hidden');
    });

    noButton.addEventListener('click', () => {
        const containerRect = buttonsContainer.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;

        const currentSize = yesButton.getBoundingClientRect().width;
        yesButton.style.width = `${currentSize + 10}px`;
        yesButton.style.height = `${currentSize + 10}px`;
    });
});