import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string = "Label";
  @Input() type: string;
  @Input() placeholder: string = 'Placeholder';
  @Input() disabled: boolean = false;
  @Input() helperText: boolean = false;
  @Input() helperTextText: string = 'Some interesting text';
  @Input() iconPosition: string;
  @Input() iconName: string;
  @Input() rows: number;

  constructor() { }

  ngOnInit(): void {
  }

}
