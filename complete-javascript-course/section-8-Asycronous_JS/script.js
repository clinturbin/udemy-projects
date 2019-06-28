//============================================================
//             Section 8 - Asynchronous JavaScript
//============================================================


// Simple example of asynchronouse code
const first = () => {
    console.log('Hey there');
    second();
    console.log('The end');
};

const second = () => {
    setTimeout(() => {
        console.log('Async Hey there!');
    }, 2000);
};

// first();
// Hey there => The end => Async Hey there!  are printed to the console



// Promises
//--------------------------

// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([523, 883, 432, 974]);
//     }, 1500);
// });

// const getRecipe = recipeID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             let recipe = {
//                 title: 'Fresh tomato paste',
//                 publisher: 'Jonas'
//             };
//             resolve(`${ID}: ${recipe.title}`);
//         }, 1500, recipeID);
//     });
// };

// const getRelated = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(pub => {
//             let recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
//             resolve(`${pub}: ${recipe.title}`);
//         }, 1500, publisher);
//     });
// };

// getIDs
// .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
// })
// .then(recipe => {
//     console.log(recipe);
//     return getRelated('Jonas');
// })
// .then(recipe => {
//     console.log(recipe);
// })
// .catch(error => {
//     console.log('Error!'); 
// });


// Async / Await
//--------------------------

// async function getRecipesAW() {
//     const IDs = await getIDs;
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);
//     const related = await getRelated('Jonas');
//     console.log(related);

//     return recipe;
// };

// getRecipesAW()
// .then(result => {
//     console.log(`${result} is the best ever`);
// });


//      AJAX and APIs
//--------------------------
// Asynchronous JavaScript And XML
// Application Programming Interface

// Making AJAX Calls with Fetch and Promises

const getWeather = woeid => {
    // fetch('https://crossorigin.me/https://www.metaweather.com/api/location/2487956/')
    fetch(`https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/${woeid}/`)
    .then(result => {
        // console.log(result);
        return result.json();
    })
    .then(data => {
        // console.log(data);
        let today = data.consolidated_weather[0];
        console.log(`temperature in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
    })
    .catch(error => {
        console.log(error);
    });
};

getWeather(2487956);
getWeather(44418);


// Making AJAX Calls with Fetch and Async/Await

async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        let tomorrow = data.consolidated_weather[1];
        console.log(`temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
        return data;
    } catch(error) {
        console.log(error);
    }
    
};

getWeatherAW(2487956);
// getWeatherAW(44418);
let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data;
    console.log(dataLondon);
});
