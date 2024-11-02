const index = document.querySelector('.index');
const advice = document.querySelector('.adviceText');
const randomBtn = document.querySelector('.dice-btn')
let adviceTxt;
let indexNum;

async function randomApi() {
    const url = "https://api.adviceslip.com/advice"
    try {
        const response = await fetch(url);
            if (!response.ok) {
            index.innerHTML = "Id Number cannot be found";
            adviceTxt = "Advice text cannot be found"
        }else {
            response.json()
            .then((response) => {
                adviceTxt = response.slip.advice;
                indexNum = response.slip.id
                index.innerHTML = indexNum;
                advice.innerHTML = `"${adviceTxt}"`;
            })
            .catch( (error) => {
                console.log(error)
            })
        }
    } catch (error) {
        console.log(error)
    }
}

randomApi()

function getRandomApi() {
    randomApi()
}

randomBtn.addEventListener('click', () => getRandomApi())