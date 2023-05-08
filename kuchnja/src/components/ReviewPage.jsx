import React, { useState, useEffect } from 'react'
import Subheading from './Subheading'
import './Recommendation.css'
import './ReviewPage.css'
import { useContext } from 'react'
import { ThemeContext } from '../context/ContextComp'

function ReviewPage() {
        const {state, setState, randomState, setRandomState,handleRecommendation} = useContext(ThemeContext);


        return (
        <div className='app__recommendation__wrapper section__padding' id=''>
        <div className="app__wrapper_info">
        <Subheading title="The new flavour"/>
        <h1 className="app__recommendation-h1">The Peoples Voices</h1>

        <div className="app__recommendation-api-messages">
        <p className="app__recommendation-message p__opensans"> <q>{randomState.body}{randomState.name}{randomState.body}{randomState.name}</q></p>
        <p className='app__recommendation-message-author p__opensans'>{randomState.email}</p>
        <p className='app__recommendation-organisation p__opensans'>Organisation</p>
        <hr />     
        </div>


        <div className="app__recommendation-api-messages">
        <p className="app__recommendation-message p__opensans"> <q>{randomState.body}{randomState.name}{randomState.body}{randomState.name}</q></p>
        <p className='app__recommendation-message-author p__opensans'>{randomState.email}</p>
        <p className='app__recommendation-organisation p__opensans'>Organisation</p>
        <hr />     
        </div>

        <div className="app__recommendation-api-messages">
        <p className="app__recommendation-message p__opensans"> <q>{randomState.body}{randomState.name}{randomState.body}{randomState.name}</q></p>
        <p className='app__recommendation-message-author p__opensans'>{randomState.email}</p>
        <p className='app__recommendation-organisation p__opensans'>Organisation</p>   
        <hr />   
        </div>
     
        <button type='button' className='custom__button' onClick={handleRecommendation}>More Reviews</button>
        
        </div>
        </div>
        )
        }

export default ReviewPage