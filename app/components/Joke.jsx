import React from 'react'

const Joke = () => {
  return (
    <div>
       <p id="fun">try </p>

const activity = document.querySelector("p");
fetch(`http://www.boredapi.com/api/activity/`, {mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    fun = response.activity;
    console.log(fun)
    document.getElementById("fun").innerHTML = JSON.stringify(fun)
})

<button className="text-white" onClick="Joke()">Bored?</button>
    </div>
  )
}

export default Joke
