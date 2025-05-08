document.addEventListener('DOMContentLoaded', () => {
    const tilesContainer = document.getElementById('tiles-container');
    const messageDisplay = document.getElementById('message-display');
    const messageText = document.getElementById('message-text');
    const closeMessageButton = document.getElementById('close-message');

    const dogImageFolder = 'pixel_art_dog_variations/';
    const dogImages = [
        'pixel_art_dog_1.png',
        'pixel_art_dog_2.png',
        'pixel_art_dog_3.png',
        'pixel_art_dog_4.png',
        'pixel_art_dog_5.png',
        'pixel_art_dog_6.png'
    ];

    const positiveMessages = [
        "Paige, you are a beacon of calm and serenity.",
        "May you find peace and tranquility in your day, Paige.",
        "Your presence is a source of comfort, Paige.",
        "Paige, you possess a wonderful and gentle spirit.",
        "Wishing you a day filled with quiet joy, Paige.",
        "You have a soothing and kind nature, Paige.",
        "Paige, your inner strength is inspiring.",
        "May your moments be filled with peaceful thoughts, Paige.",
        "Keep shining your gentle light, Paige.",
        "Paige, you bring a sense of calm to those around you."
    ];

    dogImages.forEach(imageFile => {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.backgroundImage = `url('${dogImageFolder}${imageFile}')`;

        tile.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * positiveMessages.length);
            messageText.textContent = positiveMessages[randomIndex];
            messageDisplay.classList.remove('hidden');
        });

        tilesContainer.appendChild(tile);
    });

    closeMessageButton.addEventListener('click', () => {
        messageDisplay.classList.add('hidden');
    });
});