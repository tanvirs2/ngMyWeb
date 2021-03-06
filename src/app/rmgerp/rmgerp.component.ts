import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";
import {fade} from "../animation";

@Component({
  selector: 'app-rmgerp',
  templateUrl: './rmgerp.component.html',
  styleUrls: ['./rmgerp.component.css'],
  animations: [
    fade
  ]
})
export class RmgerpComponent implements OnInit {

  erpImgHead = 'RMG-ERP';
  erpImgBody = 'System Screenshots of the RMG ERP Application\'s inside';

  constructor(private content: ContentService) { }

  rmgContent;
  ngOnInit(){
    this.content.getData('/homePage/index/2').subscribe((data:any)=>{
      this.rmgContent = data;
    });
  }

}
