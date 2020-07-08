const next = require('next')
const express = require('express');

const bodyParser=require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const filePath='./data.json'
const movieData=require(filePath)
const fs=require('fs')
const path=require('path')


app.prepare().then(() => {

  const server = express();
  server.use(bodyParser.json())

  server.get("/api/v1/movies",(req,res)=>{
      console.log(movieData)
    return res.json(movieData)
  })

    server.get('/api/v1/movies/:id',(req,res)=>{
        const {id}  = req.params
        console.log(id)

        const Movie= movieData.find(m=>m.id===id)
        
        // const Movie=movieData[index]
        //console.log(Movie)
        return res.json(Movie)
    })

    server.post('/api/v1/movies',(req,res)=>{
        const movie = req.body
        movieData.push(movie)

        const PathToFile=path.join(__dirname,filePath)
        const StringifiedData=JSON.stringify(movieData,null,2)

        fs.writeFile(PathToFile,StringifiedData,(err)=>{
            if(err){
               return  res.status(400).send(err)
            }else{
                return res.status(200).send("Movie Succesfully added")
            }
        })
    })

    server.delete('/api/v1/movies/:id',(req,res)=>{
        const {id}=req.params
        const index=movieData.findIndex(m=>m.id===id)
        movieData.splice(index,1)

        const PathToFile=path.join(__dirname,filePath)
        const StringifiedData=JSON.stringify(movieData,null,2)

        fs.writeFile(PathToFile,StringifiedData,(err)=>{
            if(err){
               return  res.status(400).send(err)
            }else{
                return res.status(200).send("Movie Succesfully added")
            }
        })
    })

    server.patch('/api/v1/movies/:id',(req,res)=>{
      const {id}=req.params
      const movie = req.body
      const index=movieData.findIndex(m=>m.id===id)
      movieData[index]=movie

      const PathToFile=path.join(__dirname,filePath)
      const StringifiedData=JSON.stringify(movieData,null,2)

      fs.writeFile(PathToFile,StringifiedData,(err)=>{
          if(err){
             return  res.status(400).send(err)
          }else{
              return res.status(200).send("Movie Succesfully Updated")
          }
      })
  })


  // we are handling all of the request comming to our server
  server.get('*', (req, res) => {
    // next.js is handling requests and providing pages where we are navigating to
    return handle(req, res)
  })

 


  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
    //console.log(movieData)
  })
})