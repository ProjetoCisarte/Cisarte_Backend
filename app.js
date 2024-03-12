/**  IMPORTAÇÕES  */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const bodyParser = require('body-parser');

/** CONST DO APP */

const app = express();

/** CONFIGURAÇÕES JSON RESPONSE */

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/** ROTAS */

//ROTA PARA O ARQUIVO DE DASHBOARD
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

//ROTA PARA O ARQUIVO DE lOGIN
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

/** MODELS */

const User = require('./models/User')
const UserType = require('./models/UserType')
const Contact = require('./models/Contact')
const Dentist = require('./models/Dentist')
const DigitalStudio = require('./models/DIgitalStudio')
const EnglishClasses = require('./models/EnglishClasses')
const Haircuts = require('./models/Haircuts')
const Juridico = require('./models/Juridico')
const Library = require('./models/Library')
const Manicure = require('./models/Manicure')
const Psychologist = require('./models/Psychologist')
const Serigraphy = require('./models/Serigraphy')
const SewingStudio = require('./models/SewingStudio')
const Speeches = require('./models/Speeches')

/** ROTAS PUBLICAS */

/** ROTAS PRIVADAS */

app.get('/user/:id', checkToken, async(req, res)=>{

    const id = req.params.id
    //verificar se o user existe
    const user = await User.findById(id, '-password')

    if(!user){
        return res.status(404).json({msg: "Usuario Não encontrado"})
    }
    res.status(200).json({user})

})

/** FUNÇÃO DE CHECAR TOKEN */

function checkToken(req, res, next){

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({msg: "Acesso Negado"});
    }

    try{
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
    }catch(error){
        res.status(400).json({msg: "Token Invalido!"})
    }

}

/** METODOS */

// REGISTRO DE USUARIOS - USER
app.post('/auth/register', async(req, res)=>{

    const name = req.body.name
    const email =req.body.email
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword

    //validações

    if(!name){
        return res.status(422).json({msg: "O nome é obrigatorio!"})
    }

    if(!email){
        return res.status(422).json({msg: "O Email é obrigatorio!"})
    }

    if(!password){
        return res.status(422).json({msg: "A Senha é obrigatoria!"})
    }

    if(password !== confirmpassword){
        return res.status(422).json({msg: "As Senhas não são iguais!"})
    }

    //verificar se o usuario ja existe

    const userExists = await User.findOne({email: email})

    if(userExists){
        return res.status(422).json({msg: "Por Favor utilize outro email!"})
    }

    //criar senha
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    //criar usuario
    const user = new User({
        name,
        email,
        password: passwordHash  
    })

    try{
        await user.save();
        //res.status(201).json({msg: "Usuario Criado com sucesso"})
        res.redirect(`/login.html?msg=UsuarioCadastrado`);
    }catch(error){
        console.log(error)
        res.status(500).json({msg: 'Erro no servidor, volte mais tarde!'})
    }
})

// LOGIN DE USUARIOS - USER
app.post("/auth/login", async (req, res)=>{

    const email = req.body.email;
    const password = req.body.password;
    
    //validação
    if(!email){
        return res.status(400).json({msg: "O Email é obrigatorio!"})
    }

    if(!password){
        return res.status(400).json({msg: "A Senha é obrigatoria!"})
    }
    const user = await User.findOne({email:email})

    if(!user){
        return res.status(400).json({msg: 'Usuario não encontrado'})
    }
    //Verificação de senhas
    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
        return res.status(400).json({msg: "Senha invalida!"})
    }

    try{
        const secret = process.env.secret
        const token = jwt.sign(
            {
                id: user._id,
            },
            secret,
        )
        //res.status(200).json({msg: "Autentificação realizada com sucesso", token});
        res.redirect(`/dashboard.html?token=${token}`);
    }catch(error){  
        console.log(error)
        res.status(500).json({msg: 'Erro no servidor, volte mais tarde!'})
    }
})

/** CREDENCIAIS */

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.bwjbd4b.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{
        app.listen(3000)
        console.log("Conectou com sucesso")
})
.catch((err) => console.log(err))