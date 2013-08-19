
/*
 * GET users listing.
 */

exports.render = function(req, res){
  res.render('customers', { title: 'Nossos clientes', activeLink:'customers' });
};