
import express from "express";
const PORT = process.env.PORT || 3000;
import models from "./models";
const app = (express);
const connectDB = async () => {
    console.log('Checking database connection');
    try {
        await models .sequelize.authenticate();
        console.log('Database connection established');
    }
    catch (e) {
        console.log('Database connection failed');
        process.exit(1);
    }
};
(async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`App is running on http://localhost:${PORT}`);
    });
});
