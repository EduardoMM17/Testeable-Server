const uuid = require("uuid");
const userService = require("./services");

function createUser(req, res, next) {
  const users = userService.createUser(req.body);
  return res.send(users);
}

function getUser(req, res, next) {
  try {
    const user = userService.getUser(req.params);
    return res.send(user);
  } catch (error) {
    return res.send({ error: error.message });
  }
}

function getUsers(req, res, next) {
  const users = userService.getUsers();
  return res.send(users);
}

module.exports = {
  createUser,
  getUser,
  getUsers,
};
