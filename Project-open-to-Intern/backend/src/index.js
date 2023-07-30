const express=require('express');
const { default: mongoose }=require('mongoose');
const multer=require('multer');
const route=require('./router/route.js');


const app=express();

app.use(express.json());
app.use(multer().any());

mongoose.connect("mongodb+srv://shivam:ZtpwBovMEGZbnqk2@cluster0.wyrv7bx.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/',route);

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});
