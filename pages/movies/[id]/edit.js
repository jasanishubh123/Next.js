import Router from 'next/router'
import MovieCreateForm from '../../../components/MovieCreateForm'
import { useEffect, useState } from 'react'
import { getMoviesById , updatemovie } from '../../../action'

// const MovieEdit=()=>{
//     const router=useRouter()
    
//     const defaultdata={
//         id:'',
//         name:'',
//         description:'',
//         rating:'',
//         image:'',
//         cover:'',
//         longDesc:'',
//         genre:''
        
//     }
//     const [editData,setEditData]=useState(defaultdata)
//     useEffect(()=>{
//         const id = router.query.id
//         getMoviesById(id).then((movie)=>{
//             setEditData(movie)
//         })
//     })

 
  

//     return(
//         <div className="container">
//             <h1>Edit Movie</h1>
           
//             <MovieCreateForm initialData={editData} />
//         </div>
//     )
// }

class EditMovie extends React.Component{

    // static  getInitialProps({query}){
    //     return {query}
    // }

    static  async getInitialProps({query}){
        const movie = await getMoviesById(query.id)
        return { movie }
    }
     handleUpdateemovie=(movie)=>{
        updatemovie(movie).then((updateMovie)=>{
        
          Router.push(`/movies/${movie.id}`)
        //   router.push("/")
        })
  }

    // state={
    //     movie:{
    //         name:'',
    //         description:'',
    //         rating:'',
    //         image:'',
    //         cover:'',
    //         longDesc:'',
    //         genre:''
    //     }
    // }

    // componentDidMount(){
    //     const {id}= this.props.query
    //     getMoviesById(id).then((movie)=>{
    //        // console.log(movie)
    //          this.setState({movie})
    //          console.log(this.state.movie)
    //     })

    // }

    render(){
        const {movie} = this.props
        return(
            <div className="container">
                         <h1>Edit Movie</h1>
                        {/* {JSON.stringify(this.state.movie)} */}
                         <MovieCreateForm initialData={movie}
                         handleFormSubmit={this.handleUpdateemovie} />
           </div>
        )
    }

}
export default EditMovie