const express = require('express');
const app = express();
app.use("/users", require("./api/user/index"));
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');

    require('./models').sequelize.sync({force: true})
        .then(() => {
            console.log('Databases sync');
        });
});

module.exports = app;
