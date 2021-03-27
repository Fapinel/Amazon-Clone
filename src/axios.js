import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-41c2sd.cloudfunctions.net/api' // THE API (cloud function) URL
    // http://localhost:5001/challenge-41c2sd/us-central1/api
});

export default instance;


