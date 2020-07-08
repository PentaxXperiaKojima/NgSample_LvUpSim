import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';;
import { FormsModule }   from '@angular/forms';
import { CharacterService} from '../character.service'
import { Character, Parameter, PARAMETER } from '../character';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  constructor(private charServe : CharacterService) { }
  @Input() bonus: number;
  @Input() max: number;
  @Input() paramName :string;

  options:Parameter[];


  ngOnInit(): void {
    this.charServe.getParameter().subscribe(m => this.options = m);
  }

}
