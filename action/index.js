import axios from 'axios'


  const CATEGORY=[
    {id:"0",name:"all"},
    {id:"1",name:"drama"},
    {id:"2",name:"advanture"},
    {id:"3",name:"action"},
    {id:"4",name:"historical"}
]

  export const getMovies=()=>{

    // return  new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve(MOVIE_DATA)
    //         //reject("Can not Fetch Data")
    //     },50)
       
    // })

    return axios.get("http://localhost:3000/api/v1/movies").then(res=>res.data)

     
  }

  export const createMovie=(movie)=>{

    // return  new Promise((resolve,reject)=>{
    //   movie.id=Math.random().toString(36).substr(2,5)
    //     MOVIE_DATA.push(movie)
    //     setTimeout(()=>{
    //         resolve(MOVIE_DATA)
    //         //reject("Can not Fetch Data")
    //     },50)
       
    // })
    movie.id=Math.random().toString(36).substr(2,5)
    return axios.post("http://localhost:3000/api/v1/movies",movie).then(res=>res.data)

     
  }


  export const getMoviesById=(id)=>{
    // return new Promise((resolve,reject)=>{
    //  const index= MOVIE_DATA.findIndex((movie)=>{
    //       return movie.id===id
    //   }) 
    //   const Movie=MOVIE_DATA[index]
    //   console.log(Movie)
    //   resolve(Movie)
    // })
    return axios.get(`http://localhost:3000/api/v1/movies/${id}`).then(res=>res.data)

  }

  export const getCategories = ()=>{
    return  new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(CATEGORY)
          //reject("Can not Fetch Data")
      },50)
     
  })
  }

  export const deleteMovie=(id)=>{

    return axios.delete(`http://localhost:3000/api/v1/movies/${id}`).then(res=>res.data)

  }
 
  export const updatemovie=(movie)=>{

    return axios.patch(`http://localhost:3000/api/v1/movies/${movie.id}`,movie).then(res=>res.data)

  }

  