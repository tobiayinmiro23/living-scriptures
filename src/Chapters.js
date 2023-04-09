// import React from 'react'
import React, { useEffect, useState } from 'react'
function Chapters({chapterid,Chapters}) {
const [chapter ,setchapter]=useState([])

  useEffect(()=>{
    fetch(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books/${chapterid}/chapters`,{
        headers:{'api-key':'f8d9e17c5da52507eac9cdb50c258d31'}
    }).then(res=>res.json())
    .then(info=>setchapter(info.data))
    
},[])
console.log(chapter.map(item=>{
          return item?.reference
      }))
// console.log(chapter)
  return (
    <div className='Chapter'>
      <div className="header">

            <div onClick={()=>{Chapters(false)}} className="back">
                <img src="/previous.png" alt="" />
            </div>
            <div className='chaptername'>
            <div className="logo">
                <img src="/bible.png" alt="" />
            </div>
            <h1 className='name'>Living scriptures</h1>
            </div>
            <div className='none'>
              l
            </div>
        </div>
        <div className="chaptersWrapper">
          {
            chapter.map(item=>{
              return <div className="chapters">
                <p >{item?.reference}</p>
              </div> 
          })
          }
        </div>
    </div>
  )
}

export default Chapters