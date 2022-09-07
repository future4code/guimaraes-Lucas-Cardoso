import express from 'express'
import cors from 'cors'
import { User } from './endpoints/User'
import { UserDatabase } from './data/UserDatabase'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

app.get("/users/profile/:id", async (req, res) => {
   try {
      const { id } = req.params

      const userDatabase = new UserDatabase()
      const result = await new User(userDatabase).getUserById(id)
      
      res.status(200).send(result)
   }

   catch (error: any) {
      res.status(error.statusCode || 400).send(error.message)
   }
   
})


