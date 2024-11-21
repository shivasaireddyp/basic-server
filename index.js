const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
dotenv.config();
const app = express();
const connectDB = require("./config/db.connection.js");
const { notFound, errorHandler } = require("./middlewares/error.middleware.js");
const port = process.env.PORT || 5001;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
connectDB();

app.use(cookieParser());

const userRouter = require("./routes/user.route.js");
app.get("/", (req, res) => {
  res.send("hello");
});


app.use("/api/user", userRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`server running on ${port}`));
