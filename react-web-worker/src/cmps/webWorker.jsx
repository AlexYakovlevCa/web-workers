
import React, { useEffect, useState } from "react"
import { useWorker } from "../hooks/use-webworker"

export const WebWorker = () => {

    const [color,setColor] = useState('white')
    const {result,run} = useWorker(runMeLoop)

    useEffect(()=>{
        document.body.style.backgroundColor = color
        console.log(result)
    },[color,result])

    function runMeLoop(){
        for(var i=0; i<100000000; i++){
            console.log('works')

        }
        return 'work'
    }

        
    console.log(color)
    return <section>
        
        <h1>hello</h1>

        <button onClick={()=>run(8)} className="btn1">Calculate </button>
        <button onClick={() => setColor(`hsl(${Math.random() * 360},50%, 50%)`)} className="btn2">Change Color</button>

        {result&&<p className="worker-result">{result}</p>}
    </section>
}