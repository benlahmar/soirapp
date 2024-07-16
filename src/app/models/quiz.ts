import { Question } from "./question";
import { QuizConfig } from "./quizconfig";

/*
* @Auteur BEN LAHMAR
*/
export class Quiz {
    id: number;
    name: string;
    description: string;
    config: QuizConfig;
    questions: Question[];
   

    constructor(data: any) {
       
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach((q:Question) => {
                this.questions.push(new Question(q));
            });
        
    }
}