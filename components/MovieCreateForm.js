import {useState,useEffect}from 'react'
const movieform=(props)=>{

  console.log(props)
  const defaultdata={
       
        name:'',
        description:'',
        rating:'',
        image:'',
        cover:'',
        longDesc:'',
        genre:''
        
  }

   const formData = props.initialData ? props.initialData : defaultdata
  
  // console.log(formData)
    
    // const [modalOpen,setModalOpen]=useState(false);
    const[form,setForm]=useState(formData);
    

    // useEffect(()=>{

    //   if(props.initialData){
    //     setForm(props.initialData)

    //   }
    // })

  

    // useEffect(()=>{
    //   setForm(formData);
    //   setModalOpen(true)
    // },[modalOpen])
    

    

    const handlechange=(event)=>{
        const target= event.target
        const name=target.name

        setForm({
            ...form,
            [name]:target.value
        })
 
    }
    const handleGenreChange=(event)=>{
        const { options } = event.target
        const optionLength=options.length
        let values =[]

        for(let i =0;i<optionLength;i++){
            if(options[i].selected){
                values.push(options[i].value)
            }
        }

        setForm({
            ...form,
            genre:values.toString()
        })

    }

    const Savedata=()=>{
    
        props.handleFormSubmit({...form})

    }

    return(
        <form>
           
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" onChange={handlechange} value={form.name} name="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" onChange={handlechange} name="description" value={form.description} className="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
        </div>
        <div className="form-group">
          <label htmlFor="description">Rating</label>
          <input type="number" onChange={handlechange}  name="rating" value={form.rating}  max="5" min="0" className="form-control" id="rating" placeholder="3" />
          <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="text" onChange={handlechange} value={form.image} name="image" className="form-control" id="image" placeholder="http://....." />
        </div>
        <div className="form-group">
          <label htmlFor="cover">Cover</label>
          <input type="text" onChange={handlechange} value={form.cover} name="cover" className="form-control" id="cover" placeholder="http://......" />
        </div>
        <div className="form-group">
          <label htmlFor="longDesc">Long Description</label>
          <textarea className="form-control" onChange={handlechange} name="longDesc" value={form.longDesc} id="longDesc" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select multiple={true} name="genre" onChange={handleGenreChange} className="form-control" value={form.genre} id="genre">
            <option>drama</option>
            <option>music</option>
            <option>adventure</option>
            <option>historical</option>
            <option>action</option>
          </select>
        </div>

        <button type="button" onClick={Savedata} className="btn btn-primary">Save changes</button>
      </form>
    )

}
export default movieform