import './App.css';
import Footer from './pages/Quotes'
import arr from './pages/happy'
// import Card from './pages/Card';
import Video from './pages/bgVideo.mp4'
import Navbar from './pages/Navbar';

function App() {
  return (
    <>
    <video autoPlay loop muted src={Video} id='videos'></video>


    <div className='papa'>
    <Navbar></Navbar>
    </div>

    <div className="bottom_quotes">
      <Footer texts={arr[Math.floor((Math.random() * 12) + 1)]}></Footer>
    </div>
    </>
  );
}

export default App;