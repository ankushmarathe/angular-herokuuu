import { Component, OnInit } from '@angular/core';
import { Category } from './model/category.model';
import { AppserService } from 'src/app/service/appser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'deployangular';
  
  cats:Category[];
  clickkk:boolean;

  constructor(private apser: AppserService){}


  ngOnInit(): void {
    this.cats=[];
    this.clickkk=false;
  }

  onclickk(){
    this.cats=[];
    this.clickkk=true;

    this.apser.getcat().subscribe(data=>{
      console.log(data[0].id+" "+data[0].name+" "+"data");
      this.cats=data;
    });

  }

}
