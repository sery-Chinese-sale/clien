const Winnings = require("../models/winnings").Winnings;
//הוספת זכיה
const addWinning = async (req, res) => {
    try {
        let u = new User(req.body);
        await u.save();
        return res.send(u);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
//שליפת כל המשתמשים שהזמינו מוצר מסוים לפי קוד מוצר

const getUsersByProductId = async (req, res) => {
    let prId = req.params.id;
    try {
        let users = await User.find({}).filter(user => { users.arr_orders.find(order => order.item_id == prId) != -1 });
        return res.send(users);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
//שליפת זוכה ע"פ קוד זכיה
const getWinnerByCodeProduct = async (req, res) => {
    let codeW = req.params.id;
    try {
        let u = await User.findById(codeW)
        return res.send(u);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
//שליפת זוכה ע"פ קוד מוצר
const getWinnerByCodeProduct = async (req, res) => {
    let codeProduct = req.params.id;
    try {
        let u = await User.find({ item_id: codeProduct })
        return res.send(u);
    }

    catch (e) {
        return res.status(400).send(e);
    }
}
module.exports = { addWinning, getUsersByProductId, getWinnerByCodeProduct, getWinnerByCodeProduct }
