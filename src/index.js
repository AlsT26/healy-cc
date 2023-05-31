const express = require("express");
const usersRoutes = require("./routes/users.js");
const logMiddleware = require("./middleware/logs.js");

const app = express();

app.use(logMiddleware);
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(4000, () => {
  console.log("server sedang di run di port 4000");
});
