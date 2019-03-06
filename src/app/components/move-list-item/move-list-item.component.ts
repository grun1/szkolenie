import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-move-list-item',
  templateUrl: './move-list-item.component.html',
  styleUrls: ['./move-list-item.component.css']
})
export class MoveListItemComponent implements OnInit {

  @Input() movie =  null;

  constructor() { }

  ngOnInit() {
  }

}
