import { useState, useEffect, useRef } from "react"


const workerHandler = (cb) => {
    onmessage = (event) => {
        postMessage(cb(event.data))
    }
}

export const useWorker = (cb) => {

    const [result, setResult] = useState(null)
    const workerRef = useRef(null)


    useEffect(() => {
        const worker = new Worker(

            // we create and UrlObject = like a new script ,
            //  than we insert a blob - chunk of readable code
            URL.createObjectURL(new Blob([`(${workerHandler})(${cb})`]))
        )
        workerRef.current = worker
        worker.onmessage = (event) => setResult(event.data)
        return () => worker.terminate()

    }, [cb])

    return {
        result,
        run: (value) => { workerRef.current.postMessage(value) }
    }

}