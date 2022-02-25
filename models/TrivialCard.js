export class TrivialCard {
    constructor(json) {
        this.question = json.question;
        this.correctAnswer = json.correct_answer;
        this.answers = json.incorrect_answers;
        this.answers.push(this.correctAnswer);
        this.responded = false;
        this.userAnswer = undefined;
    }
}