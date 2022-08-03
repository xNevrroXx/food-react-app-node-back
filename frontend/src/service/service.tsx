const backendServer = "http://localhost:9999";

type objParams = {[param: string]: (string|number)}

class FoodAPI {
    #getPopular = async (objParams: objParams) => {
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
    #getVeggie = async (objParams: objParams) => {
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

    getPopular = (objParams: objParams) => {
        return this.#getPopular(objParams);
    }
    getVeggie = (objParams: objParams) => {
        return this.#getVeggie(objParams);
    }


    static createStringParams(objParams: objParams) {
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