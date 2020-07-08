
import { useRouter } from 'next/router'
import { getMoviesById } from '../../../action'
import  Link  from 'next/link'
const Movie = (props) => {

    const router = useRouter()
    console.log(router)
    const { id } = router.query
    const Movie = props.Movie
    return (
        <div className="container">
            <div className="jumbotron">
    <h1 className="display-4">{Movie.name}</h1>
    <p className="lead">{Movie.description}</p>
                <hr className="my-4"/>
    <p>{Movie.longDesc}</p>
    <span className="btn btn-primary btn-lg">{Movie.genre}</span>
    <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`} >
                                     <button  className="ml-1 btn btn-info btn-lg" >Edit</button>
                                </Link>   

            </div>
           
        </div>    
    )
}

Movie.getInitialProps= async({query})=>{

  
    console.log("getInitialProps Called From Movie By Id")
    const Movie=await getMoviesById(query.id)

    return{
        Movie
    }



}

export default Movie