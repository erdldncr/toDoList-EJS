const express= require('express')
const bodyParser= require('body-parser')

const app=express();


app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var today=new Date().getDay()
    
    res.render('list',{kindOfDay:days[today]});
});





app.listen(3000,function(){
    console.log('Server on port 3000')
})