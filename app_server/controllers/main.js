/* GET homepage */
conxt index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways' });
};
module.exports = {
    index
};