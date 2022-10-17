import { SelectorMatcher } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(form : any){
    this.search.emit(form.value.name)
  }
}
