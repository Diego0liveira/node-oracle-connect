import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import Open from './database/connect'

const app = express()

app.set('port', 3000)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors)

app.listen(app.get('port'), () => {
    console.log('--> Server on Port 3000')
})

let result =  Open('SELECT * FROM user_admin', []).then()
let Users = [];

result.then(user => {
   console.log(user?.rows)
})