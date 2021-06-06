import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from 'react-particles-js';

function App() {
  return (
    <>
    <Particles
 params={{
                    particles:{
                      number:{
                        value:200,
                        density:{
                          enable:true,
                          value_area:1000

                        }
                      },
                      shape: {
                        type: "circle",
                        stroke: {
                            width: 2,
                            color: "#000080"
                        },
                       
                    },

                    }
                }}


    />
<Navbar/>
<Header/>
</>


  );
  
}

export default App;
