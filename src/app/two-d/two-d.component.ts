import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";
import {fade} from "../animation";

@Component({
  selector: 'app-two-d',
  templateUrl: './two-d.component.html',
  styleUrls: ['../../app/three-d/three-d.component.css'],
  animations: [
    fade
  ]
})
export class TwoDComponent implements OnInit {

  pageOf2DHead = 'WebGL | 2D API';
  pageOf2DBody =
    'WebGL (Web Graphics Library) is a JavaScript API for rendering ' +
    'interactive 2D and 3D graphics within any compatible web browser ' +
    'without the use of plug-ins.';

  constructor(private content: ContentService) { }

  twoDContent;
  ngOnInit(){
    this.content.getData('/homePage/index/6').subscribe((data:any)=>{
      this.twoDContent = data;
    });
  }
}
