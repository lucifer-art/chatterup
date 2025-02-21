import './env.js';
import { connectToDatabase } from './config/db.js';
import { server } from './index.js';

const PORT = process.env.PORT || 3500;
server.listen(PORT, (req, res) => {
    connectToDatabase();
    console.log(`Server running on port ${PORT}`);
})