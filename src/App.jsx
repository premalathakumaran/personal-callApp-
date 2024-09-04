// src/App.jsx
import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes , BrowserRouter } from 'react-router-dom';
// import store from './store'; 
import LoginPage from './pages/LoginPage';
import Admin from './pages/Admin';

const App = () => (
  // <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path={'table'} element={ <Table />}/> */}
      </Routes>
    </Router>
  // </BrowserRouter>
);

export default App;



// main code if it is any error use this code ------------------------------------------

// // src/App.jsx
// import React from 'react';
// // import { Provider } from 'react-redux';----
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import store from './store'; ---
// import LoginPage from './pages/LoginPage';
// import Admin from './pages/Admin';

// const App = () => (
 
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/admin" element={<Admin />} />
//       </Routes>
//     </Router>

// );
// export default App;