import { useState } from "react"
import Card from "../components/Card"
import Bmw from '../assets/bmwaddict_20200704_1.png'
import React, {useEffect } from 'react';


function Homes(){
    const [state,setState] = useState('Halo')
    const [count,setCount] = useState(0)
    const [myHobbies, setMyHobbies] = useState([])
    const [hobby, setHobby] = useState('')
    const [profile, setProfile] = useState({})
    console.log(profile);
    const [button, setButton] = useState(true)
    const [changed,setChanged] = useState(0)

      useEffect(() => {
        console.log("ada perubahan");
        setChanged(changed + 1);
    }, [button]); 
    
// const [favFilm,setFavFilm] = useState(
//     [
//         {
//             no: '1',
//             judul:  'marvel',
//             tahun: '1111',
//         },
//         {
//             no: '2',
//             judul:  'marvel 2',
//             tahun: '2222',
//         },
//         {
//             no: '3',
//             judul:  'marvel 3',
//             tahun: '3333',
//         }
//     ]
// )
// console.log(favFilm); 

    return(
        <>
         <Card
           src={Bmw}
           nama={'Rizkyyy'}
           des={'Bootcamp Student'}
           des2={'Coding membuat saya belajar bagaimana berpikir'}
           videoSrc={'https://www.youtube.com/watch?v=pSuG1mevHec&list=RD2lzuTztbysY&index=2/video.mp4'}

       /> 
   
       
       {/* <input type = "text" onChange={(e) => setHobby(e.target.value)} />
       <button onClick={(e) => {
            setMyHobbies([...myHobbies,hobby])
            setHobby('')
       }} >update hobby</button> */}
       {/* <button onClick={(e) => setProfile([...Profile, nama: 'Rizkyyy',umur: '21'])} >update <object data="" type=""></object></button> */}
       
       

       {/* <ul>
        {favFilm.map((favFilm,index) => {
            console.log(index);
            return (
                <li key={index}>{favFilm}</li>
        
            )
        })}

       </ul> */}
       <table className="table">
  <thead>
    <tr>
      {/* <th scope="col">no</th>
      <th scope="col">judul</th>
      <th scope="col">tahun</th> */}

    </tr>
  </thead>
  {/* <tbody>
  {favFilm.map((film,index) => {
            console.log(index);
            return (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{film.judul}</td>
                <td>{film.tahun}</td>
              </tr>
            )
        })}
   
  </tbody> */}
</table>
        </>
    )
  }

 
export default Homes