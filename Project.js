document.getElementById("quiz_form").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;

    let correct = 0, total = 0;
    form.querySelectorAll('input[type="radio"]:checked').forEach(inp => {
        if (inp.value == "correct") correct++;
        total++;
    })

    document.getElementById("score").innerHTML = `${correct}/${total}`;
    document.getElementById("quiz_form").reset();
})