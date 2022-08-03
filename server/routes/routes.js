const dotenv = require("dotenv");
dotenv.config();
const urlApi = `https://api.spoonacular.com`;
const apiKey = process.env.API_KEY_SPOONACULAR;
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

function concatWithParams(startUrl, requireQuery) {
    let url = startUrl;
    for (let i = 0; i < Object.keys(requireQuery).length; i++) { // добавление параметров поиска к запросу
        if(i===0) {
            url += "&";
        }
        const param = Object.keys(requireQuery)[i];
        url += `${param}=${requireQuery[param]}`;
        if(i!==Object.keys(requireQuery).length-1) {
            url+="&";
        }
    }

    return url;
}

const routes = (app) => {
    app.get("/recipes/random", (require, response) => {
        const params = require.query;
        let url = `${urlApi}/recipes/random?apiKey=${apiKey}`; /*TODO here is deliberate mistake*/
        url = concatWithParams(url, require.query);
        console.log("fetch: ", url)
        fetch(url)
            .then(responseAPI => responseAPI.text())
            .then(text => response.send(text))
            .catch(error => response.status(error.status).send(error));
    })
    //
    // app.get("/recipes/veggie", (require, response) => {
    //     const params = require.query;
    //     let url = `${urlApi}/recipes/random?apiKey=${apiKey}`; /*TODO here is deliberate mistake*/
    //     url = concatWithParams(url, require.query);
    //     console.log("fetch: ", url)
    //     fetch(url)
    //         .then(responseAPI => responseAPI.text())
    //         .then(text => response.send(text))
    //         .catch(error => response.status(error.status).send(error));
    // })
}

module.exports = routes;