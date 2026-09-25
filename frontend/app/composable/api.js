
import { useStore } from "./store";
import axios from "axios";


export const api = () => {
    const store = useStore();
    store.loaduser();

    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            token: store.token
        }
    });
};