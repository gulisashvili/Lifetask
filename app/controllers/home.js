// render main page

exports.index = function (req, res) {
    res.sendfile('app/views/home/index.html');
};