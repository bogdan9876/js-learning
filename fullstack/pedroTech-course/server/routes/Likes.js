const express = require("express")
const router = express.Router()
const { Likes } = require("../models")
const { validateToken } = require("../middlewares/AuthMiddleware")

router.post("/", validateToken, async (req, res) => {
    const { PostId } = req.body;
    const UserId = req.body.id;

    const found = await Likes.findOne({
        where: { PostId: PostId, UserId: UserId}
    })
    if (!found) {
    await Likes.create({PostId: PostId, UserId: UserId})
    } else {
        
    }
    res.json("Success")
})

module.exports = router