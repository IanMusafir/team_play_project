const jwt = require('jsonwebtoken')
module.exports.auth = async (req, res, next) => {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
  
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY);
        req.user = decoded.id;
        next();
      } catch (e) {
        return res.status(403).json({
          message: e.toString(),
        });
      }
    } else {
      return res.status(403).json({
        message: "Нет доступа броооо",
      });
    }
  };
  