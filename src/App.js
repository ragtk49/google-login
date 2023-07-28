import React from 'react';
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Home  from './pages/Home';
import Login  from './pages/Login';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
