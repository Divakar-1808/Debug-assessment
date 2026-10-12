const express = require('express');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');
const initDb = require('./migrations/initDb');

const app = express();

app.use(cors());
app.use(express.json());

(async () => {
    try {
        await initDb();
        console.log('Database ready');
    } catch (error) {
        console.error('DB init failed:', error.message);
        process.exit(1);
    }
})();

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: `Cannot  ${req.method} ${req.originalUrl}`
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`[server] InsightBoard API running on http://0.0.0.0:${PORT}`);
});