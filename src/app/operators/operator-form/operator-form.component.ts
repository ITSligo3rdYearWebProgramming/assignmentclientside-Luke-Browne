import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IOperator } from '../../model/operator';

@Component({
  selector: 'app-operator-form',
  templateUrl: './operator-form.component.html',
  styleUrls: ['./operator-form.component.css']
})
export class OperatorFormComponent implements OnInit {

  @Input() operator : IOperator;

  @Output() operatorFormClose = new EventEmitter<IOperator>();

  message: string = '';
  isNewOperatorForm: boolean = false;
  operatorForm: FormGroup;

  

  get name() {
    return this.operatorForm.get('name');
  }
  get opName() {
    return this.operatorForm.get('opName');
  }
  get ctu() {
    return this.operatorForm.get('ctu');
  }
  get icon() {
    return this.operatorForm.get('icon');
  }

  constructor() { }

  ngOnInit(): void {
    console.table(this.operator);
    if (this.operator == null) {
      this.operator = {name:'', opName: '', ctu: '', icon:'', id: ''};
      this.isNewOperatorForm = true;
    }

    this.operatorForm = new FormGroup({
      name: new FormControl(this.operator.name, Validators.minLength(4)),
      opName: new FormControl(this.operator.opName, [Validators.required]),
      ctu: new FormControl(this.operator.ctu,[Validators.required]),
      icon: new FormControl(this.operator.icon,[Validators.required])
    });
  }

  onSubmit() {
    this.operatorFormClose.emit(this.operatorForm.value)
  }

  closeForm(){
    this.operatorFormClose.emit(null)
  }
}
