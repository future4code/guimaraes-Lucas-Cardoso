import { app } from "./app";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserPurchases } from "./endpoints/getUserPurchases";
import { postProduct } from "./endpoints/postProduct";
import { postPurchase } from "./endpoints/postPurchase";
import { postUser } from "./endpoints/postUser";

app.get('/users', getAllUsers)
app.get('/products', getAllProducts)
app.get('/users/:user_id/purchases', getUserPurchases)

app.post('/users', postUser)
app.post('/products', postProduct)
app.post('/purchases', postPurchase)