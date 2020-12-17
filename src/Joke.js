import React, {useState,} from 'react'
import axios from 'axios'
import "./joke.css"


const Joke = () => {

    const [jokes, setJoke]=useState([])

    const getJoke=()=>{
        axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        .then((response)=>{
            let insults=response.data
            setJoke(insults)
        })
    }
    getJoke()
    return (
        <div>
                   <p>{jokes.insult}</p>
        </div>
    )
}

export default Joke

