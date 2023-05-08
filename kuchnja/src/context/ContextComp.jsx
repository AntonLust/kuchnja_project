import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import data from '../components/data_menu'
export const ThemeContext = React.createContext();


export function ContextComp(props) {

  // Recommendation
  const [state, setState] = useState([{name:'', body:'', email:''}]);
  // [{name:'', body:'', email:''}] verhindert, dass er abschmiert, auch wenn er nix kriegt

  useEffect(() => {
      const weatherFetch = async ()=>{
      try {
          const res = await fetch('https://jsonplaceholder.typicode.com/comments');
          const data = await res.json();
          setState(data);
          
      } catch (error) {
          console.error(error);
      }
  }
  weatherFetch();
  }, [])

  // Recommendation - fetch + clickHandler

  let randomNum = Math.floor(Math.random() * state.length);
  const [randomState, setRandomState] = useState({name:'', body:'', email:''})

  useEffect(() => {    
          setRandomState({...state[randomNum]}) ;

  }, [state])
  

  const handleRecommendation = ()=>{
      setRandomState({...state[randomNum]})
  }


  // Slider

  const [menu, setMenu] = useState(data);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const lastIndex = menu.length -1;
    if(index < 0){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  
  }, [index, menu])
  // useEffect: wenn unser state zu negativ ist, setzt er ihn hoch, wenn zu positiv herunter    

  // Reservation

  const initial = {
    name: '',
    email: '',
    tel: '',
    date: '',
    time: '',
    guests: ''
  };
    const [reservation, setReservation] = useState(initial);

      // setReservation(initialState rein)
      // timeout nach dem Verschwunden..paar Sekunden

      const [isSubmitted, setIsSubmitted] = useState(false);      

      const handleInputChange = event => {
        const { name, value } = event.target;
        setReservation({ ...reservation, [name]: value });
      }; 
      // hole mir nach Eingabe name +value - name ist Attribut von input - mache key-value-pair
    
      const handleSubmit = event => {
        event.preventDefault();
        setIsSubmitted(true); // setze isSubmitted auf true, wenn das Formular abgeschickt wird
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
        setTimeout(() => {
          setReservation(initial);
        }, 7000);
        
      };


  return (
    <>
    <ThemeContext.Provider value={{state, setState,randomState, setRandomState,handleRecommendation, menu, setMenu, index, setIndex, reservation, setReservation, isSubmitted, setIsSubmitted, handleInputChange, handleSubmit}}>
        {props.children}         
    </ThemeContext.Provider>
    </>
  )
}