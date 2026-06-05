# 🐾Pawtique
Pawtique is a modern React web application where users can browse cat breeds, adopt cats, and shop cat-related products. The goal of the project is to simulate a real e-commerce experience with a clean UI and interactive features, using react.

# Website
- Site built using vercel.com
- https://pawtique.vercel.app/

# Features
## Cat Adoption
- Browse a list of cat breeds
- View detailed information about each cat
- Add/remove cats from cart (adoption cart system)
- Search and filter cats by name
- Pagination for large datasets
- Fallback image support for missing cat images

## Cart System
- Add cats to adoption cart
- Remove individual cats
- Clear cart after checkout
- Live cart summary (total, shipping, breeds selected)
- Checkout modal with form validation

## Search & Filtering
- Live search filtering of cat breeds
- Instant UI updates while typing

## Image Handling
- Reusable CatImage component
- Automatic fallback image (catsilhouette.png) when images fail to load

## Responsive Design
- Fully responsive layout
- Mobile, tablet, and desktop UI

# Tech Stack
- React (Vite / Create React App)
- React Router
- React Hooks (useState, useEffect, custom hooks)
- Context API (Cart management)
- CSS (custom styling, responsive design)
- React Bootstrap Icons
- The Cat API (https://thecatapi.com)

# API Used
This project uses:
- The Cat API
  - URL: https://api.thecatapi.com/v1/breeds
  - Provides cat breed data such as:
    - Name
    - Origin
    - Temperament
    - Images

# Project Structure
- src/
  - components/
    - CatApi.jsx
    - CatImage.jsx
    - Footer.jsx
    - Navbar.jsx
    - Pagination.jsx
    - SearchBar.jsx
  - context/
    - CartContext.jsx
  - hooks/
    - UsePagination.jsx
  - pages/
    - AboutPage.jsx
    - ArticlePage.jsx
    - CartPage.jsx
    - CatDetailsPage.jsx
    - CatsPage.jsx
    - ContactPage.jsx
    - HomePage.jsx
    - OwnersPage.jsx
    - ShopPage.jsx
  - styles/
    - AboutPage.css
    - ArticlePage.css
    - CartPage.css
    - CatDetailsPage.css
    - CatsPage.css
    - ContactPage.css
    - HomePage.css
    - OwnersPage.css
    - ShopPage.css
    - NavBar.css
    - Footer.css
    - Pagination.css
    - CatImage.css
    - CatApi.css
- App.css
- App.jsx
- index.css
- main.jsx

# Key Logic
## Cart Context
- Prevents duplicate cats in cart
- Handles add / remove / clear functionality globally

## Pagination Hook
- Splits large datasets into pages
- Controls next/previous navigation
- Keeps UI performance smooth

## Search Feature
- Filters cats in real time

# Future Improvements
- Authentication (login/signup)
- Save favorites list
- Product API for dynamic shop page
- Dark mode

# Installation
- git clone https://github.com/yourusername/pawtique.git
- cd pawtique
- npm install
- npm run dev

# 🧡 About the Project
This project was built as a learning project to practice:
- React architecture
- State management
- API integration
- UI/UX design
- Component reusability

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
