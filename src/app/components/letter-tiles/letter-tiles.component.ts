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
    this.letters = Array.from({ length: 26 }, (_, i) =>
      String.fromCharCode('A'.charCodeAt(0) + i)
    );
  }
}
