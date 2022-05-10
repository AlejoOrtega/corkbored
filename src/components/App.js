import React from 'react';
import Landing from './Landing';
import Register from './Register';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='main'>
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
