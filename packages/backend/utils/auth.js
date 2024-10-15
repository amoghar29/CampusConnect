const jwt = require('jsonwebtoken');
const secretkey = 'bvfjvjdfvb@#$%21';
function setId(user) {
  return jwt.sign({ _id: user._id, username: user.username }, secretkey);
}

function getId(token) {
  if (!token) return null;
  return jwt.verify(token, secretkey);
}

module.exports = {
  setId,
  getId,
};
