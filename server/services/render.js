exports.homeRoutes = (req,res) => {
  res.render('index')
}


exports.add_user = (req,res) => {
  res.render('users/add_user')
}

exports.update_user = (req, res) => {
  res.render('update_user')
}

exports.users =  (req,res) => {
  res.render('users/index')
}
