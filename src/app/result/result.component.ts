import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';;

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  @Input() value: number;
  @Input() paramName :string;
  @Input() upFlg :boolean;

  ngOnInit(): void {

  }



}
