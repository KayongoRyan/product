# Norf Web Product

A React-based website implementation inspired by the Figma design featuring a dark theme with navigation, hero section, and Squarespace templates showcase.

## Features

- **Dark Theme**: Modern dark design with high contrast
- **Navigation Bar**: Menu and Connect buttons with hover effects
- **Hero Section**: Large "NO" text overlay with background image
- **Animated Products Separator**: Scrolling "PRODUCTS" text animation
- **Template Showcase**: Three distinct template cards:
  - Website Templates (Orange theme)
  - Investment Returns (Dark theme)
  - Urban Streetwear Hub (Brown theme)
- **Responsive Design**: Mobile-friendly layout

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

## Project Structure

```
norfproduct/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

## Technologies Used

- React 18.2.0
- CSS3 with animations
- Google Fonts (Inter)
- Unsplash for placeholder images

## Customization

- Modify colors and styles in `src/index.css`
- Update content in `src/App.js`
- Add new templates by duplicating template-card components
- Adjust responsive breakpoints in the CSS media queries
