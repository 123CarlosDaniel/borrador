const helpers = {};

helpers.isAuthenticated = (req,res,next) => {
    if(req.isAuthenticated()) return next();
    req.flash('error_msg','No autorizado, ingresa tu cuenta primero');
    res.redirect('/signin');
}
module.exports = helpers