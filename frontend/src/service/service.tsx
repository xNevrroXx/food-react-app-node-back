import {IObjParams, IObjParamsByName, IObjParamsCuisine} from "../interfaces/interfaces";


const backendServer = "http://localhost:9999";

class FoodAPI {
    #getPopular = async (objParams: IObjParams) => {
        const checkLocalStorage = localStorage.getItem("popular");

        if(checkLocalStorage) {
            return JSON.parse(checkLocalStorage)
        }
        else {
            const api = await fetch(`${backendServer}/recipes/random?${FoodAPI.createStringParams(objParams)}`);
            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            return data.recipes;
        }
    }
    #getVeggie = async (objParams: IObjParams) => {
        const checkLocalStorage = localStorage.getItem("veggie");

        if(checkLocalStorage) {
            return JSON.parse(checkLocalStorage);
        }
        else {
            const api = await fetch(`${backendServer}/recipes/random?tags=vegetarian${FoodAPI.createStringParams(objParams)}`);
            const data = await api.json();
            console.log(data)
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            return data.recipes;
        }
    }
    #getCuisine = async (objParams: IObjParamsCuisine) => {
        const checkLocalStorage = localStorage.getItem(objParams.cuisine);

        if(checkLocalStorage) {
            return JSON.parse(checkLocalStorage);
        }
        else {
            const api = await fetch(`${backendServer}/recipes/complexSearch?${FoodAPI.createStringParams(objParams)}`);
            const data = await api.json();
            console.log(data)
            localStorage.setItem(objParams.cuisine, JSON.stringify(data.results));
            return data.results;
        }
    }
    #getByName = async(objParams: IObjParamsByName)=> {
        const checkLocalStorage = localStorage.getItem(objParams.name);

        if(checkLocalStorage) {
            return JSON.parse(checkLocalStorage);
        }
        else {
            const api = await fetch(`${backendServer}/recipes/complexSearch?${FoodAPI.createStringParams(objParams)}`);
            const data = await api.json();
            console.log(data)
            localStorage.setItem(objParams.name, JSON.stringify(data.results));
            return data.results;
        }
    }

    // getters
    getPopular = (objParams: IObjParams) => {
        return this.#getPopular(objParams);
    }
    getVeggie = (objParams: IObjParams) => {
        return this.#getVeggie(objParams);
    }
    getCuisine = (objParams: IObjParamsCuisine) => {
        return this.#getCuisine(objParams);
    }
    getByName = (objParams: IObjParamsByName) => {
        return this.#getByName(objParams);
    }

    static createStringParams(objParams: IObjParams) {
        let url = '';
        for (let i = 0; i < Object.keys(objParams).length; i++) { // добавление параметров поиска к запросу
            if(i===0) {
                url += "&";
            }
            const param = Object.keys(objParams)[i];
            url += `${param}=${objParams[param]}`;
            if(i!==Object.keys(objParams).length-1) {
                url+="&";
            }
        }

        return url;
    }
}

export default FoodAPI;