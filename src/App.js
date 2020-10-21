import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./components/ProductCard"

class App extends React.Component {
  render() {



    return (
      <div>
        <Produto>
        [ 
          {
          id: {1}
          name: {"Foguete da Missão Apollo 11"}
          value: {10000.0}
          imageUrl: {"https://picsum.photos/200/200"}
        },
        {
          id: 1,
          name: "Foguete da Missão Apollo 11",
          value: 10000.0,
          imageUrl: "https://picsum.photos/200/200"
        },
	
        ]

        </Produto>
        

      </div>
    
  ); //fechamento return 
  } //fechamento render
    
} //fechamento class

export default App;
