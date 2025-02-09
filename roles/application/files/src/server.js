import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'
import prisma from './prismaClient.js'

const app = express()
const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))

// Health check endpoint
app.get('/health', async (req, res) => {
    try {
        // Test database connection
        await prisma.$queryRaw`SELECT 1`
        res.json({ 
            status: 'healthy',
            timestamp: new Date(),
            services: {
                database: 'up',
                api: 'up'
            }
        })
    } catch (error) {
        res.status(503).json({ 
            status: 'unhealthy',
            timestamp: new Date(),
            services: {
                database: 'down',
                api: 'up'
            },
            error: error.message
        })
    }
})

app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use('/auth', authRoutes)
app.use('/todos', authMiddleware, todoRoutes)

app.listen(PORT,  () => {
    console.log(`Server has started on http://localhost:${PORT}`)
})