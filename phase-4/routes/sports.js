const express = require('express');
const router = express.Router();

module.exports = router;

const {Sport} = require('../db/models')

router.get('/', async(req,res) => {
    const sports = await Sport.findAll({
        order:[['name', 'DESC']]
    })
    res.json(sports)
})
