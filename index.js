const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('nodemon work perfectly')

});

const users = [
    {id:0 , name: "shabana" , email: "shabana@email.com", phone: "018888888"},
    {id:1 , name: "Alamgir" , email: "Alamgir@email.com", phone: "018888888"},
    {id:2 , name: "moushomi" , email: "moushomi@email.com", phone: "018888888"},
    {id:3 , name: "sakib khan" , email: "sakib khan@email.com", phone: "018888888"},
    {id:4 , name: "sabnoor" , email: "sabnoor@email.com", phone: "018888888"}
]

app.get('/user', (req, res) =>{
    res.send({id:1, name: 'shabana', email: 'shabana@gmail.com'})
})
app.get('/users', (req, res) =>{

    //use search query parameter

    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
    
})

//app.MATHOD
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    // res.send()
    res.json(newUser)
});


//dynamic api parameter in and details
app.get('/users/:id', (req,res) =>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () =>{
    console.log('Listenig to port ', port);
})
