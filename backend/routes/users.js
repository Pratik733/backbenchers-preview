const express = require("express");
const router = express.Router()
const User = require("../models/User")

router.get('/', async(req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', getUser, async(req, res) => {
    res.json(res.user)
})

router.post('/', async(req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });
    try {
        const newUser = await user.save();
        res.status(201).json({ newUser })
    } catch (err) {
        res.send(400).json({ message: err.message })
    }
})

router.patch("/:id", getUser, async(req, res) => {
    if (req.body.firstname != null) {
        res.user.firstname = req.body.firstname;
    }
    if (req.body.lastname != null) {
        res.user.lastname = req.body.lastname;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
//Put One
router.put("/:id", getUser, async(req, res) => {
    try {
        const updatedUser = await res.user.set(req.body);
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete("/:id", getUser, async(req, res) => {
    try {
        await res.user.deleteOne();
        res.json({ message: "User has been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user === null) {
            return res.status(404).json({ message: "Cannot Find User" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user;
    next();
}

module.exports = router;