import './stylesheet/style.css';
import './stylesheet/bootstrap5.css';


import Header from './component/Header.js'
import Main from './component/Main.js'
import Footer from './component/Footer.js'

function App() {
  return (
    <div className="bg-light">
      <Header/>
      <Main/>
      <Footer/>
    </div> 
  );
}

export default App;
