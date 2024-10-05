# Game Project

Welcome to the Game Project! This is a simple game built using HTML, CSS, Tailwind CSS, and Python with Pygame. The game consists of 5 levels where players can collect items and avoid obstacles. Follow the instructions below to get started.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- 5 different levels to play
- Collectible items and obstacles
- Beautiful user interface with Tailwind CSS
- Sound effects and background music
- Simple and intuitive controls

## Prerequisites

Before running the project, make sure you have the following installed:

- [Python 3.x](https://www.python.org/downloads/)
- [Pip](https://pip.pypa.io/en/stable/installation/)
- [Node.js](https://nodejs.org/) (for Tailwind CSS)
- [Git](https://git-scm.com/) (optional, for version control)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/game_project.git
   cd game_project
   ```

2. **Install the required Python packages:**

   Create a `requirements.txt` file in the project root directory and add the following:

   ```plaintext
   pygame
   Flask
   ```

   Then run:

   ```bash
   pip install -r requirements.txt
   ```

3. **Install Tailwind CSS:**

   Navigate to the `static` folder and run:

   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

   Then configure your Tailwind CSS setup in the `tailwind.config.js` file.


## Running the Project

1. **Start the Flask server:**

   Run the following command from the project root directory:

   ```bash
   python app.py
   ```

2. **Run the Tailwind:**

   Run the following command from the project root directory:

   ```bash
   npx tailwindcss -i ./static/css/input.css -o ./static/css/style.css --watch
   ```

3. **Open your browser:**

   Navigate to `http://127.0.0.1:5000` to access the game in your web browser.

## Project Structure

```plaintext
game_project/
│
├── app.py                   # Main Flask application
├── requirements.txt         # Python dependencies
├── tailwind.config.js       # Tailwind CSS configuration
├── README.md                # Project documentation
│
├── static/                  # Static files (CSS, images, sounds, etc.)
│   ├── css/
│   │   └── style.css
│   ├── images/
│   └── sounds/
│       └── background-music.mp3
│
└── templates/               # HTML templates for Flask
    ├── index.html
    ├── level1.html
    ├── level2.html
    ├── level3.html
    ├── level4.html
    └── level5.html
│
└── pygame_game/             # Pygame files
    ├── main.py
    ├── settings.py
    ├── assets.py
    ├── game_functions.py
    ├── level1.py
    ├── level2.py
    ├── level3.py
    ├── level4.py
    └── level5.py
```

Feel free to reach out if you have any questions or need further assistance!