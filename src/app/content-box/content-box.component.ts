import { Component, Input, OnInit } from '@angular/core';


class Content{
  title:string;
  content:string;
  visible:boolean;
}

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent implements OnInit {

  @Input("contentList")
  set _contentList(content){
    const contentJSON = JSON.parse(content);
    this.contentList = [];
    Object.assign(this.contentList,contentJSON); 
  }

  contentList:Content[];

  constructor() { }

  ngOnInit(): void {
  }

}
