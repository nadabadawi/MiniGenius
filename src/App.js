import * as React from 'react';

import { Route, Routes  } from 'react-router-dom'
//import { Switch } from 'react-router-dom'
import PageOne from './PageOne';
import PageTwo from './PageTwo';

function App () {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<PageOne />} />
      <Route path="/PageTwo" element={<PageTwo />} />
  </Routes>
    </div>
  );
}

export default App;
