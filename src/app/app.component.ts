import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hangmanJS';
  wordToGuess: string;
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

  ngOnInit(): void {
    this.generateRandomWord();
  }

  guessLetter(letter: any) {
    console.log(letter);
  }

  generateRandomWord() {
    var randomWords = require('random-words');
    this.wordToGuess = randomWords();
    console.log(this.wordToGuess);
  }
}
