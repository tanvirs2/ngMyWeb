import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";
import {fade} from "../animation";

@Component({
  selector: 'app-three-dwashing-machine',
  templateUrl: './three-dwashing-machine.component.html',
  styleUrls: ['./three-dwashing-machine.component.css'],
  animations: [
    fade
  ]
})
export class ThreeDwashingMachineComponent implements OnInit {

  threeDImgHead = 'threeJS | WebGL';
  threeDImgBody = 'Build this system with WebGL 3D-Api on the WEB';

  constructor(private content: ContentService) { }

  washingContent;
  ngOnInit(){
    this.content.getData('/homePage/index/4').subscribe((data:any)=>{
      this.washingContent = data;
    });
  }

}
