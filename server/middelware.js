const jwt=require('jsonwebtoken');

const auth=async(req,res,next)=>
{
    try {
        const token=req.header('Authorization').replace('Bearer ','');
        const decoded=jwt.verify(token,'test');

        // find user in the db by email

        if(!user)
        {
            console.log('no user found');
            throw new Error();
            
        }
            
        req.token=token;
        req.user=user;
        next();
        
    } catch (error) {
        res.status(401).send({error:"Please authenticate properly"});
    }

}

module.exports=auth;