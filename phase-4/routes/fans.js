const express = require('express');
const router = express.Router();

module.exports = router;

const {Fan, Player} = require('../db/models')


router.get('/:fanId/drafts', async (req,res) => {
    const fanId = req.params.fanId
    const fan = await Fan.findByPk(fanId, {
        include:[
            {
                model:Player
            }
        ]
    })
    res.json(fan.Players)
})

router.delete('/:fanId', async(req,res) => {
    const fanId = req.params.fanId
    const fan = await Fan.findByPk(fanId)
    await fan.destroy()
    return res.json({message:"Successfully deleted"})
})
