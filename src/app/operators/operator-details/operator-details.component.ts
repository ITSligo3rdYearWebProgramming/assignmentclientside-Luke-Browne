import { Component, OnInit, Input } from '@angular/core';
import { IOperator } from '../../model/operator';

@Component({
  selector: 'app-operator-details',
  templateUrl: './operator-details.component.html',
  styleUrls: ['./operator-details.component.css']
})
export class OperatorDetailsComponent implements OnInit {

  @Input() operator : IOperator

  constructor() { }

  ngOnInit(): void {
  }

}
