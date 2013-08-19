
/*
 * GET users listing.
 */

exports.render = function(req, res){
  res.render('contact', { title: 'Entre em contato!', activeLink:'contact' });
};