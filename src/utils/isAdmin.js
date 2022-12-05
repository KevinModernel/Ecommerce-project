const isAdmin = ( req, res, next ) => {
    if (req.user) { // Si esta logeado, se fija si es admin.
    	const isAdmin = req.user.isAdmin;
    	if (isAdmin == 'true') { // Si es admin, te permite ir a rutas de admin.
    		return next();
    	} else { // Si no es admin, 404.
    		res.redirect('/notfound');
    	};
    } else{
    	res.redirect('/notfound');
    };
    
}

module.exports = { isAdmin }