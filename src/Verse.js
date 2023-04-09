import React, { useEffect, useState } from 'react'

function Verse() {
     const [verse,setverse]=useState([])
     const [result,setresult]=useState([])
    useEffect(()=>{
        fetch(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/chapters/1JN.1?content-type=json&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,{
            headers:{'api-key':'f8d9e17c5da52507eac9cdb50c258d31'}
        }).then(res=>res.json())
        .then(info=>{
            // console.log(info.data)
            console.log(info.data.content)
            info?.data?.content?.map((item,i)=>{
                setverse(item.items)
                // return item.items
            })
            // verse.map((item,i)=>{
            //    return setresult(item.text)
            //     // return item.text
            // })
        })
    },[])
    // console.log(verse)
    {console.log(verse.map((item,i)=>{
        return item.text
    }))}
  return (
    <div className='verse'>
        verse
       {
           verse.map((item,i)=>{
            return  <p key={i}>{item.text}</p> 
        })
       }
         {/* <p>{result}</p> */}
        
    </div>
  )
}
export default Verse