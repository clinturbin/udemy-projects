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

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recipeID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            let recipe = {
                title: 'Fresh tomato paste',
                publisher: 'Jonas'
            };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recipeID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            let recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

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

async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Jonas');
    console.log(related);

    return recipe;
};

getRecipesAW()
.then(result => {
    console.log(`${result} is the best ever`);
});

