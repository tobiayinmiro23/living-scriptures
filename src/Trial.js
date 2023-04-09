import React, { useEffect, useState }  from 'react'

function Trial() {
    const [verse,setverse]=useState([])
     const [result,setresult]=useState([])
    useEffect(()=>{
        fetch(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/chapters/1JN.1?content-type=json&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,{
            headers:{'api-key':'f8d9e17c5da52507eac9cdb50c258d31'}
        }).then(res=>res.json())
        .then(info=>{
            console.log(info.data.content)
            info?.data?.content?.map((item,i)=>{
                setverse(item.items)
            })
           console.log(verse)
        })
    },[])
  return (
      <div>
        {verse.map((item,i)=>{
          return <p>{item.text}</p> 
    })}
        
        Trial
    </div>
  )
}

export default Trial