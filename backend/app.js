const express = require("express");
const path = require('path');
const app = express();
const cors = require("cors")
const axios = require("axios")
require('dotenv').config()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
    })
  }
app.use(cors())


// app.get("/", (req, res) =>{
//     res.send("Server is running")
// })

app.get("/:location", async (req, res)=>{
    const location = req.params.location

    try{
        const locationWeatherResponse = await axios.get(
            'https://weatherapi-com.p.rapidapi.com/forecast.json',
            {
                headers: {
                    'X-RapidAPI-Key': process.env.APIKEY,
                    'X-RapidAPI-Host': process.env.APIHOST
                },
                params: {q: location , days: '7'}
            }
        )
        res.send(locationWeatherResponse.data)
    } catch(error){
        res.status(500).json({error: error.message})
    }
})

const port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})