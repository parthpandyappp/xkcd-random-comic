import "./styles.css";
import Navbar from './components/Navbar';
import Comic from './components/Comic';
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Comic />
      <Footer />
    </div>
  );
}

export default App;
