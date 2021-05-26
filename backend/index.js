const express = require('express')
// const querys = require('./querys')
const cors = require('cors')
const app = express()
const { users, posts, comments } = require('./models/')
const fs = require('fs')
const AIMLInterpreter = require('AIMLInterpreter');
var aimlInterpreter = new AIMLInterpreter({ name: 'WireInterpreter', age: '42' });
aimlInterpreter.loadAIMLFilesIntoArray(['./dialog/text.aiml.xml']);




app.use(cors())
app.use(express.json())

app.get('/', (req, res, nex) => {
    res.send("api funcionando")
})

app.post('/users/create', async (req, res, nex) => {
    try {
        const name = req.body.name;
        var result = '';
        if (name) result = await users.create({ name: name, level: 0 }) //querys.users.insert(name, null, res)
        else throw "Falta dados " + name
        res.status(200).json({ result })
    } catch (ex) {
        res.status(400).json({ message: ex })
    }

})

app.get('/users/all', async (req, res, nex) => {
    try {
        // querys.users.getAll(res)
        // console.log(await users.findAll())
        res.status(200).json(await users.findAll())
    } catch (ex) {
        res.status(400).json({ message: ex })
    }
})

app.post("/users/delete", (req, res) => {
    try {
        if (req.body.id) users.destroy({ where: { id: req.body.id } })//querys.users.delete(req.body.id)
        res.status(200).json({ message: "Sucesso" })
    } catch (ex) {
        res.status(400).json({ message: ex })
    }
})

app.post('/users/find', async (req, res) => {

    try {
        if (req.body.id) res.status(200).json(await users.findByPk(req.body.id)) //querys.users.get(res,req.body.id)
        else throw "Falta dados " + req.body.id
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

app.post('/posts/like', async (req, res) => {
    try {
        if (req.body.id) {
            let post = await posts.findByPk(req.body.id)//querys.users.get(res,req.body.id)
            console.log(await post)
            post.likes += 1;
            await post.save()
            res.status(200).json(post)
        }
        else throw "Falta dados " + req.body.id
    } catch (error) {
        console.log("erro " + error)
        res.status(400).json({ message: error })
    }
})

app.get('/posts/all', async (req, res) => {

    try {
        let Resultposts = await posts.findAll();
        res.status(200).json(Resultposts) //querys.users.get(res,req.body.id)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}
)

app.post('/posts/create', async (req, res, nex) => {
    try {
        const { title } = req.body;
        if (title) await posts.create({ title: title, image: null, likes: null }) //querys.users.insert(name, null, res)
        else throw "Falta dados " + title
        res.status(200).json({ message: 'Sucesso' })
    } catch (ex) {
        res.status(400).json({ message: ex })
    }

})


app.post('/comments/create', async (req, res, nex) => {
    try {
        const { users_id, content, posts_idposts } = req.body
        if (users_id != undefined && content != undefined && posts_idposts != undefined) await comments.create({ users_id: users_id, content: content, posts_idposts: posts_idposts })
        else throw "Falta dados " + users_id + content + posts_idposts
        res.status(200).json({ message: 'Sucesso' })
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

app.get('/comments/all', async (req, res, nex) => {
    try {
        res.status(200).json(await comments.findAll())
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

app.post('/comments/find', async (req, res) => {
    const { id } = req.body
    try {
        if (id)
            res.status(200).json(await comments.findAll({ where: { posts_idposts: id } }))
        else throw "Falta dados " + id
    } catch (error) {
        res.status(400).json({ message: error })
    }
})


app.post('/comments/delete', async (req, res) => {
    const { id } = req.body
    try {
        if (id) {
            console.log("Delete " + id)
            res.status(200).json(await comments.destroy({ where: { idcomments: req.body.id } }))
        }
        else throw "Falta dados " + id
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

app.post('/bot/response', (req, res) => {
    const { input, name } = req.body;
    if (input) {
        console.log("Entrada: " + input);
        aimlInterpreter.findAnswerInLoadedAIMLFiles(input, (answer, wildCardArray, input) => {
            var myvar = ""
            try {
                myvar = answer.match(/(\$\w*\$)/g)
            }
            catch (error) {

            }

            if (myvar == '$name$') {
                answer = answer.replace(myvar, name);
            }
            console.log("User: " + input)
            console.log("Resposta: " + answer)
            if (answer == undefined) {
                res.status(200).json({ response: 'Não sei. ' })
            } else
                res.status(200).json({ response: answer })
        });
    }
})


app.listen(4000, () => console.log("Rodando na porta 4000"))