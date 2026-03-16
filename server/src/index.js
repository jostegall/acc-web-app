import app from './app.js';
import redisClient from './lib/redisClient.js';

const PORT = process.env.PORT || 5001;

async function startServer() {
    try{
        await redisClient.connect();
        console.log('Connected to Redis');

        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();