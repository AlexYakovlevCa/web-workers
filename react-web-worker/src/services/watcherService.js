export default {
    addWatcher,
    getWatchers,
    removeWatcher,
    getById
}

function getById(id) {
    console.log('id', id);
    console.log('gWatchers', gWatchers);
    const watcher = gWatchers.find(watcher => watcher.id === +id)
    console.log(watcher);
    return Promise.resolve(watcher)
}

function getWatchers() {
    return Promise.resolve([...gWatchers])
}

function addWatcher({ name, email }) {
    const newWatcher = {
        id: gId++,
        name,
        email,
        shows: [..._defaultShows],
        img: 'https://api.adorable.io/avatars/200/' + name
    }
    gWatchers.push(newWatcher)
    return Promise.resolve(newWatcher)
}

function removeWatcher(id) {
    gWatchers = gWatchers.filter(watcher => watcher.id !== id)
    return Promise.resolve()
}

const _defaultShows = ['game of thrones', 'the umbrella academy', 'arrow', 'stranger things']
let gId = 1

let gWatchers = [
    { id: gId++, name: 'Oded Paz', email: 'oded@gmail.com', shows: [..._defaultShows], img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' },
    { id: gId++, name: 'Ido Kobi', email: 'ido@gmail.com', shows: [..._defaultShows], img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png' },
    { id: gId++, name: 'Ilan Rozenfeld', email: 'ilan.roz@gmail.com', shows: [..._defaultShows], img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' },
    { id: gId++, name: 'Alona Tal', email: 'talAl@gmail.com', shows: [..._defaultShows], img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/f9fa8a33850498.56ba69ac2cc3a.png' },
    { id: gId++, name: 'Mrs. Bracha', email: 'bracha.naji@gmail.com', shows: [..._defaultShows], img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png' },
]