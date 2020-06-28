
import { useRouter } from 'next/router'
import { getMoviesById } from '../../action'

const Movie = (props) => {

    const router = useRouter()
    console.log(router)
    const { id } = router.query
    const Movie = props.Movie
    return (
        <div className="container">
            <div class="jumbotron">
    <h1 class="display-4">{Movie.name}</h1>
    <p class="lead">{Movie.description}</p>
                <hr class="my-4"/>
    <p>{Movie.longDesc}</p>
    <span class="btn btn-primary btn-lg">{Movie.genre}</span>


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