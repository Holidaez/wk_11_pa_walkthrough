const express = require('express');
const router = express.Router();

module.exports = router;

const {Team, Player, Sport} = require('../db/models')



router.post('/:id/players', async(req,res) => {
    const id = req.params.id
    const {firstName, lastName, number, isRetired} = req.body

    // const team = await Team.findByPk(id)

    const newPlayer = await Player.create({
        firstName,
        lastName,
        number,
        isRetired,
        currentTeamId: +id
    })

    return res.json(newPlayer)
})


router.get('/:id', async(req,res) => {
    const id = req.params.id
    const team = await Team.findByPk(id, {
        include:[
            {
                model:Sport
            },
            {
                model: Player, as:'TeamRoster'
            }
        ]
    })
    return res.json(team)
})
