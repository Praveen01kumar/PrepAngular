import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api-service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @ViewChild('userName') userName!: ElementRef;
  public name: string = "";
  public questionsList: any = [];
  public currentQuestions: number = 0;
  public points: number = 0;
  counter: number = 60;
  correctAnswer: any[] = [];
  inCorrectAnswer: any[] = [];
  interval$: any;
  isQuizCompleted: boolean = false;
  openquiz: boolean = false;
  correctoption: boolean = false;
  optionindex: number | null = null;
  answeredQuiz: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  startQuiz() {
    this.startCounter();
    this.name = this.userName.nativeElement.value;
    this.openquiz = true;

  }

  getAllQuestions() {
    this.apiService.getQuestions().subscribe((res: any) => {
      this.questionsList = res?.questions;
    })

  }

  nextQuestion() {
    this.currentQuestions++;
    this.resetCounter();
  }

  previousQuestion() {
    this.currentQuestions--;
    this.resetCounter();
  }

  answer(currentQno: number, option: any, index: number) {
    this.optionindex = index;
    const answered = this.answeredQuiz.find((el: any) => el?.current === currentQno);
    if (answered === undefined) {
      this.answeredQuiz.push({ ...option, current: currentQno });
    }
    if (currentQno === this.questionsList.length) {
      this.isQuizCompleted = true;
      this.correctAnswer = this.answeredQuiz.filter((el: any) => el?.correct);
      this.inCorrectAnswer = this.answeredQuiz.filter((el: any) => !el?.correct);
      this.interval$.unsubscribe();
      this.stopCounter();
    }
    if (option.correct) {
      this.correctoption = true;
      this.points += 10;
      setTimeout(() => {
        this.correctoption = false;
        this.optionindex = null;
        this.currentQuestions++;
        this.resetCounter();
        this.progress;
      }, 1000);

    } else {
      setTimeout(() => {
        this.correctoption = false;
        this.optionindex = null;
        this.currentQuestions++;
        this.points -= 10;
        this.resetCounter();
        this.progress;
      }, 1000);

    }
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      if (this.counter === 0) {
        this.currentQuestions++;
        this.counter = 60;
        this.points -= 10;
      }
      this.counter--;
    });
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestions = 0;
  }

  get progress() { return ((this.currentQuestions / this.questionsList.length) * 100); }

}
