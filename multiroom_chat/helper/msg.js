const console_colors = require('./console_colors.js');

module.exports = {
    green: function (msg) {
        console.log(console_colors.FgGreen + msg + console_colors.Reset);
    }
};