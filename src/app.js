const express = require("express");

const blogRoutes = require("./routes/blogRoutes");

const authRoutes = require("./routes/authRoutes");

const loggerMiddleware = require("./middleware/loggerMiddleware");

const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use("/api/auth", authRoutes);

app.use("/api/blogs", blogRoutes);

app.use(errorMiddleware);

module.exports = app;