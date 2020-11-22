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
  showOperatorForm: boolean = false;

  currentOperator: IOperator;

  constructor(private operatorService: OperatorService) { }

  ngOnInit(): void {

    this.operatorService.getOperators().subscribe({
      next: (value: IOperator[]) => this.operatorList = value,
      complete: () => console.log('operator service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked(operator: IOperator): void {
    this.currentOperator = operator;
  }
  openAddOperator(): void {
    this.currentOperator = null;
    this.showOperatorForm = true;
  }

  openEditOperator(): void {
    this.currentOperator = null;
    this.showOperatorForm = true;
  }

  operatorFormClose(operator: IOperator): void{
    this.showOperatorForm = null;
    console.table(operator);
    if (operator == null){
      this.currentOperator = null;
    }
    else if (this.currentOperator == null){
      this.addNewOperator(operator);
    }
    else {
      console.log('need to update operator with id ' + this.currentOperator.id);
      this.updateOperator(this.currentOperator.id, operator)
    }
  }
  
updateOperator (id: string, operator: IOperator){
  this.operatorService.updateOperator(id, operator)
  .subscribe({
    next: operator => this.message = "operator has been modified",
    error: (err) => this.message = err
  });

// so the updated list appears

    this.operatorService.getOperators().subscribe({
      next: (value: IOperator[]) => this.operatorList = value,
      complete: () => console.log('operator service finished'),
      error: (mess) => this.message = mess
    })
    window.location.reload();
}

  addNewOperator(newOperator: IOperator): void {
    console.log('adding new operator ' + JSON.stringify(newOperator));
    this.operatorService.addOperator({ name: '', ...newOperator })
      .subscribe({
        next: operator => {
          console.log(JSON.stringify(operator) + ' has been added');
        this.message = "new operator has been added";},
        error: (err) => this.message = err
      });
      this.showOperatorForm = false;

      this.operatorService.getOperators().subscribe({
        next: (value: IOperator[] ) => this.operatorList = value,
        complete: () => console.log('operator service finished'),
        error: (mess) => this.message = mess
      })
      window.location.reload();
  }

  deleteOperator(id: string){
    this.operatorService.deleteOperator(id)
    .subscribe({
      next: operator => this.message = "operator has been deleted",
      error: (err) => this.message = err
    });

    this.operatorService.getOperators().subscribe({
      next: (value: IOperator[]) => this.operatorList = value,
      complete: () => console.log('operator service finished'),
      error: (mess) => this.message = mess
    })
    window.location.reload();
    this.currentOperator = null;
  }

  isSelected(operator: IOperator): boolean{
    if (!operator || !this.currentOperator) {
      return false;
    }
    else {
      return operator.id === this.currentOperator.id;
    }
  }
}