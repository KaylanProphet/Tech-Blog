const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

//GET all comments, if it doesnt work log the error and send it back to user
router.get('/', (req, res) => {
  Comment.findAll({
    attributes: [
      'id',
      'commentary',
      'user_id',
      'post_id',
      'date_created'
    ],
    order: [['date_created', 'DESC']]
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//POST
router.post('/', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    Comment.create({
      commentary: req.body.commentary,
      post_id: req.body.post_id,
      user_id: req.session.user_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});


// DELETE
router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this ID.' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
});

module.exports = router;
