// Function to handle the "Connect" button click
document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.querySelector('.connect-btn');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    
    // Event listener for "Connect" button
    if (connectButton) {
        connectButton.addEventListener('click', () => {
            alert("You've sent a connection request!");
        });
    }

    // Event listener for "Search" button
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const query = searchInput.value;
            if (query) {
                alert(`Searching for: ${query}`);
                // You can implement actual search logic here
            } else {
                alert('Please enter a search term!');
            }
        });
    }

    // Optional: Automatically trigger search on Enter key press in search input
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
});
