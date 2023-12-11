import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import MainRoute from './component/MainRoute';

function App() {
  return (
    <div className="App">
      <h2>FRONTEND</h2>
      <Navbar></Navbar>
      <MainRoute></MainRoute>
    </div>
  );
}

export default App;
