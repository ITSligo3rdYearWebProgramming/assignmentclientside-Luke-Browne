import { Component, OnInit } from '@angular/core';
import { IOperator } from '../../model/operator';
import { OperatorService } from '../../operator.service';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.css']
})
export class OperatorListComponent implements OnInit {

  operatorList: IOperator[];
  message: string;

  currentOperator: IOperator;

  constructor(private operatorService: OperatorService) { }

  ngOnInit(): void {

    this.operatorService.getOperators().subscribe({
      next: (value: IOperator[] )=> this.operatorList = value,
      complete: () => console.log('operator service finished'),
      error: (mess) => this.message = mess
    })

  }

}
