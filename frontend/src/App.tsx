import SalesCard from "./components/SalesCard";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
return (
  <>
    <ToastContainer></ToastContainer>
    <Header></Header>
    <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard></SalesCard>
        </div>
      </section>
    </main>
  </>
)
}

export default App;
