
  const restrict = (req, res, next)=> {
    if (req.session.user) {
      next();
    } else {
      req.session.error = 'Access denied!';
      res.redirect('/');
    }
  }
  

module.exports = restrict