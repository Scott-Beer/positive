document.addEventListener('DOMContentLoaded', () => {
    const tilesContainer = document.getElementById('tiles-container');
    const messagePopup = document.getElementById('message-popup');
    const messagePopupText = document.getElementById('message-popup-text');
    const closeMessageButton = document.getElementById('close-message-button');

    const dogImageFolder = 'pixel_art_dog_variations/';
    const dogImages = [
        { file: 'pixel_art_dog_1.png', alt: 'Pixel art dog, variation 1' },
        { file: 'pixel_art_dog_2.png', alt: 'Pixel art dog, variation 2' },
        { file: 'pixel_art_dog_3.png', alt: 'Pixel art dog, variation 3' },
        { file: 'pixel_art_dog_4.png', alt: 'Pixel art dog, variation 4' },
        { file: 'pixel_art_dog_5.png', alt: 'Pixel art dog, variation 5' },
        { file: 'pixel_art_dog_6.png', alt: 'Pixel art dog, variation 6' }
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

    let previouslyFocusedElement = null; // To store the element that had focus before popup

    const showMessage = () => {
        const randomIndex = Math.floor(Math.random() * positiveMessages.length);
        messagePopupText.textContent = positiveMessages[randomIndex];
        messagePopup.classList.add('message-popup--visible');
        messagePopup.setAttribute('aria-hidden', 'false');

        previouslyFocusedElement = document.activeElement; // Save currently focused element
        closeMessageButton.focus(); // Set focus to the close button
    };

    const hideMessage = () => {
        messagePopup.classList.remove('message-popup--visible');
        messagePopup.setAttribute('aria-hidden', 'true');
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus(); // Restore focus to the element that opened the popup
        }
    };

    const createTile = (imageData) => {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.backgroundImage = `url('${dogImageFolder}${imageData.file}')`;
        tile.setAttribute('role', 'button');
        tile.setAttribute('tabindex', '0'); // Make it focusable
        tile.setAttribute('aria-label', imageData.alt + '. Click or press Enter to reveal a message.');

        // Add image element for accessibility, though visually hidden if background is preferred
        const img = document.createElement('img');
        img.src = `${dogImageFolder}${imageData.file}`;
        img.alt = imageData.alt;
        img.style.display = 'none'; // Hide if using background image for display
        tile.appendChild(img);

        tile.addEventListener('click', showMessage);
        tile.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent scrolling if space is pressed
                showMessage();
            }
        });

        return tile;
    };

    const initializeApp = () => {
        if (!tilesContainer || !messagePopup || !messagePopupText || !closeMessageButton) {
            console.error('Required DOM elements are missing. Check your HTML IDs.');
            return;
        }

        dogImages.forEach(imageData => {
            const tile = createTile(imageData);
            tilesContainer.appendChild(tile);
        });

        closeMessageButton.addEventListener('click', hideMessage);

        // Close popup with Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && messagePopup.classList.contains('message-popup--visible')) {
                hideMessage();
            }
        });
    };

    // Initialize the application once the DOM is fully loaded
    initializeApp();
});