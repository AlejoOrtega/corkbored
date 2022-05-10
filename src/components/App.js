import React, {useState} from 'react';

//Components
import Landing from './Landing';
import Register from './Register';
import Home from './Home';
import MemoriesList from './MemoriesList';
import NewMemoryForm from './NewMemoryForm';

//Navigation
import {Routes, Route} from 'react-router-dom'

//Redux
import {useSelector} from 'react-redux'


function App() {
  const memories = useSelector((state)=> state.memories.value)
  console.log(memories)
  return (
    <div className='main'>
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='register' element={<Register />} />
          <Route path='home' element={<Home />} >
            <Route path='memories' element={ <MemoriesList memories={memories.userMemories}/> } />
            <Route path='newMemory' element={ <NewMemoryForm/> } />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
