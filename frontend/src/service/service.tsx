const backendServer = "http://localhost:9999";

type objParams = {[param: string]: (string|number)}

class FoodAPI {
    #getPopular = async (objParams: objParams): Promise<any> => {
        const api = await fetch(`${backendServer}/recipes/random?${FoodAPI.createStringParams(objParams)}`);
        return api.json();
    }

    getPopular = (objParams: objParams) => {
        return this.#getPopular(objParams)
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