import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  constructor() { }

  ngOnInit(): void {
  }

}
