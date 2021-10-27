const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to database
connectDB();

//init middleware
app.use(express.json({ extended: false })); //to accept body data in routes

//testing route
app.get('/', (req, res) => {
    const data = {
        msg: 'welcome to quiz app manager API'
    };
    res.json(data);
})

//Define Routes
app.use('/api/users', require('./routes/users')); //register
app.use('/api/auth', require('./routes/auth'));   //login  
app.use('/api/quizzes', require('./routes/quizzes'));  //dashboard
app.use('/api/questions', require('./routes/questions'));  //role-base page
//app.use('/api/admin', require('./routes/admin'));  //role-Admin page - to add new quiz



//process.env.PORT can be added later if the app is deployed
const PORT = 5000;



//Role vid
//middleware
/* 
function setUser(req, res, next) {
    const userId = req.body.userId
    if(userId) {
        req.user = users.find(user => user.id === userId)
    }
    next()
}
*/

app.listen(PORT, () => console.log(`Server started on ${PORT}`));





