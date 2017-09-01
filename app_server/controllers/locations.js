/* Get 'home' page */
const homelist = function(req,res){
  res.render('index', { title: 'Home' });
};

/* Get 'Location Info' page */
const locationInfo = function(req, res){
  res.render('index', { title: 'Location info'});
};

/* Get 'Add Review' page */
const addReview = function(req,res){
  res.render('index', { title: 'Add review'});
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
