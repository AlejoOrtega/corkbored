const URL_BASE = 'http://localhost:8001/'

export const get = (type) => {
    let infoPack =  fetch(`${URL_BASE}${type}`)
    .then((res)=> res.json())
    .then((data)=> {
        return data
    })
    .catch(() =>false)

    return infoPack
}

export const post = (type, data) => {
    return fetch(`${URL_BASE}${type}`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
    })
    .then(()=>true)
    .catch(() =>false)
}