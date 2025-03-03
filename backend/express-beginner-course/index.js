import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const DB_URL = "mongodb+srv://bogda:"root"@cluster0.4d1nupp.mongodb.net/test?retryWrites=true&w=majority";

const PORT = 5000;

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log('Server is runing ' + PORT);
        })
    } catch (e) {
        console.log();
    }
}

startApp()