const express = require('express'); // Correct import statement

const PORT = process.env.PORT || 3000;
const { sequelize } = require('./models');
const app = express();

const connectDB = async () => {
  console.log('Checking database connection');

  try {
    await sequelize.authenticate();
    console.log('Database connection established');
  } catch (e) {
    console.log('Database connection failed');
    process.exit(1);
  }
};

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
})();
