export class Character {
  id: number;
  name: string;
  lv:number;
  parameter:Parameter[];
  constructor()
  {
    this.lv=1;
    this.name='nanashi'
    this.id=1;
  }

}

export class Parameter {
  paramName:string;
  value: number;
  growth: number;
  upValue:number;
  classChangeBonus:number;
  maxValue:number;
  upFlg:boolean;

  constructor(name : string , sta:number , gro:number)
  {
    this.paramName = name;
    this.value = sta;
    this.growth = gro;
    this.upValue = 0;
    this.maxValue = 30;
    this.classChangeBonus = 0;
    this.upFlg = false;
  }

}




const paramName = ["hp","atk","def","crt","spd","mdf","luc"];
export const PARAMETER: Parameter[] = [
   new Parameter(paramName[0], 0, 0),
   new Parameter(paramName[1], 0, 0),
   new Parameter(paramName[2], 0, 0),
   new Parameter(paramName[3], 0, 0),
   new Parameter(paramName[4], 0, 0),
   new Parameter(paramName[5], 0, 0),
   new Parameter(paramName[6], 0, 0),

]




