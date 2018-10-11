const Memo = require('../model/memoModel.js');

module.exports = {
  getMemos: (req, res) => {
    Memo.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    })
  },
  addMemo: (req, res) => {
    const newMemo = req.body;

    Memo.create(newMemo)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(req.body)
      console.error(err);
      res.sendStatus(404);
    })
  },
  // editMemo: (req, res) => {
  //   Memo.findOneAndUpdate(req.body, { $set: { memoTile: , memoText: } }, { new: true })
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => {
  //     res.sendStatus(404);
  //   })
  // },
  deleteMemo: (req, res) => {
    Memo.findOneAndRemove({ _id: req.body.memoId })
    .then((data) => {
      console.log('here');
      res.json(data);
    })
    .catch((err) => {
      console.log('why so error?');
      res.status(404).send(err);
    })
  }
}
