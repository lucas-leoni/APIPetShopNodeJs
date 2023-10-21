const jwt = require('jsonwebtoken');
const config = require('../config');

function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token not provided' });
    }
    req.session = decoded;

    if (req.session.permission === 0) {
      if (
        (req.method === 'POST' && req.path === '/api/employee') ||
        req.path === '/api/service'
      ) {
        return next();
      } else {
        return res.status(403).json({ message: 'Permission denied' });
      }
    } else if (req.session.permission === 1) {
      if (req.method === 'POST' && req.path === '/api/service') {
        return next();
      } else {
        return res.status(403).json({ message: 'Permission denied' });
      }
    } else if (req.session.permission === 2) {
      if (
        (req.method === 'POST' && req.path === '/api/customer') ||
        req.path === '/api/service'
      )
        return next();
    } else {
      return res.status(403).json({ message: 'Permission denied' });
    }
  });
}

module.exports = authMiddleware;
