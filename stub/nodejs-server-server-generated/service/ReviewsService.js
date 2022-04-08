'use strict';


/**
 * Get shop review
 * Get specified shop's reviews
 *
 * shopId String 
 * returns List
 **/
exports.shopsShopIdReviewsGET = function(shopId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "score" : 0,
  "comment" : "comment"
}, {
  "score" : 0,
  "comment" : "comment"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create new review
 * Create specified shop's new review
 *
 * body Review Contents of review
 * shopId String Shop identifier
 * no response value expected for this operation
 **/
exports.shopsShopIdReviewsPOST = function(body,shopId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

