module.exports = function(req, res, next){

    const {Employee_UserName, Employee_Password} = req.body;

    if(req.path === "/register") {

        if(![Employee_UserName, Employee_Password].every(Boolean)){
            return res.status(401).json("Missing Credentials");
        }
        
    }
    else if(req.path === "/login") {
        if (![Employee_UserName, Employee_Password].every(Boolean)){
            return res.status(401).json("Missing Credentials"); 
        }
    }
    next ();
};