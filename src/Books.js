import React, { useEffect, useState } from 'react'
const Books = ({chapter,chapterid}) => {
const [books,setbooks]=useState([])
// const [chapterid,setchapterid]=useState('')

    useEffect(()=>{
        fetch('https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books',{
            headers:{'api-key':'f8d9e17c5da52507eac9cdb50c258d31'}
        }).then(res=>res.json())
        // .then(info=>console.log(info.id))
        .then(info=>setbooks(info.data))
        // console.log(books)
        // console.log(books.map(item=>{
        //         return item.name
        //     }))
    },[])
    
   
        // <button onClick={GetBooks}>get books</button>
        // {
        //     books.map(item=>{
        //         return item.name
        //     })
        // }
    // console.log(books.map(item=>{
    //     return item.id
    // }))
    const handleChapter=(param)=>{
        chapter(true)
        // setchapterid(param)
       
    }
    // console.log(chapterid)
    // onClick={()=>{handleChapter(item?.id)}}
  return (
    <div className='BooksContainer'>
        <div className="header">
            <div className="logo">
                <img src="/bible.png" alt="" />
            </div>
            <h1 className='name'>Living scriptures</h1>
        </div>
       <div className="search">
           <input type="text" placeholder='Search book' />
           <button>Search</button>
       </div>
       <div className="booksWrapper">
            {
                books.map(item=>{
                    return <div key={item.id} className="books">
                        <h3 onClick={()=>{
                            chapterid(item?.id)
                             chapter(true) 
                            }}>{item?.name}</h3>
                    </div>
                    
                })
            }
       </div>
    </div>
  )
}

export default Books