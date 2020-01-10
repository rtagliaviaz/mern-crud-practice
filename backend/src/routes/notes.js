const {Router}= require('express');
const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notesController')

//initialize
const router = Router();

router.route('/')
  .get(getNotes)
  .post(createNote)
// router.get('/', (req, res) => {
//   res.json({msg: 'GET - notes'})
// });

// router.post('/', (req, res) => {
//   res.json({msg: 'POST - notes'})
// });

router.route('/:id')
  .get(getNote)
  .put(updateNote)
  .delete(deleteNote)


module.exports = router;