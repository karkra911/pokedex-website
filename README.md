# 🎮 Pokedex Website

A modern, interactive Pokedex application built with React that allows users to browse and search through Pokemon from the first generation.

🔗 **Live Demo:** [https://karkra911.github.io/pokedex-website/](https://karkra911.github.io/pokedex-website/)

## ✨ Features

- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🔍 **Real-time Search** - Instantly filter Pokemon by name
- 🖼️ **Pokemon Cards** - View Pokemon with official sprites and details
- ⚡ **Fast Loading** - Optimized performance with lazy-loaded images
- 🎨 **Clean UI** - Modern, user-friendly interface with smooth hover effects
- 🛡️ **Error Handling** - Graceful fallbacks for missing data or API failures

## 🚀 Technologies Used

- **React** - Frontend framework
- **PokeAPI** - Pokemon data source
- **CSS3** - Styling and animations
- **GitHub Pages** - Hosting and deployment

## 📦 Project Structure

```
pokedex-website/
├── pokedex/              # Main React application
│   ├── src/
│   │   ├── App.js        # Main app component
│   │   ├── Pokedex.js    # Pokemon display logic
│   │   ├── App.css       # App styling
│   │   └── index.css     # Global styles
│   ├── public/           # Static assets
│   └── build/            # Production build
├── cards_page/           # Pokemon TCG card viewer
├── index.html            # GitHub Pages entry point
└── static/               # Compiled assets

```

## 🛠️ Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/karkra911/pokedex-website.git

# Navigate to the project directory
cd pokedex-website/pokedex

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
# Create optimized production build
npm run build

# Copy build files to root for GitHub Pages
Copy-Item -Path "build\*" -Destination ".." -Recurse -Force
```

## 📝 API Reference

This project uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data:
- Fetches first 150 Pokemon (Generation 1)
- Retrieves Pokemon sprites from GitHub CDN
- No API key required

## 🔮 Future Updates

### Phase 1: Enhanced Features
- [ ] **Advanced Filters** - Filter by type, generation, and stats
- [ ] **Detailed Pokemon View** - Modal with complete stats, abilities, and evolution chain
- [ ] **Type Effectiveness Chart** - Show strengths and weaknesses
- [ ] **Generation Selector** - Browse Pokemon from all generations
- [ ] **Favorites System** - Save favorite Pokemon to local storage

### Phase 2: Expanded Functionality
- [ ] **Pokemon Comparison** - Side-by-side comparison of two Pokemon
- [ ] **Move Database** - Searchable move list with effects
- [ ] **Ability Information** - Detailed ability descriptions
- [ ] **Evolution Tracker** - Visual evolution chains with levels
- [ ] **Shiny Variants** - Toggle to view shiny sprite versions

### Phase 3: Advanced Features
- [ ] **Team Builder** - Create and save Pokemon teams (6 Pokemon max)
- [ ] **Type Coverage Calculator** - Analyze team type coverage
- [ ] **Damage Calculator** - Calculate battle damage scenarios
- [ ] **Dark Mode** - Toggle between light and dark themes
- [ ] **Multi-language Support** - Pokemon names in different languages

### Phase 4: Social & Interactive
- [ ] **Share Teams** - Generate shareable links for teams
- [ ] **Pokemon Quiz** - "Who's that Pokemon?" game
- [ ] **Random Pokemon Generator** - Get random Pokemon suggestions
- [ ] **Pokedex Progress** - Track which Pokemon you've viewed
- [ ] **Community Features** - Rate and comment on Pokemon

### Technical Improvements
- [ ] **TypeScript Migration** - Add type safety
- [ ] **State Management** - Implement Redux or Context API
- [ ] **Unit Tests** - Add Jest and React Testing Library
- [ ] **Performance Optimization** - Implement virtualization for large lists
- [ ] **PWA Support** - Add offline functionality and install prompt
- [ ] **Backend Integration** - User accounts and saved data

## 🐛 Known Issues

- None currently! Report issues [here](https://github.com/karkra911/pokedex-website/issues)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Pokemon data provided by [PokeAPI](https://pokeapi.co/)
- Pokemon sprites from [PokeAPI Sprites Repository](https://github.com/PokeAPI/sprites)
- Built with [Create React App](https://create-react-app.dev/)

## 📧 Contact

**Developer:** karkra911  
**Repository:** [github.com/karkra911/pokedex-website](https://github.com/karkra911/pokedex-website)

---

⭐ Star this repository if you found it helpful!
