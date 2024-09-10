# Find Your Recipe 🍲

Find Your Recipe is a web application that helps users discover meal recipes based on the ingredients they have on hand. Simply input the ingredients, and the app will provide a list of recipes that match, along with detailed instructions and links to recipe videos.

## Table of Contents
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [License](#license)

## Live Demo
You can check out the live version of the app here: [Find Your Recipe](https://recipefinde.netlify.app/)

## Features
- **Ingredient Search**: Enter ingredients you have, and get a list of meals that you can prepare.
- **Recipe Details**: Get detailed instructions for each recipe, including ingredients, preparation methods, and videos.
- **Responsive Design**: The app works smoothly across different screen sizes and devices, including mobile and desktop.
- **Interactive UI**: Smooth animations and intuitive navigation for a pleasant user experience.
  
## Technologies Used
- **Frontend**:
  - HTML5, CSS3
  - JavaScript (ES6+)
  - [Boxicons](https://boxicons.com/) for icons
  - [Font Awesome](https://fontawesome.com/) for icons
  - [Google Fonts](https://fonts.google.com/) for fonts

- **Backend API**:
  - [TheMealDB API](https://www.themealdb.com/) for fetching meal data based on ingredients

- **Deployment**:
  - [Netlify](https://www.netlify.com/) for hosting

## Installation
To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/recipe-finder.git
    cd recipe-finder
    ```

2. **Open the `index.html` file** in your web browser:
    You can use any modern web browser to open the `index.html` file, or you can use a local server like Live Server for a better development experience.

## Usage
1. Open the app in your browser or visit the [live demo](https://find-your-recipee.netlify.app/).
2. Enter one or more ingredients in the search field (e.g., "chicken", "cheese").
3. Click the **Search** button or press Enter.
4. Browse the list of meal results and click on any meal to view its detailed recipe and instructions.

### Mobile Compatibility
The app is designed to work well on both desktop and mobile devices. It has been tested on various screen sizes, including iPhone 11.

## Project Structure
```bash
recipe-finder/
│
├── images/             # Folder for storing images
├── js/                 # JavaScript files
│   ├── script.js       # Main JS file
├── styles/             # CSS stylesheets
│   ├── style.css       # Main CSS file
├── index.html          # Main HTML file
├── README.md           # Readme file (you are here)
