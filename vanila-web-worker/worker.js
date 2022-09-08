console.log(this)
self.onmessage =(ev)=>{
    console.log(ev.data)
    for (let i = 0; i < ev.data; i++) {
    }
    self.postMessage('done')
}