import express from "express";
import bodyParser from "body-parser";

const articlesInfo = {
    'lorem-ipsum' : {
        upvotes: 0,
        comments: []
    },
    'dolor-sit': {
        upvotes: 0,
        comments: []
    }
};

const app = express();

app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes += 1;
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
});

app.post('/api/articles/:name/add-comment', (req, res) => {
    const { userName, text } = req.body;
    const articleName = req.params.name;

    articlesInfo[articleName].comments.push({ userName, text });
    res.status(200).send(articlesInfo[articleName]);
})

app.listen(8000, () => console.log('8000 works!'));