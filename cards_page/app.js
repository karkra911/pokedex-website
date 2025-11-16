// Replace with the actual URL for the Pokémon TCG API
const url = 'https://api.pokemontcg.io/v2/cards';

// Function to fetch Pokémon cards
function fetchPokemonCards() {
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.innerHTML = '<p>Loading Pokemon cards...</p>';
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched Pokémon Cards:', data);
      
      // Clear loading message
      cardsContainer.innerHTML = '';
      
      // Display the first card name and image on the webpage
      if (data.data && data.data.length > 0) {
        const firstCard = data.data[0];
        
        // Create elements to display the card name and image
        const cardName = document.createElement('h2');
        cardName.textContent = firstCard.name;
        
        const cardImage = document.createElement('img');
        cardImage.src = firstCard.images.small;
        cardImage.alt = firstCard.name;
        cardImage.onerror = function() {
          this.style.display = 'none';
          const errorMsg = document.createElement('p');
          errorMsg.textContent = 'Image failed to load';
          errorMsg.style.color = '#666';
          cardsContainer.appendChild(errorMsg);
        };
        
        // Append the card name and image to the container
        cardsContainer.appendChild(cardName);
        cardsContainer.appendChild(cardImage);
      } else {
        cardsContainer.innerHTML = '<p>No cards found</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching Pokémon cards:', error);
      cardsContainer.innerHTML = `<p style="color: red;">Failed to load Pokemon cards: ${error.message}</p><button onclick="fetchPokemonCards()">Retry</button>`;
    });
}

// Call the function to fetch and display cards
fetchPokemonCards();
