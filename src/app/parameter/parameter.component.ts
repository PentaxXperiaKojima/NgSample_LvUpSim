import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';;
import{Parameter} from '../character'

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  constructor() { }

  @Input() status: number;
  @Input() growth: number;
  @Input() paramName :string;
  @Output() event = new EventEmitter<Parameter>();


  ngOnInit(): void {

  }

  //値変更時、親に通知
  paramChange(sta :number , gro:number, name:string)
  {
    var par:Parameter = new Parameter(name,sta,gro);
    this.event.emit(par);
  }
}
