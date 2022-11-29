module.exports.home = function(req,res){
    // return res.end('<h1> Jai Shree Ram </h1>');
    console.log(req.cookies);
    res.cookie('user_id','jaishreeram');
    return res.render('home',{
        title : 'Home'
    });
} 

// module.exports.actionName = function(req,res){}