const express = require("express");
const app = express();
const cors = require("cors")
const axios = require("axios")
require('dotenv').config()


app.use(cors())

app.get("/", (req, res) =>{
    res.send("Server is running")
})

app.get("/:location", async (req, res)=>{
    const location = req.params.location

    try{
        const locationWeatherResponse = await axios.get(
            'https://weatherapi-com.p.rapidapi.com/forecast.json',
            {
                headers: {
                    'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
                    'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
                },
                params: {q: location , days: '7'}
            }
        )
        res.send(locationWeatherResponse.data)
    } catch(err){
        console.log(err)
    }
})

const port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})