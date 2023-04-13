const express = require("express");
const app = express();
const currentPort = 3000;
const userRoutes = require('./routes/users');
const eventRoutes = require("./routes/event");
const bookingRoutes = require("./routes/booking");

const connectDb = require('./config/database');

app.use(express.json());

app.use("/users", userRoutes);
app.use("/event", eventRoutes);
app.use("/bookings", bookingRoutes);


app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

connectDb().then(() =>
  app.listen(currentPort, () => {
    console.log(`Server is running at ${currentPort} Database is connected successfully`);
  })
);
