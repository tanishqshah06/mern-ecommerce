const passport = require("passport")

exports.isAuth=(req, res, done)=>{
    return passport.authenticate('jwt')
}

exports.sanitizeUser= (user) =>{
    return {id: user.id, role: user.role}
}

exports.cookieExtractor = function(req){
    let token = null;
    if(req && req.cookies){
      token = req.cookies['jwt']
    }
    // This is temporary token for testing without cookie
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzAzNTM3N2JlZWRmOWQ4Yjk0OWRiMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk3NjU4MTY3fQ.0nDUt4Gj0L5hx8Sj4lBCsVQ61rPj0SylGG8_HsigS4I" //admin 

    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmZlZDVkMDExMGQwZDJkOTIxNzQ1NyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk3NjM5NzczfQ.R1vC3DTNt-Xd_n05db-kNv2yH9IdygPV_6JgG1-6Wls"
    
    return token;
  }