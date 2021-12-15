import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hangmanJS';
  letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  wordToGuess: string;
  wordToGuessArr: string[];
  answerArr: string[];
  answer: string;
  maxGuess: number;
  numGuess: number;
  lettersLeft: number;
  success: boolean;
  newGame: boolean;
  lastGuess: string;
  clicked: boolean;
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.generateRandomWord();
    this.answerArr = [];
    for (let i = 0; i < this.wordToGuess.length; i++) {
      this.answerArr.push('___');
    }
    this.maxGuess = 6;
    this.numGuess = 0;
    this.lettersLeft = this.wordToGuess.length;
    this.newGame = true;
    this.clicked = false;
  }

  guessLetter(letter: string) {
    this.newGame = false;
    this.lastGuess = letter;
    document.getElementById(letter)?.setAttribute('disabled', 'disabled');
    if (this.wordToGuessArr.includes(letter)) {
      this.displayLetter(letter);
      this.success = true;
      console.log(this.answerArr);
    } else {
      this.success = false;
      this.numGuess++;
    }
    this.continueGame();
  }

  continueGame() {
    if (this.lettersLeft == 0) {
      alert('You win!');
      window.location.reload();
    } else if (this.numGuess == this.maxGuess) {
      alert('Game over!');
      window.location.reload();
    }
  }

  generateRandomWord() {
    var randomWords = require('random-words');
    this.wordToGuess = randomWords();
    this.wordToGuessArr = this.wordToGuess.split('');
    console.log(this.wordToGuess);
  }

  displayLetter(letter: string) {
    for (let i = 0; i < this.wordToGuess.length; i++) {
      if (this.wordToGuess[i] == letter) {
        this.answerArr.splice(i, 1, letter);
        this.lettersLeft--;
      }
    }
  }
}
