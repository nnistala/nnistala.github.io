const loadingScreen = document.getElementById('loading-screen');
const vrScene = document.getElementById('vr-scene');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', async () => {
    const searchTerm = searchInput.value;
    
    if (searchTerm) {
        // Simulate AI-generated 360-degree image using Lorem Picsum
        const response = await fetch(`https://picsum.photos/800/800?random=${searchTerm}`);
        const imageUrl = response.url;
        
        // Hide loading screen and show VR scene
        loadingScreen.style.display = 'none';
        vrScene.style.display = 'block';
        
        // Create a 360-degree image element based on the generated URL
        const image360 = document.createElement('img');
        image360.setAttribute('src', imageUrl);
        image360.setAttribute('crossorigin', 'anonymous');
        image360.setAttribute('360-image', '');
        vrScene.appendChild(image360);
    }
});
