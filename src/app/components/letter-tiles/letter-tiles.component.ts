import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-letter-tiles',
  templateUrl: './letter-tiles.component.html',
  styleUrls: ['./letter-tiles.component.scss'],
})
export class LetterTilesComponent implements OnInit {
  form: FormGroup;
  letters: string[];

  constructor() {}

  ngOnInit(): void {
    this.letters = [
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
  }
}
