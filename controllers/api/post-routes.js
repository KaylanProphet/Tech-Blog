const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');


//get all of the post
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'contents',
      'date_created'
    ],
    order: [['date_created', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'commentary', 'post_id', 'user_id', 'date_created'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get or read a single post
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'contents',
      'date_created'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'commentary', 'post_id', 'user_id', 'date_created'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//post/create
router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    contents: req.body.contents,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//put/update
router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      contents: req.body.contents
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete
router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
