const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        let capsArray = array.map(word => {
            if (typeof word === 'string') {
                return word.toUpperCase();
            } else {
                reject('Error')
            }
        })
        resolve(capsArray);
    })
}
makeAllCaps(['cucumber', 'tomatos', 'avocado'])
    // makeAllCaps(['cucumber', 4, 'avocado'])
    .then(data => {
        return makeAllCaps(data)
    })
    .then(word => {
        console.log(word);
    })
    .catch(err => {
        console.log('error', err);
    })

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        if (array) {
            resolve(array.sort())
        } else {
            reject('Error')
        }
    })
}
sortWords(['cucumber', 'tomatos', 'avocado'])

.then(data => {
        return sortWords(data)
    })
    .then(sort => {
        console.log(sort);
    })
    .catch(err => {
        console.log('error', err);
    })