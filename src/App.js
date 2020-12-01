import React from "react";
import PropTypes from "prop-types";

function Food({name, pic, rat}){
  return(
    <div>
      <h2>I like {name}</h2>
      <h4>{rat} / 5</h4>
      <img src={pic} alt={name}/>
    </div>
  ); 
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  pic:PropTypes.string.isRequired,
  rat:PropTypes.number.isRequired
}

const foodILike = [
  {
    id:1,
    name:"Kimchi",
    image:
    "https://image.edaily.co.kr/images/photo/files/NP/S/2018/11/PS18112701515.jpg",
    rating:4.9
  },
  {
    id:2,
    name:"ramen",
    image:
    "http://img.hani.co.kr/imgdb/resize/2012/0806/8000971505_20120806.JPG",
    rating:4.3
  }
];

function App() {
  return (
  <div>
   {foodILike.map(dish =>(
     <Food key={dish.id} name={dish.name} pic={dish.image} rat={dish.rating}/>     
   ))}
  
  </div>  
  );  
}

export default App;

