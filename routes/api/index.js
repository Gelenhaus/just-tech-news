const router = require('express').Router();
const apiRoutes = require('./user-routes');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(200);
    res.send('Hello');
});

module.exports = router;