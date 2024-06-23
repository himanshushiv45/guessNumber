function guessNum() {

    const input = document.querySelector('.inp');
    const form = document.querySelector("form");
    const result = document.querySelector("#result");
    const allResult = document.querySelector("#allResult");
    const submitBtn = document.querySelector(".submitBtn");
    const startBtn = document.querySelector(".startBtn");

    const allGuessesArray = [];
    let randomNumber = Math.round(Math.random() * 100);

    // PAge Refresh Rokna hai Uske Liye Hum ==>>   e.preventDefault();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // console.log("Submitted");

        const userInputValue = parseInt(input.value);
        if (randomNumber === userInputValue) {
            result.innerText = "Congratulation🎉",
                startBtn.disabled = false;
            submitBtn.disabled = true;

        } else if (userInputValue > randomNumber) {
            result.innerText = "To High!";
        }
        else if (userInputValue < randomNumber) {
            result.innerText = "To Low!";
        } else {
            result.innerText = "Oohh no!!";
        }
        allGuessesArray.push(userInputValue);
        allResult.innerText = "Your Guesses: " + allGuessesArray.join(', ');
        form.reset();
    });


    startBtn.addEventListener("click", () => {
        result.innerText = "";
        allResult.innerText = "";

        startBtn.disabled = true;
        submitBtn.disabled = false;
        randomNumber = Math.round(Math.random() * 100);
    })

}
guessNum();