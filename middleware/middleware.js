const jwt = require('jsonwebtoken');
const config = require('config');

const auth = (req, res, next) => {
    //Get token from header. 'x-auth-token' is the key for the token
    const token = req.header('x-auth-token');

    //Check if not token
    if(!token) {
        return res.status(401).json({ msg: 'No token authorisation denied' });
    }

    try { // pull out payload from token using secret
        const decoded = jwt.verify(token, config.get('jwtSecret')); //payload is put into decoded

        req.user = decoded.user;  //extracting the user
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}

const authRole = (roles = []) => {
    // roles param can be a single role string (e.g. Role.User or 'User') 
    // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return  (req, res, next) => {
        //const userRole = req.body.role

        // const userRole = req.user.role
        // if (!role.includes(userRole)) {  

         //if (req.user.role !== role) {
        
         ////user's role is not authorized
        if (roles.length && !roles.includes(req.user.role)) {    
            console.log(req.user)
            return res.status(401).json({ msg: 'You are not authorised to have access to this page' })
         }

         next()
     } 
 }

 module.exports = {
     auth,
     authRole
 }

