# Pokémon Explorer - pokemon-api-proj

## Overview
**Pokémon Explorer** is a simple web application that allows users to search for Pokémon and view their details. The project uses the [PokéAPI](https://pokeapi.co/) to fetch real-time Pokémon data, including images, types, abilities, and stats.

## Features
- Search for Pokémon by name or ID
- View Pokémon details including type, abilities, and stats
- Responsive Bootstrap-based UI
- Navigation between pages for searching and viewing details

## Technologies Used
- **HTML, CSS, JavaScript** - Core web technologies
- **Bootstrap 5** - Responsive UI framework
- **PokéAPI** - Fetching Pokémon data
- **Fetch API & Async/Await** - Handling API requests

## Project Structure
```
pokemon-api-proj/
│── index.html        # Home page
│── search.html       # Search Pokémon page
│── details.html      # Pokémon details page
│── search.js         # Handles Pokémon search functionality
│── details.js        # Fetches and displays Pokémon details
│── poke.css          # Styling file
│── README.md         # Project documentation
```

## Installation & Setup
### Clone the repository:
```bash
git clone https://github.com/scotty-r-white/pokemon-api-proj.git
```
### Navigate into the project folder:
```bash
cd pokemon-api-proj
```
### Open `index.html` in a browser.

## How to Use
1. Open the homepage (`index.html`).
2. Click "Start Searching" to navigate to the search page.
3. Enter a Pokémon name or ID in the search box.
4. Click "Search" to fetch and display Pokémon details.
5. Click "View Details" to see additional information.
6. Use the navigation bar to move between pages.

## Future Improvements
- Improve UI/UX with animations and enhanced styles
- Implement search suggestions/autocomplete
- Add more Pokémon data such as evolutions and move sets

## License
This project is open-source and available under the [MIT License](LICENSE).
