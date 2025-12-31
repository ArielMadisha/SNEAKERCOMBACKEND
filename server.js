const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const orderRoute = require('./routes/orderRoute')
const reviewRoute = require('./routes/reviewRoute')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const cors = require('cors')

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/orders', orderRoute)
app.use('/api/reviews', reviewRoute)

// Error handling
app.use(notFound)
app.use(errorHandler)

const PORT = 3000
app.listen(PORT, () => console.log(`Server is live on http://localhost:${PORT}`))