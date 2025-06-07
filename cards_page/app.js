// Replace with the actual URL for the Pokémon TCG API
const url = 'https://api.pokemontcg.io/v2/cards';

// Function to fetch Pokémon cards
function fetchPokemonCards() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Fetched Pokémon Cards:', data);
      
      // Display the first card name and image on the webpage
      const cardsContainer = document.getElementById('cards-container');
      if (data.data.length > 0) {
        const firstCard = data.data[0];
        
        // Create elements to display the card name and image
        const cardName = document.createElement('h2');
        cardName.textContent = firstCard.name;
        
        const cardImage = document.createElement('img');
        cardImage.src = firstCard.images.small;
        cardImage.alt = firstCard.name;
        
        // Append the card name and image to the container
        cardsContainer.appendChild(cardName);
        cardsContainer.appendChild(cardImage);
      }
    })
    .catch(error => {
      console.error('Error fetching Pokémon cards:', error);
    });
}

// Call the function to fetch and display cards
fetchPokemonCards();
