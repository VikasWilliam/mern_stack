process.stdout.write("Hello \n \n")

const questions = [
    "what is your name?",
    "what project you currently work in?",
    "what is your preferred programming language"
]

const answers = [];

function ask(i = 0) {
    debugger
    process.stdout.write(`\n\n\n ${questions[i]}`)
    process.stdout.write(`>`)
}

ask()

process.stdin.on("data", function (data) {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
})

process.on("exit", function () {

    console.log(`Hello ${answers[0]} you current project is ${answers[1]} is great , keep enhancing your skills in ${answers[2]}`)

})


