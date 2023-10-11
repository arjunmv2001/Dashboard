import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  @Output() toggle = new EventEmitter //user defined event

  menuIconClicked(){
    this.toggle.emit() // The value to emit and send to parent
  }

}
