import './App.css';
// import   useState from 'react'
import { useState } from 'react';
import Books from './Books';
import Chapter from './Chapters';
import Chapters from './Chapters';
import Verse from './Verse';
import Trial from './Trial';

function App() {
  const [chapter,setchapter]=useState(false)
const [chapterid,setchapterid]=useState('')

  const Chapter=(params)=>{
    setchapter(params)
  }
  // console.log(chapter)
  // console.log(chapterid)
  return (
    <div>
      {/* <div className="App">
      {chapter ? <Chapters Chapters={Chapter} chapterid={chapterid}/> :
      <div >
      <Books chapterid={setchapterid} chapter={Chapter}/>
     </div>}
      </div> */}

      <Trial/>
      {/* <Verse/> */}
     
    </div>
    
    
  );

}

export default App;
