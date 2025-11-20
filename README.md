# Feedback Webpage Project

## Tech Stack

This project builds a mobile-friendly feedback webpage for collecting presentation feedback, with data stored in a Supabase database.

### Frontend
- **React** (with JSX) for component-based UI development
- **CSS3** with Bootstrap for responsive, mobile-first design
- **JavaScript** (ES6+) for logic and API interactions

### Build Tool
- **Vite** for fast development server and optimized production builds
- **npm** for package management and script running

### Backend/Database
- **Supabase** for PostgreSQL database storage and RESTful API endpoints

### Hosting
- **GitHub Pages** for static site deployment

## Project Structure
- `src/` - React source code
- `public/` - Static assets
- `dist/` - Built production files (generated)

## Getting Started
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Run `npm run build` to build for production

## Database Setup
1. Go to your Supabase dashboard
2. Run the SQL in `create_table.sql` to create the feedback table

## Deployment to GitHub Pages
1. Push the code to a GitHub repository
2. Run `npm run deploy` to deploy to GitHub Pages
3. Enable GitHub Pages in repository settings, set source to gh-pages branch