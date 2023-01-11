import React,{useState,useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import axios from 'axios'

const Home = () => {

  let [notes,setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)
  useEffect(()=>{
    getNotes()
  },[])

  let getNotes = async()=>{
    let response = await axios.get('http://127.0.0.1:8000/app/notes/',{
      headers:{
        "Content-type":"application/json",
        "Authorization":"Bearer "+String(authTokens.access)
      }
    })
    let data = await response.data
    setNotes(data)
  }

  return (
    <div>
      <h2>Hello hommie</h2>

      <ul>
        {notes.map(note=>(
          <li key={note.id}>{note.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
