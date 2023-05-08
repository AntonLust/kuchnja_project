import React from 'react'
import './Reservation.css'
import { useContext } from 'react';
import { ThemeContext } from '../context/ContextComp'


export default function Reservation() {
const {reservation, setReservation, isSubmitted, setIsSubmitted, handleInputChange, handleSubmit} = useContext(ThemeContext)
 
      return (
        <div className="app__reservation flex__center section__padding">
            <h1 className='headtext__cormorant'>Reservation</h1> 

        <form className='app__reservation-form' onSubmit={handleSubmit}>
          <label>

            <input
            placeholder='Full Name'
              type="text"
              name="name"
              value={reservation.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <input
            placeholder='E-Mail'
              type="email"
              name="email"
              value={reservation.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <input
            placeholder='Phone number'
              type="tel"
              name="tel"
              value={reservation.tel}
              onChange={handleInputChange}
            />
          </label>
          {/* Eigentliche brauche ich phonenumber nicht für die Verarbeitung */}
          <label>
            <input
            placeholder='Date'
              type="date"
              name="date"
              value={reservation.date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <input
            placeholder='Time'
              type="time"
              name="time"
              value={reservation.time}
              onChange={handleInputChange}
            />
          </label>
          <label>

            <input
            placeholder='Number of Guests'
              type="number"
              name="guests"
              value={reservation.guests}
              onChange={handleInputChange}
            />
          </label>
          <button className='custom__button' type="submit" id='app__reservation-button'>Make Reservation</button>
        </form>
        {isSubmitted && 
        <p className='app__reservation-message' >{`Thank you for your reservation ${reservation.name}. You booked a table on ${reservation.date} at ${reservation.time} for ${reservation.guests} guests!`}</p>
        }
        </div>
      );
    }