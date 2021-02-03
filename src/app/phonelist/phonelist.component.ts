import { SortPipe } from './../sort.pipe';
import { PhoneService } from './../phone.service';
import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css']
})
export class PhonelistComponent implements OnInit {

    public phones = [];
    searchValue: string;
    sortBy:string = ''; 


  constructor(private phoneService: PhoneService,
    private orderPipe: OrderPipe) { }

  ngOnInit(): void {
    this.phoneService.getPhones()
    .subscribe(data => this.phones = data);
  }
  onSelectedSort(event: any) {
    this.sortBy = event.target.value;
  }

}
