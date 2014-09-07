var express = require('express');
var router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

/**
 * Home page
 */
router.get('/', function (req, res, next) {

    res.render('index', {
      title: 'Wayward Explorers',
      page: 'home'
    });

});

/**
 * Shop page
 */
router.get('/shop-clothing', function (req, res, next) {

    res.render('pages/shop', {
      title: 'Ship Vintage Clothing in Red Bank, NJ',
      page: 'shop'
    });

});

/**
 * Studio page
 */
router.get('/hot-yoga-studio', function (req, res, next) {

    res.render('pages/studio', {
      title: 'Hot Yoga in Red Bank, NJ.  Bikram Yoga, Vinyasa Yoga',
      page: 'studio'
    });

});

/**
 * Studio page
 */
router.get('/view-schedule', function (req, res, next) {

    res.render('pages/studio', {
      title: 'Wayward Explorers',
      page: 'view-schedule'
    });

});

/**
 * Sign Up page
 */
router.get('/sign-up-for-classes', function (req, res, next) {

    res.render('pages/studio', {
      title: 'Wayward Explorers',
      page: 'sign-up'
    });

});