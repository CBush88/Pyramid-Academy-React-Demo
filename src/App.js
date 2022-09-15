import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Components/Form';

function App() {
  return (
    <div>
      <Header 
      name = "Bob"
      />
      <br></br>
      <Form />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
