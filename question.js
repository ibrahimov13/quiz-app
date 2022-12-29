function Question(questionText, answerOptions, correctAnswer){
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function(answer){
    return answer === this.correctAnswer
}

let questions = [
    new Question("1-What does HTML stand for?", {a: "Hyper Text Preprocessor", b: "Hyper Text Markup Language", c: "Hyper Text Multiple Language", d: "Hyper Tool Multi Language"}, "b"),
    new Question("2-What does CSS stand for?", {a: "Common Style Sheet", b: "Colorful Style Sheet", c: "Computer Style Sheet", d: "Cascading Style Sheet"}, "d"),
    new Question("3-What does PHP stand for?", {a: "Hypertext Preprocessor", b: "Hypertext Programming", c: "Hypertext Preprogramming", d: "Hometext Preprocessor"}, "a"),
    new Question("4-What does SQL stand for?", {a: "Stylish Question Language", b: "Stylesheet Query Language", c: "Statement Question Language", d: "Structured Query Language"}, "d"),
    new Question("5-What does XML stand for?", {a: "eXtensible Markup Language", b: "eXecutable Multiple Language", c: "eXTra Multi-Program Language", d: "eXamine Multiple Language"}, "a")
]