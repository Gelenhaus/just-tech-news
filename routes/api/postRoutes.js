const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote } = require('../../models');

router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({

        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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



module.exports = router;