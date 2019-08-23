
module.exports = function(req, res, next) {
    console.log('REQUEST = ', req.headers);
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        req.token = bearer[1];
        next();
    } else {
        res.status(403).json({message: "invalid token", data: bearerHeader});
    }
};

