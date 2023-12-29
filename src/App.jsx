import { HashRouter, Routes, Route } from 'react-router-dom';
import  {Home}  from '../public/routes/Home';
import  {Coaching}  from '../public/routes/Coaching';
import  {Me}  from '../public/routes/Me';
import React, {useState, useEffect} from 'react';
import CircleLoader from "react-spinners/CircleLoader";
import './App.css'

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className="App">
    {
      loading 
      ? 
        (<div className="loader">
          <CircleLoader color="#012030" size={90} loading={loading} />
        </div>
        )
      :
        (
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </HashRouter>
              )
            }
    </div>
  );
}

export default App;
