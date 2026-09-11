# Shopest — Full-Stack E-commerce Platform

A full-stack e-commerce web application built with the MERN stack, featuring a customer-facing storefront, a separate admin dashboard for inventory management, JWT-based authentication, and Cloudinary-powered image uploads.

**Live Demo:** [Add your deployment link here]
**GitHub Repo:** [Add your repo link here]

---

## Overview

The project is split into three independent apps that work together:

| App | Description | Stack |
|---|---|---|
| `frontend/` | Customer-facing storefront (browse, cart, checkout) | React 19 + Vite + Tailwind CSS |
| `admin/` | Admin dashboard for managing products & orders | React 19 + Vite + Tailwind CSS |
| `Backend/` | REST API, authentication, database, image storage | Node.js + Express + MongoDB |

---

## Features

**Storefront (frontend)**
- Browse products by category and sub-category
- Product search and filtering
- Product detail pages with size selection
- Shopping cart (add, update quantity, remove)
- Cart total & delivery fee calculation
- User registration and login (JWT-based)
- Order placement flow
- Responsive UI built with Tailwind CSS

**Admin Panel (admin)**
- Secure admin login
- Add new products with up to 4 images (uploaded to Cloudinary)
- View and manage product listings
- Remove products
- Order management view

**Backend (API)**
- RESTful API built with Express
- JWT authentication for both users and admin
- Password hashing with bcrypt
- Image uploads handled via Multer + Cloudinary
- MongoDB (Mongoose) for data persistence

---

## Tech Stack

**Frontend / Admin:**
- React 19
- Vite
- Tailwind CSS 4
- React Router DOM
- Axios
- React Toastify (notifications)

**Backend:**
- Node.js + Express
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- Multer for file handling
- Cloudinary for image storage
- CORS, dotenv

---

## Project Structure

```
eCommerce-website/
├── Backend/
│   ├── config/
│   │   ├── mongoDB.js          # MongoDB connection
│   │   └── cloudinary.js       # Cloudinary connection
│   ├── controllers/
│   │   ├── userController.js   # Register, login, admin login
│   │   └── productController.js# Add, list, remove, get single product
│   ├── middleware/
│   │   ├── adminAuth.js        # JWT-based admin route protection
│   │   └── multer.js           # Image upload handling
│   ├── models/
│   │   ├── userModel.js
│   │   └── productModel.js
│   ├── routes/
│   │   ├── userRouter.js
│   │   └── productRoute.js
│   └── server.js               # App entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/         # Navbar, Hero, ProductItem, Footer, etc.
│   │   ├── pages/              # Home, Collection, Product, Cart, PlaceOrder, Orders, Login, About, Contact
│   │   ├── context/
│   │   │   └── ShopContext.jsx # Global cart & app state
│   │   └── App.jsx
│
├── admin/
│   ├── src/
│   │   ├── components/         # Navbar, Sidebar, Login
│   │   ├── pages/               # Add, List, Orders
│   │   └── App.jsx
│
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- A Cloudinary account (for image uploads)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/shopest.git
cd shopest
```

### 2. Backend setup
```bash
cd Backend
npm install
```

Create a `.env` file in `Backend/`:
```
MONGODB_URL=your_mongodb_connection_string
CLOUNDINARY_API_KEY=your_cloudinary_api_key
CLOUNDINARY_SECRET_KEY=your_cloudinary_secret_key
CLOUNDINARY_NAME=your_cloudinary_cloud_name
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
PORT=4000
```

Run the backend:
```bash
npm run server
```

### 3. Frontend setup
```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:
```
VITE_BACKEND_URL=http://localhost:4000
```

Run the frontend:
```bash
npm run dev
```

### 4. Admin panel setup
```bash
cd admin
npm install
```

Create a `.env` file in `admin/`:
```
VITE_BACKEND_URL=http://localhost:4000
```

Run the admin panel:
```bash
npm run dev
```

---

## API Endpoints

**User Routes** — `/api/user`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/login` | Login and receive a JWT token |
| POST | `/admin` | Admin login |

**Product Routes** — `/api/product`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/list` | Get all products |
| POST | `/single` | Get a single product by ID |
| POST | `/add` | Add a new product with images *(admin only)* |
| POST | `/remove` | Remove a product *(admin only)* |

---

## Roadmap / Planned Improvements

- [ ] Backend order & cart persistence (currently cart state is client-side only)
- [ ] Payment gateway integration (Stripe / Razorpay)
- [ ] Order status tracking for customers and admin
- [ ] Chatbot integration for customer support and FAQs
- [ ] Product reviews and ratings
- [ ] Wishlist functionality

---
## 💳 Payment Testing (Stripe)

This project uses **Stripe** in test mode for payment processing. No real transactions occur.

To test the checkout flow, use Stripe's official test card:

| Field | Value |
|---|---|
| Card Number | 4242 4242 4242 4242 |
| Expiry Date | Any future date (e.g. 12/34) |
| CVC | Any 3 digits |
| ZIP/Postal Code | Any value |

> ⚠️ This is a Stripe-provided dummy card for test mode only — no real payment is processed. Do not attempt to use a real card.

 
## Author

**Neeraja Avula**
📧 neerajaavula7@gmail.com
🔗 [GitHub](https://github.com/Neeraja242)
