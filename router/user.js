const express = require('express')
const router = express.Router();

router.route('/user').get((req,res) => {
    res.send('/user')
})

module.exports = router;