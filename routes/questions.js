const express = require('express');
const router = express.Router();

//FOR - CRUD statements dependent on auth and role of user


//@route        GET api/questions/:quizId
//@desc         Get questions only for the quiz     
//@access       Private

//conditional rendering 
//@role basic all questions
//@role viewer and admin questions and answers
router.get('/', (req, res) => {
    res.send('Questions Only');
});



//@route        GET api/questions/question
//@desc         Get questions and answers for the quiz     
//@access       Private
//@role         viewer and admin
// router.get('/question', (req, res) => {
//     res.send('Display Questions and answers (show correct answers maybe?)');
// });



//@route        POST api/questions/question
//@desc         Add new question and answers      
//@access       Private
//@role         admin
router.post('/question', (req, res) => {
    res.send('Add questions and answers');
});

//@route        PUT api/questions/question/:id
//@desc         Edit/update question and answers      
//@access       Private
//@role         admin
router.put('/question/:id', (req, res) => {
    res.send('Edit Questions and answers');
});

//@route        DELETE api/questions/question/:id
//@desc         Delete question and answers      
//@access       Private
//@role         admin
router.delete('/question/:id', (req, res) => {
    res.send('Delete questions and answers');
});


module.exports = router;