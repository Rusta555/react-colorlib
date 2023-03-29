import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Dynamiccard from "./components/Dynamiccard";
import {data} from './data/mockdata'
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [dataState, setDataState] = useState(data.filter((item, i) => i < page * 6).reverse().slice(0, 6))

  useEffect(() => {
    console.log(page)
    setDataState(data.filter((item, i) => i < page * 6).reverse().slice(0, 6))
  }, [page])

  return (
  
  <div className="container">
      <Header />
      
      <Card/>
      <div className="product">{
        dataState.map(item=>(<Dynamiccard
          img={item.image}
          title={item.title}
          description={item.description.slice (0, 10)}
          price={item.price}
          />))
      }
      </div>
      <div>
        {Array(Math.ceil(parseFloat(data.length / 6))).fill().map((_, i) => <button
          onClick={() => {
            /* console.log('i', i) */
            setPage(i + 1)
          }}
        >{i + 1}</button>)}
      </div> 
      <Footer />
    </div>
    );
}

export default App;
