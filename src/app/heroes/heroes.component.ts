import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';  //导入类Hero,从hero.ts文件中
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',   //selector- 组件的CSS元素选择器
  templateUrl: './heroes.component.html', //templateUrl- 组件模板文件的位置
  styleUrls: ['./heroes.component.css']  //styleUrls- 组件的私有CSS样式的位置
})
export class HeroesComponent implements OnInit {
  
  hero: Hero={
    id:1,
    name:'Windstorm'     //注意类中规定的属性
  };


  
  heroes = HEROES;
  selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
