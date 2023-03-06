function jsonBodyCheck(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: "Empty body", status: "failure" });
  } else {
    next();
  }
}

module.exports = {
  jsonBodyCheck,
};
