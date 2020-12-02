const baseURL = 'http://localhost:3000/api.checkIns/'

export default {
    getCheckIns(){
        return fetch(baseURL)
        .then(res => res.json())
    },

    postCheckIn(payload){
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },
    deleteCheckIn(id){
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }


}