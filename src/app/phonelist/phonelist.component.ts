import { PhoneService } from './../phone.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css']
})
export class PhonelistComponent implements OnInit {

  public phones = [];

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.phoneService.getPhones()
    .subscribe(data => this.phones = data);
  }

}
