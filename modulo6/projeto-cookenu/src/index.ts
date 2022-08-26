import app from "./app";
import { UserController } from "./controller/UserController";
import { recipeRouter } from "./routes/recipeRouter";
import { userRouter } from "./routes/userRouter";

const userController = new UserController()

app.use('/signup', userController.signup)
app.use('/login', userController.login)
app.use('/user', userRouter)
app.use('/recipe', recipeRouter)