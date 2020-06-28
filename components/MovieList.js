import React, { useState } from 'react';
import Link from 'next/link';
const MovieList = (props) => {


    const shorten=(desc)=>{

        if(desc && desc.length>200){
           return desc.substr(0,200)+"..."
        }else{
            return desc
        }


    }

    const list=()=>{
        return(
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

                            <p className="card-text">{shorten(movie.description)}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                        </div>
                    </div>
                </div>


            )
            )
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