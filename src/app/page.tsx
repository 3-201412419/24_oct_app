'use client';

import { useState } from "react";

export default function Home() {

  let goods = ['Tomatoes', 'Pasta', 'Coconut']
  let prices = [40,60,80];
  let [number, setNumber] = useState([10,20,30]);

let a =   prices.map((a,i) => {
      return 10
  })


  return (
      <div>
          <h4 className = "title" >상품 목록</h4>

          {/* <span>{number[0]}</span>
          <button onClick = {() => {
            let copy = [...number];
            copy[0]++;
            setNumber(copy);
          }}>+</button>
          <span>{number[1]}</span>
          <button>+</button>
          <span>{number[2]}</span>
          <button>+</button> */}
          
        {
          goods.map((a,i) => {
          return (
            <div className = "food" key = {i}>
              <img src = {'/food' + i + '.png'} className = "food-img" />
              <h4> {a} {prices[i]} </h4>
              <span>{number[i]}</span>
              <button style={{margin : "10px"}} onClick = {() => { 
                let copy = [...number];
                copy[i]++;
                setNumber(copy);
              }}>+</button>

              <button style={{margin : '10px'}}  onClick = {() => { 
                let copy2 = [...number];
                copy2[i]--;
                setNumber(copy2);
              }}>-</button>
            </div>
                )
          })
        }
      </div>
  );
}
