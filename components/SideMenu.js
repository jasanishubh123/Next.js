import Modal from './Modal'
import MovieCreateForm from './MovieCreateForm'
import {createMovie} from '../action/index'
import { useRouter } from 'next/router' 

const SideMenu= (props)=>{
  const router = useRouter()
  const handlecreatemovie=(movie)=>{
        createMovie(movie).then((movies)=>{
          $('#exampleModal').modal('hide');
          
          router.push("/")
        })
  }

    return(

      


        <div>
          <Modal hasSubmit={false}>
              <MovieCreateForm handleFormSubmit={handlecreatemovie}/>
          </Modal>        
         <h1 className="my-4">{props.appName}</h1>
    <div className="list-group">
      {
        props.cats.map(c=>(
        <a href="#" key={c.id} onClick={()=>{props.changeCategory(c.name) }}  className={`list-group-item ${props.activeCategory==c.name?'active':''}`}>{c.name}</a>
        )
        )
      }
     
    </div>
    </div>
    )
    
   
}
export default SideMenu