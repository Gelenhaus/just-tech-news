const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});


router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;