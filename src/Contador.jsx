import React, {useState} from "react" ;

function Contador (){
    const [count,setCount] = useState(0);
    return(

    <div>
        <h1>Contador de clicks</h1>
        <p>En el siguiente boton pondra encontrar un contador de clicks</p>
        <p>El boton lleva {count} clicks</p>
        <button className="button" onClick ={() => setCount (count+1)}>Contador</button>
        <button className= "button" onClick ={() => setCount(0)}>Reinicio</button>
    </div>

    )  
}

export default Contador