# Sneaker Ecommerce Backend

A RESTful API backend for a sneaker e-commerce platform built with Node.js, Express, and MongoDB.

## Features

- **User Management**: Authentication and authorization with JWT
- **Product Management**: CRUD operations for sneaker products
- **Order Processing**: Order creation and management
- **Review System**: Product reviews with admin response capability
- **File Upload**: Image upload support with Multer
- **Admin Controls**: Admin-specific routes and permissions

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **File Upload**: Multer
- **Environment Variables**: dotenv

## Project Structure

```
SNEAKERECOMBACKEND/
├── config/
│   ├── db.js              # MongoDB connection
│   └── multer.js          # File upload configuration
├── controllers/
│   ├── orderController.js
│   ├── productController.js
│   ├── reviewController.js
│   └── userController.js
├── middleware/
│   ├── admin.js           # Admin authorization
│   ├── auth.js            # JWT authentication
│   ├── errorMiddleware.js
│   └── uploadMiddleware.js
├── models/
│   ├── orderModel.js
│   ├── productModel.js
│   ├── Review.js
│   └── userModel.js
├── routes/
│   ├── orderRoute.js
│   ├── productRoute.js
│   ├── reviewRoute.js
│   └── userRoute.js
├── utils/
│   └── generateJwt.js
├── uploads/               # Uploaded files directory
├── .env                   # Environment variables
├── server.js              # Application entry point
└── package.json
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SNEAKERECOMBACKEND
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

4. Start the server:

**Development mode (with nodemon):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

## API Endpoints

### Users
- `POST /api/users` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile (Protected)
- `PUT /api/users/profile` - Update user profile (Protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `POST /api/orders` - Create new order (Protected)
- `GET /api/orders` - Get user orders (Protected)
- `GET /api/orders/:id` - Get order by ID (Protected)
- `PUT /api/orders/:id` - Update order (Admin)

### Reviews
- `POST /api/reviews` - Add product review (Protected)
- `GET /api/reviews/:productId` - Get product reviews
- `POST /api/reviews/:id/respond` - Admin response to review (Admin)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string |
| `PORT` | Server port (default: 3000) |

## Authentication

This API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

The API includes comprehensive error handling middleware that returns consistent error responses:

```json
{
  "message": "Error message",
  "stack": "Error stack trace (development only)"
}
```

## Development

- Uses nodemon for hot-reloading during development
- CORS enabled for cross-origin requests
- Express JSON parser for request body parsing

## License

ISC

## Author

Bonakude Consulting PTY LTD
