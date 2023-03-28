import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Dynamiccard from "./components/Dynamiccard";
import {data} from './data/mockdata'

function App() {
  return (
  
  <div className="container">

      

      <Header />
      
      <Card/>
      <div className="product">{
        data.map (item=>(<Dynamiccard
          img={item.image}
          title={item.title}
          description={item.description.slice (0, 10)}
          price={item.price}
          />))
      }
      </div>

      
      


      <Footer />

      

    </div>
    );
}

export default App;
