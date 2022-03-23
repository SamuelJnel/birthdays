const Birthday = require("../models/birthday");

module.exports = { index, deletePerson, addPerson };

function index(req, res) {
  Birthday.find({}, function (err, birthday) {
    res.json(birthday);
  });
}

async function deletePerson(req, res) {
  console.log(req.params.id);
  await Birthday.findByIdAndDelete(req.params.id);
  res.json("deleted!");
}

async function addPerson(req, res) {
  const newPerson = new Birthday(req.body);
  await newPerson.save();
  res.json(newPerson);
}
