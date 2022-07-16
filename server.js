import express from 'express';
const app = express();
//sử dụng .env 
require('dotenv').config();
const port = process.env.PORT || 3000;
//cấu hình view engine
import configViewEngine from './src/configs/ViewEngine';
configViewEngine(app);
//Cấu hình midleware hỗ trợ send dữ liệu trong form về Server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cấu hình router
import initWebRouter from './src/routes/web';
initWebRouter(app);

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})