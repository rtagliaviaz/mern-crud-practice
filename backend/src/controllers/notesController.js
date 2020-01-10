const notesCtrl = {};
const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json({notes});
};

notesCtrl.createNote = async (req, res) => {
  const { title, content, data, author } = req.body;
  const newNote = new Note ({
    title,
    content,
    data,
    author
  })
  await newNote.save();
  res.json({msg: 'Note Saved'})
};


notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  console.log(note);
  res.json(note)
};

notesCtrl.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findOneAndUpdate({_id: req.params.id}, {
    title,
    content,
    author
  });
  res.json({msg: 'note UPDATED'})
}

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json({msg: 'note DELETED'})
};


module.exports = notesCtrl;