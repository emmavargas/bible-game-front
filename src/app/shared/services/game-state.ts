import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameState {
  
  showResultInfo = signal<boolean>(false);
  showHintInfo = signal<boolean>(false);
  difficulty = signal<string>('EASY');
  score = signal<number>(0);
  currentQuestionIndex = signal<number>(1);
  totalQuestions = signal<number>(10);
  correctAnswersCount = signal<number>(0);
  incorrectAnswersCount = signal<number>(0);
  isQuizCompleted = signal<boolean>(false);
  lives = signal<number>(3);
  nameUser = signal<string>('');
  isLogin = signal<boolean>(false);
  question = signal<string>('');
  bibleVerseAnswer = signal<string>('');
  bibleVersionL = signal<string>('');
  hint = signal<string>('');
  answerLength = signal<number>(0);
  idSession = signal<number>(0);
  isCorrect = signal<boolean>(false);
  correctAnswer = signal<string>('');

  

  setDifficulty(newDifficulty: string) {
    this.difficulty.set(newDifficulty);
  }
  getDifficulty() {
    return this.difficulty();
  }
  setScore(newScore: number) {
    this.score.set(newScore);
  }
  getScore() {
    return this.score();
  }
  setCurrentQuestionIndex(index: number) {
    this.currentQuestionIndex.set(index);
  }
  getCurrentQuestionIndex() {
    return this.currentQuestionIndex();
  }
  setTotalQuestions(total: number) {
    this.totalQuestions.set(total);
  }
  getTotalQuestions() {
    return this.totalQuestions();
  }
  setIsQuizCompleted(completed: boolean) {
    this.isQuizCompleted.set(completed);
  }
  getIsQuizCompleted() {
    return this.isQuizCompleted();
  }
  setLives(lives: number) {
    this.lives.set(lives);
  }
  getLives() {
    return this.lives();
  }
  setNameUser(name: string) {
    this.nameUser.set(name);
  }
  getNameUser() {
    return this.nameUser();
  }

  setQuestion(question: string) {
    this.question.set(question);
  }
  getQuestion() {
    return this.question();
  } 
  setHint(hint: string) {
    this.hint.set(hint);
  }
  getHint() {
    return this.hint();
  }
  setAnswerLength(length: number) {
    this.answerLength.set(length);
  }
  getAnswerLength() {
    return this.answerLength();
  }
  setIdSession(id: number) {
    this.idSession.set(id);
  }
  getIdSession() {
    return this.idSession();
  }
  getCorrectAnswersCount() {
    return this.correctAnswersCount();
  }
  setCorrectAnswersCount(count: number) {
    this.correctAnswersCount.set(count);
  }
  getIncorrectAnswersCount() {
    return this.incorrectAnswersCount();
  }
  setIncorrectAnswersCount(count: number) {
    this.incorrectAnswersCount.set(count);
  }
  setIsCorrect(isCorrect: boolean) {
    this.isCorrect.set(isCorrect);
  }
  getIsCorrect() {
    return this.isCorrect();
  }
  setCorrectAnswer(answer: string) {
    this.correctAnswer.set(answer);
  }
  getCorrectAnswer() {
    return this.correctAnswer();
  }
  getShowResultInfo() {
    return this.showResultInfo();
  }
  setShowResultInfo(show: boolean) {
    this.showResultInfo.set(show);
  }
  getShowHintInfo() {
    return this.showHintInfo();
  }
  setShowHintInfo(show: boolean) {
    this.showHintInfo.set(show);
  }
  getBibleVerseAnswer() {
    return this.bibleVerseAnswer();
  }
  setBibleVerseAnswer(answer: string) {
    this.bibleVerseAnswer.set(answer);
  }
  getBibleVersionL() {
    return this.bibleVersionL();
  }
  setBibleVersionL(version: string) {
    this.bibleVersionL.set(version);
  }
}
