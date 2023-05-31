const userModel = require("../models/users.js");

const getAllUser = (req, res) => {
  const [data] = userModel.getAllUser();

  res.json({
    message: "GET users data",
    data: data,
  });
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new user",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log("id user :", id);
  res.json({
    message: "UPDATE user",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "DELETE user",
    data: {
      id: id,
      name: "Alvin",
      email: "alvin@gmail.com",
    },
  });
};

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
};
