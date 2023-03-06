const uuid = require("uuid");

const users = [];

function createUser(body) {
  users.push({ id: uuid.v4(), ...body });
  return users;
}

function getUser(params) {
  const { id } = params;
  const index = users.findIndex((elem) => id === elem.id);
  if (index > -1) return users[index];
  throw new Error(`User not found. Id: ${id}`);
}

function getUsers() {
  return users;
}

module.exports = {
  createUser,
  getUser,
  getUsers,
};
