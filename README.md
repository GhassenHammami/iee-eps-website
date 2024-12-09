# IEE-EPS Website

This project is a website built with [Tailwind CSS](https://tailwindcss.com) for styling and deployed using [GitHub Pages](https://pages.github.com). It includes build scripts for preparing the production-ready website and automates deployment.
**This project is part of a university project.**

## Project Setup

### Prerequisites

Ensure you have the following installed:
- Node.js (v14+)
- npm (v6+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ghassenhammami/iee-eps-website.git
   cd iee-eps-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

### Development

- **Start watching styles**: Automatically rebuild styles on file changes.
  ```bash
  npm run build-style
  ```

### Build

- **Build the project**: Prepare a production-ready version of the website in the `build` directory.
  ```bash
  npm run build
  ```

### Deployment

- **Deploy to GitHub Pages**: Automatically deploy the `build` directory to GitHub Pages.
  ```bash
  npm run deploy
  ```

## Project Structure

- **`styles/`**: Contains the Tailwind CSS input file (`index.css`) and the generated output (`output.css`).
- **`js/`**: JavaScript files for the website.
- **`assets/`**: Static assets like images or fonts.
- **HTML files**: The main pages of the website.

## Deployment URL

The website is live at:  
[https://ghassenhammami.github.io/iee-eps-website](https://ghassenhammami.github.io/iee-eps-website)

## License

This project is licensed under the [ISC License](./LICENSE) .