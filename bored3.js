function giveAdvice() {
    let responses = [
        "Um... no. Just no.",
        "Sure, if you want a disaster.",
        "I mean... do you really have better options?",
        "Honestly? Flip a coin. It'll be just as effective.",
        "Go for it! But don't blame me when it backfires.",
        "Oh sweetie, absolutely not.",
        "Ugh, fine. But don't come crying to me later.",
        "You do you, but I'm judging.",
        "Yes! And make it iconic.",
        "Nope. Abort mission. Right now.",
        "Why are you even asking? You know the answer."
    ];

    let question = document.getElementById("questionInput").value;
    let responseField = document.getElementById("response");

    if (question.trim() === "") {
        responseField.innerText = "You need to actually ask a question, genius.";
    } else {
        let randomIndex = Math.floor(Math.random() * responses.length);
        responseField.innerText = responses[randomIndex];
    }
}