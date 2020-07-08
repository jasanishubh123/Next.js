import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { deleteMovie, getMoviesById } from '../action/index'




const MovieList = (props) => {

    console.log("MovieList")
    const router = useRouter()
    
    const shorten = (desc) => {

        if (desc && desc.length > 200) {
            return desc.substr(0, 200) + "..."
        } else {
            return desc
        }


    }

    const DeleteMovie = (id) => {
        //console.log(id+"IDDDD")

        deleteMovie(id).then(() => {
            router.push('/')
        })
    }
   
    

    const list = () => {
        return (
            <>
            
            {
            props.movies.map(movie => (
            
                   
                    <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <Link href="movies/[id]" as={`/movies/${movie.id}`}>
                                <a><img className="card-img-top" src={movie.image} alt="" /></a>
                            </Link>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <Link href="movies/[id]" as={`/movies/${movie.id}`}>
                                        <a >{movie.name}</a>
                                    </Link>

                                </h4>
                                     <div className="movie-genre"style={{fontWeight:"bold"}}>{movie.genre}</div>
                                <p className="card-text">{shorten(movie.description)}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">{movie.rating}</small>

                                <button onClick={() => DeleteMovie(movie.id)} className="float-right btn btn-danger" >Delete</button>
                                
                                
                               
                            </div>
                        </div>
                    </div>
                

            )
           
            )}
            </>
        )
        
    }

    return (
        <>


            {
                list()

            }




        </>
    )

}
export default MovieList