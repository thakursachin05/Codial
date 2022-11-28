module.exports.profile = function(req,res){
    return res.end('<h1>User Profile</h1>');
}

// render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: 'Codial | Sign Up'
    })
}

// render the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: 'Codial | Sign In'
    })
}

// get the sign up data
module.exports.create = function(req,res){
    // Todo later
}

// Sign in and create the session
module.exports.createSession = function(req,res){
    // Todo later
}