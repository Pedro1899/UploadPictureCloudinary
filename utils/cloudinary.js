require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({

    cloud_name:  'dk109dtom',
    api_key: 166591163364621,
    api_secret: 'wytqdkRdnZos5t-Tpvuq-dOU8VA',
})
module.exports ={cloudinary};