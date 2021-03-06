import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";
import {fade} from "../animation";

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
  animations: [
    fade
  ]
})
export class GraphicsComponent implements OnInit {

  grphThumbHead = 'Graphics Design';
  grphThumbBody = 'Some of my graphics creations with PhotoShop';

  constructor(private content: ContentService) { }

  graphicsContent;
  ngOnInit(){
    this.content.getData('/homePage/index/10').subscribe((data:any)=>{
      this.graphicsContent = data;
    });
  }

}
