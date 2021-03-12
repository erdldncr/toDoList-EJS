const express= require('express')
const bodyParser= require('body-parser')

const app=express();

var items=['Buy Food','Eat Food','Cook Food']
let workIems=[]
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    
   
    var today=new Date()
    var options={
        weekday:'long',
        day:'numeric',
        month:'long'
    }
    var day=today.toLocaleDateString('en-US',options)

    res.render('list',{listTitle:day,newListItems:items});
});

app.post('/',function(req,res){
    
    let item=req.body.newItem;

    if(req.body.list==='Work'){
        workIems.push(item)
        res.redirect('/work');
    }else{  
        items.push(item);
        res.redirect('/');
    }
    
});

app.get('/work',function(req,res){
    res.render('list',{listTitle:'Work List',newListItems:workIems});
});

app.post('/work',function(res,req){
    let item=req.body.newItem;
    workIems.push(item);
    res.redirect('/work');
})

app.get('/about',function(req,res){
    res.render('about')
})

app.listen(3000,function(){
    console.log('Server on port 3000')
})