import { Component, OnInit, Input } from '@angular/core';
import { IOperator } from '../../model/operator';

@Component({
  selector: 'app-operator-row',
  templateUrl: './operator-row.component.html',
  styleUrls: ['./operator-row.component.css']
})
export class OperatorRowComponent implements OnInit {

  @Input() operator: IOperator;

  constructor() { }

  ngOnInit(): void {
  }

}
