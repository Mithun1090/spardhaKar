import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizjsonArray = quizjsonArray;
  constructor() { }

  ngOnInit(): void {
  }

}
const quizjsonArray = [{
  'date': '17-10-2019',
  'desc': "General Mental Ability"
}, {
  'date': '18-10-2019',
  'desc': "General Mental Ability"
}, {
  'date': '19-10-2019',
  'desc': "General Knowledge"
}, {
  'date': '20&21-10-2019',
  'desc': "Indian History"
}, {
  'date': '22-10-2019',
  'desc': "General Mental Ability (Clock)"
}, {
  'date': '23-10-2019',
  'desc': "Geography"
}, {
  'date': '24-10-2019',
  'desc': "Computer Literacy (Basic)"
}, {
  'date': '25-10-2019',
  'desc': "General Science"
}, {
  'date': '26-10-2019',
  'desc': "Indian Constitution"
}, {
  'date': '27-10-2019',
  'desc': "General Kannada"
}, {
  'date': '28-10-2019',
  'desc': "Current Affairs"
}, {
  'date': '29-10-2019',
  'desc': "General Kannada"
}, {
  'date': '30-10-2019',
  'desc': "General mental ability(Average)"
}, {
  'date': '31-10-2019',
  'desc': "General Maths (Average)"
}, {
  'date': '1-11-2019',
  'desc': "General English"
}, {
  'date': '2-11-2019',
  'desc': "General History"
}, {
  'date': '3-11-2019',
  'desc': "General Knowledge"
}, {
  'date': '4-11-2019',
  'desc': "General mental ability"
}, {
  'date': '5-11-2019',
  'desc': "Computer knowledge"
}, {
  'date': '6-11-2019',
  'desc': "15-11-2019 General kannada"
}, {
  'date': '7-11-2019',
  'desc': "Geography"
}, {
  'date': '8-11-2019',
  'desc': "General History"
}, {
  'date': '9-11-2019',
  'desc': "General Science"
}, {
  'date': '11-11-2019',
  'desc': "General Economic"
}, {
  'date': '11-11-2019',
  'desc': "General Mental Ability"
}, {
  'date': '12-11-2019',
  'desc': "General Mental Ability"
}, {
  'date': '13-11-2019',
  'desc': "General Knowledge"
}, {
  'date': '14-11-2019',
  'desc': "General Knowledge"
}, {
  'date': '15-11-2019',
  'desc': "General Hisory"
}, {
  'date': '16-11-2019',
  'desc': "Geography 24-11-2019"
}, {
  'date': '17-11-2019',
  'desc': "General kannada"
}, {
  'date': '18-11-2019',
  'desc': "General economics"
}, {
  'date': '19-11-2019',
  'desc': "General scinence"
}, {
  'date': '20-11-2019',
  'desc': "General Mental Ability"
}, {
  'date': '21-11-2019',
  'desc': "General science"
}, {
  'date': '22-11-2019',
  'desc': "General History"
}, {
  'date': '23-11-2019',
  'desc': "General kannada"
}, {
  'date': '24-11-2019',
  'desc': "Computer Literacy (Basic)"
}, {
  'date': '25-11-2019',
  'desc': "Geography"
}, {
  'date': '26-11-2019',
  'desc': "General History"
}, {
  'date': '27-11-2019',
  'desc': "General Mental Ability"
}, {
  'date': '28-11-2019',
  'desc': "Indian Constitution"
}, {
  'date': '29-11-2019',
  'desc': "General Knowledge 8-12-2019"
}, {
  'date': '30-11-2019',
  'desc': "General Science"
}, {
  'date': '1-12-2019',
  'desc': "Indian Constitution"
}, {
  'date': '2-12-2019',
  'desc': "General Economic"
}, {
  'date': '3-12-2019',
  'desc': "General knowledge"
}, {
  'date': '4-12-2019',
  'desc': "Mental Ability"
}, {
  'date': '5-12-2019',
  'desc': "General kannada"
}, {
  'date': '6-12-2019',
  'desc': "PDO 15-12-2019"
}, {
  'date': '7-12-2019',
  'desc': "General Knowledge"
}, {
  'date': '8-12-2019',
  'desc': "Computer Literacy (Basic)"
}, {
  'date': '9-12-2019',
  'desc': "General History"
}, {
  'date': '12-12-2019',
  'desc': "General Economics"
}, {
  'date': '12-12-2019',
  'desc': "Geography"
}, {
  'date': '12-12-2019',
  'desc': "General Kannada"
}, {
  'date': '13-12-2019',
  'desc': "General Economic 22-12-2019"
}, {
  'date': '14-12-2019',
  'desc': "	General Kannada"
}, {
  'date': '15-12-2019',
  'desc': "Computer Awareness"
}, {
  'date': '16-12-2019',
  'desc': "General Knowledge"
}, {
  'date': '17-12-2019',
  'desc': "Mental Ability"
}, {
  'date': '18-12-2019',
  'desc': "General History"
}, {
  'date': '19-12-2019',
  'desc': "General Science"
}, {
  'date': '20-12-2019',
  'desc': "General Kannada (29-12-19)"
}, {
  'date': '21-12-2019',
  'desc': "Computer Literacy (Basic)"
}, {
  'date': '22-12-2019',
  'desc': "Geography"
}, {
  'date': '23-12-2019',
  'desc': "General Knowledge"
}, {
  'date': '24-12-2019',
  'desc': "Indian Constitution"
}, {
  'date': '25-12-2019',
  'desc': "Mental Ability"
}, {
  'date': '26-12-2019',
  'desc': "Basic Computer"
}, {
  'date': '27-12-2019',
  'desc': "General Kannada 05-01-2020"
}, {
  'date': '28-12-2019',
  'desc': "General History"
}, {
  'date': '29-12-2019',
  'desc': "General Science"
}, {
  'date': '30-12-2019',
  'desc': "Indian Constitution"
}, {
  'date': '31-12-2019',
  'desc': "General Knowledge"
}, {
  'date': '1-11-2019',
  'desc': "Geography"
}, {
  'date': '2-11-2019',
  'desc': "Science"
}, {
  'date': '3-11-2019',
  'desc': "Computer knowledge 12-01-2020"
}, {
  'date': '4-11-2019',
  'desc': "History"
}, {
  'date': '5-11-2019',
  'desc': "Indian Constitution"
}, {
  'date': '6-11-2019',
  'desc': "General Kannada(15-01-2020)"
}, {
  'date': '7-11-2019',
  'desc': "Mental Ability"
}, {
  'date': '8-11-2019',
  'desc': "General Knowledge"
}, {
  'date': '9-11-2019',
  'desc': "Geography"
}, {
  'date': '11-11-2019',
  'desc': "General Knowledge (19-01-2020)"
}, {
  'date': '11-11-2019',
  'desc': "History"
}, {
  'date': '12-11-2019',
  'desc': "Science"
}, {
  'date': '13-11-2019',
  'desc': "Indian Constitution"
}, {
  'date': '14-11-2019',
  'desc': "General Knowledge"
}, {
  'date': '15-11-2019',
  'desc': "General Kannada"
}, {
  'date': '16-11-2019',
  'desc': "Computer"
}, {
  'date': '17-11-2019',
  'desc': "General Kannada (26-01-2020)"
}, {
  'date': '18-11-2019',
  'desc': "General Knowledge "
}, {
  'date': '19-11-2019',
  'desc': "	General Science"
}, {
  'date': '20-11-2019',
  'desc': "History"
}, {
  'date': '21-11-2019',
  'desc': "Geography"
}, {
  'date': '22-11-2019',
  'desc': "Indian Constitution"
}, {
  'date': '23-11-2019',
  'desc': "General Knowledge"
}, {
  'date': '24-11-2019',
  'desc': "Science (2-02-2020)"
}, {
  'date': '25-11-2019',
  'desc': "Computer"
}, {
  'date': '26-11-2019',
  'desc': "History"
}, {
  'date': '27-11-2019',
  'desc': "Mental Ability"
}, {
  'date': '28-11-2019',
  'desc': "Geography"
}, {
  'date': '29-11-2019',
  'desc': "General Kannada"
}, {
  'date': '30-11-2019',
  'desc': "General Science"
}, {
  'date': '1-01-2020',
  'desc': "Computer"
}, {
  'date': '2-01-2020',
  'desc': "Economic"
}, {
  'date': '3-01-2020',
  'desc': "History [10-02-2020]"
}, {
  'date': '4-01-2020',
  'desc': "General Mental Ability"
}, {
  'date': '5-01-2020',
  'desc': "Computer knowledge"
}, {
  'date': '6-01-2020',
  'desc': "General kannada"
}, {
  'date': '7-01-2020',
  'desc': "General Knowledge"
}, {
  'date': '8-01-2020',
  'desc': "Geography (16-02-2020)"
}, {
  'date': '9-01-2020',
  'desc': "General Science"
}, {
  'date': '12-01-2020',
  'desc': "Indian Constitution"
}, {
  'date': '12-01-2020',
  'desc': "General Knowledge"
}, {
  'date': '12-01-2020',
  'desc': "General Mental Ability"
}, {
  'date': '13-01-2020',
  'desc': "Economic"
}, {
  'date': '14-01-2020',
  'desc': "General Science"
}, {
  'date': '15-01-2020',
  'desc': "Basic Computer (23-02-2020)"
}, {
  'date': '16-01-2020',
  'desc': "General Kannada"
}, {
  'date': '17-01-2020',
  'desc': "General Kannada"
}, {
  'date': '18-01-2020',
  'desc': "General History (26-02-2020)"
}, {
  'date': '19-01-2020',
  'desc': "Geography"
}, {
  'date': '20-01-2020',
  'desc': "General Knowledge"
}, {
  'date': '21-01-2020',
  'desc': "General Knowledge"
}, {
  'date': '22-01-2020',
  'desc': "Geography (1-03-2020)"
}, {
  'date': '23-01-2020',
  'desc': "General Knowledge"
}, {
  'date': '24-01-2020',
  'desc': "Science"
}, {
  'date': '25-01-2020',
  'desc': "Computer"
}, {
  'date': '26-01-2020',
  'desc': "Economic"
}, {
  'date': '27-01-2020',
  'desc': "General Science"
}, {
  'date': '28-01-2020',
  'desc': "History"
}, {
  'date': '29-01-2020',
  'desc': "General Knowledge 8-3-2020"
}, {
  'date': '30-01-2020',
  'desc': "General Kannada"
}, {
  'date': '31-01-2020',
  'desc': "General Science"
}, {
  'date': '1-02-2020',
  'desc': "General Knowledge"
}, {
  'date': '2-02-2020',
  'desc': "Geography"
}, {
  'date': '3-02-2020',
  'desc': "Geography"
}, {
  'date': '4-02-2020',
  'desc': "General Kannada"
}, {
  'date': '5-02-2020',
  'desc': "General Science (15-03-2020)"
}, {
  'date': '6-02-2020',
  'desc': "General Kannada"
}, {
  'date': '7-02-2020',
  'desc': "General Computer"
}, {
  'date': '8-02-2020',
  'desc': "General Knowledge"
}, {
  'date': '9-02-2020',
  'desc': "Indian Constitution"
}, {
  'date': '12-02-2020',
  'desc': "Geography"
}, {
  'date': '12-02-2020',
  'desc': "General Kannada"
}, {
  'date': '12-02-2020',
  'desc': "Geography 22-03-2020"
}, {
  'date': '13-02-2020',
  'desc': "Indian Constitution"
}];