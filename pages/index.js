
import SideMenu from '../components/SideMenu'

import Coursal from '../components/coursal'
import MovieList from '../components/MovieList'
import { useState, useEffect } from 'react'
import { getMovies, getCategories } from '../action'
import { render } from 'react-dom'

// class IndexPage extends React.Component {


//  static async getInitialProps(){

//     const movies= await getMovies()
//     return{
//      movies: movies
//     }

//   }


//   // constructor(props){
//   //   super(props)
//   //   this.state={
//   //     movies:[]
//   //   }
//   // }
  
//   // componentDidMount(){
//   //   getMovies().then((movies)=>{
//   //     this.setState({movies})
//   //   }).catch((Error)=>{
//   //     alert(Error)
//   //   })
//   // }
 

//   render(){
//     const Pname="MovieDB"
//     const{movies}=this.props
//     return(
    
//       <div>
//       <Head>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//         <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//         <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//       </Head>

//       <Nav />
//       <div className="container" >
     
//         <div className="row" style={{ paddingTop: "100px" }}>
       
//           <div className="col-lg-3">

//             <SideMenu  appName={Pname} />


//           </div>

//           <div className="col-lg-9">

//             <Coursal />

//             <div className="row">

//               <MovieList movies={movies} />

//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//     )
//   }
 
    
  
  

// }



const IndexPage = (props) => {

  const Pname="Movie DB"
  // const [Movies,setMovies]=useState([])

  // getMovies().then(movies=>{
  //   setMovies(movies)
  // })

  // useEffect(()=>{

  //   const FetchData= async()=>{
  //     const result= await getMovies()
  //     setMovies(result)

  //   }
  //   FetchData();

  // })


  const [filter,setFilter]=useState('all')
  const changeCategory = category =>{
    // alert(`Your Category : ${category}`)
    setFilter(category)
  }


  const filterMovies= movies =>{

      if(filter==='all'){
        return movies
      }
        return movies.filter((m)=>{
          return m.genre && m.genre.includes(filter)
        })
  }

  return (
    <>
     
      <div className="container" >
     
        <div className="row" >
       
          <div className="col-lg-3">

            <SideMenu activeCategory={filter} changeCategory={changeCategory}  appName={Pname} cats={props.Categories} />


          </div>

          <div className="col-lg-9">

            <Coursal images={props.images} />
            <h1>Displaying {filter} Movies</h1>
            <div className="row">
             
              <MovieList movies={filterMovies(props.movies) || []} />

            </div>
          </div>

        </div>
      </div>
    </>
  )

}
IndexPage.getInitialProps = async()=>{

  console.log("getInitialProps From IndexPage")
  const movies= await getMovies()
  const Categories= await getCategories()
  const images=movies.map(movie=>({
 
      id:`image-${movie.id}`,
      image:movie.cover
    
   } ))

      return{
       movies: movies,
       images,
       Categories
      }
  
}

export default IndexPage



