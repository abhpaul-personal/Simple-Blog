import express from "express";
import bodyParser from "body-parser";

const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

let posts = [];

// Home Page
app.get('/', (req, res) => {
    res.render('layout', { 
        content: `index`, 
        posts 
    });
});

// Create New Post Page
app.get('/post/new', (req, res) => {
    res.render('layout', { 
        content: `new-post`, 
        posts 
    });
});

// Handle New Post Submission
app.post('/post/new', (req, res) => {
    const { title, content } = req.body;
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    posts.push({ id, title, content });
    res.redirect('/');
});

// View Post Page
app.get('/post/:id', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render('layout', { 
        content: "view-post",
        post, 
        posts 
    });
});

// Edit Post Page
app.get('/post/edit/:id', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render('layout', { 
        content: "edit-post",
        post, 
        posts 
    });
});

// Handle Edit Post Submission
app.post('/post/edit/:id', (req, res) => {
    const { title, content } = req.body;
    const post = posts.find(p => p.id == req.params.id);
    post.title = title;
    post.content = content;
    res.redirect('/');
});

// Handle Delete Post
app.post('/post/delete/:id', (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect('/');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

