const bodyParser = require("body-parser")
var cors = require('cors')
const express = require('express')
const app = express()
const query = require("./database/db.js").query
const port = 3001

/* temporary*/
const response=[
    {postId:1, postName:"רעיונות ליצירה בגואש",img:"https://kidsfuncraft.files.wordpress.com/2013/02/img_2193.jpg"},
    {postId:2, postName:"רעיונות ליצירה בפלסטלינה",img:"https://www.internet-mom.com/wp-content/uploads/2020/08/5340-gitit-eyal-%D7%92%D7%AA%D7%99%D7%AA-%D7%90%D7%99%D7%99%D7%9C.png"},
    {postId:3, postName:"רעיונות ליצירה בסבון",img:"http://4.bp.blogspot.com/_27T6_1lW--s/TFsIWbLBJHI/AAAAAAAACqQ/ggE259cGFG8/s576/%D7%9E%D7%A7%D7%9C-%D7%91%D7%95%D7%A2%D7%95%D7%AA-%D7%A1%D7%91%D7%95%D7%9F-bubble-stick-maker-how-to-tuturial.jpg"},
    {postId:4, postName:"רעיונות ליצירה באקריליק",img:"https://www.hagitaz.com/wp-content/uploads/2017/12/IMG_4253-1024x768.jpg"},
    {postId:5, postName:"רעיונות ליצירה באבנים",img:"https://4.bp.blogspot.com/-NAq7814_CsY/WMWYa1F9djI/AAAAAAAA8kk/FJOkmtnJPc8EqwlX0zWYoVVF0bKZT3WmACEw/s1600/kovrik-dlja-vannoj-svoimi-rukami_3.jpg"},
    {postId:6, postName:"רעיונות ליצירה באוריגמי",img:"https://cdn.shopify.com/s/files/1/0596/8006/3667/products/867_4_1200x.jpg?v=1643721216"},
    {postId:7, postName:"רעיונות ליצירה בעיסת נייר",img:"https://static.wixstatic.com/media/4e1270_faa7bbf245fe49dea6ccdd1b4006fe6f~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/4e1270_faa7bbf245fe49dea6ccdd1b4006fe6f~mv2.jpg"},
    {postId:8, postName:"רעיונות ליצירה במים",img:"https://i.pinimg.com/736x/ad/79/00/ad79005a0a761ab5aba9a14310469c5e.jpg"},
    {postId:9, postName:"רעיונות ליצירה בחול",img:"http://www.yeldimdim.co.il/new/pic/avodabhol.jpg"},
    {postId:10, postName:"רעיונות ליצירה בעץ",img:"https://www.mkn.org.il/productImages2/305/2022/06/20/image1655718875.png"}]
 
app.use(cors())
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*")
//     next()
// })
app.use(bodyParser.json())

const date =(d)=>{
  if(typeof(d)=="string")d=new Date(d);
  return d.toJSON().split("T").join(" ").replace(/\..*/,"");
}

app.get('/whats-new', (req, res) => {
    res.json(response)
  })
  app.get('/most-popular', (req, res) => {
    res.json(response)
  })
  
  app.post("/users",(req,res)=>{
    //const body = req.json(req.body)
    console.log("arived")
    const body = req.body
    query(`INSERT INTO users
     VALUES (DEFAULT,"${body.name}","${body.password}","${body.mail}","${date(new Date())}",DEFAULT,NULL)`)
    res.send("tried")

  })

  app.put("/users",(req,res)=>{
    const {name,password} = req.body
    let res = await query(`select id,name,password from users where name=${name}`)
    if(res.length ==0 || res[0].password != password){
      res.send("error")
    }
    else{
      res.send("login")
    }
  })

  app.listen(port, () => {
    console.log(`the server is running on port ${port}`)
  })



 const  example = async ()=>{
  //console.log(await query("insert into users"))
 }
//adding a user
//INSERT INTO users 
//VALUES (DEFAULT,"miriam","lorin13","w0583233625@gmail.com",'2022-07-14',DEFAULT,NULL)
  example()
