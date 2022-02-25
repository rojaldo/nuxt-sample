export class TrivialCard {
    constructor(json) {
        this.question = json.question;
        this.conrrectAnswer = json.correct_answer;
        this.answers = json.incorrect_answers;
        this.answers.push(this.conrrectAnswer);
    }
}