import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() characters;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  onSideAssigned(charInfo) {
    this.sideAssigned.emit(charInfo);
  }

}
