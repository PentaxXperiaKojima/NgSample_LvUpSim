import {
  Component,
  OnInit,
} from '@angular/core';
import { Character, Parameter, PARAMETER } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css'],
})
export class SimulationComponent implements OnInit {
  constructor(private charServe: CharacterService) {}

  //パラメーター
  public characterStatus = new Array<Parameter>();
  public unit = new Character();
  RANDOM_MAX: number = 101;

  //初期化
  ngOnInit(): void {
    this.charServe.getParameter().subscribe((m) => (this.characterStatus = m));
    this.unit.parameter = this.characterStatus;
  }

  //Lvup処理
  lvUp() {
    if (this.unit.lv < 20) {
      this.unit.lv++;
      this.characterStatus.forEach((e) => {
        var random = Math.floor(Math.random() * this.RANDOM_MAX);
        e.upFlg = false;
        if (e.growth > random && e.value + e.upValue < e.maxValue) {
          e.upValue++;
          e.upFlg = true;
        }
      });
    } else {
      alert('Level is the upper limit');
    }
  }

  //リセット
  reset() {
    this.unit.lv = 1;
    this.unit.parameter.forEach((e) => {
      e.upValue = 0;
    });
  }

  //クラスボーナス付与
  classChange() {
    this.unit.parameter.forEach((e) => {
      e.upValue = Number(e.upValue) + Number(e.classChangeBonus);
    });
  }

  //子コンポーネント受け取り処理
  onReceiveEventFromChild(eventData: Parameter) {
    this.unit.parameter.forEach((e) => {
      if (e.paramName === eventData.paramName) {
        e.value = eventData.value;
        e.growth = eventData.growth;
      }
    });
  }
}
