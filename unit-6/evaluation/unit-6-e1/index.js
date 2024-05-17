const dns=require("dns")
const fs=require("fs")

const express = require("express")

const app=express();

app.use(express.json());

app.post("/getmeip",(req,res)=>{
    try{
    const website=(req.body.website_name)
    dns.lookup(website, function (err, addresses, family) {
        res.send(addresses);
      })
    }
    catch(err){
        res.send(err)
    }
})


app.post("/products/create",(req,res)=>{
    const data_recieved=req.body
    // console.log(data_recieved)

    const prevProducts=fs.readFileSync("./products.json","utf-8")
    

    const parsed_prevProducts=JSON.parse(prevProducts)
    console.log(parsed_prevProducts)

    parsed_prevProducts.products.push(data_recieved)
    const finalData=JSON.stringify(parsed_prevProducts)
    console.log(finalData)

    fs.writeFileSync("./products.json",finalData,"utf-8")

    res.send(data_recieved)
})


app.get("/products",(req,res)=>{
    const data=fs.readFileSync("./products.json","utf-8");

    const parsed_Data=JSON.parse(data)

    res.send(parsed_Data.products)
})

app.patch("/products/:productId",(req,res)=>{
    const {id,name,price}=req.body

    fs.readFileSync("./products.json","utf-8",(err,result)=>{
        if(err){
            return res.send("Something went wrong")
        }
        else {
            const prevProducts=JSON.parse(result)
            
            
            const finalData=prevProducts.products.map((element)=>{
                    if(element.id==id)
                    return {...element,name:name,price:price}
                    
                    return element
            })

            result.products=finalData

            fs.writeFileSync("./products.json",result,"utf-8")

            return res.send(req.body) 
        }
    })
})



app.listen(7000,()=>{
    console.log("working on port 7000")
})