import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      showAlert('Dark mode is enabled', 'success');
      document.title = 'TextTutils - DarkHome';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success');
      document.title = 'TextTutils - LightHome';
    }
  };

  return (
    <Router>
      <>
        {/* <Navbar /> */}
        <Navbar title="TextTutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/about"
              element={<About mode={mode}/>}
            />
            <Route
              path="/"
              element={<Textform showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />}
            />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
