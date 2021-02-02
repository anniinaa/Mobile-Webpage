import { PhoneService } from './../phone.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  sub: any;
  phoneId: String;
  phoneDetails: any;
  phoneImages: any[];

  constructor(private phoneService: PhoneService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //take phoneId parameter from URL and assign it to a phoneId
    this.sub = this.route.params.subscribe(params => {
      this.phoneId = params['id'];
      console.log(this.phoneId);

      this.phoneDetails = this.phoneService.getPhone(this.phoneId).subscribe(data => {
        this.phoneDetails = data;
        //get phone images
        this.phoneImages = data.images;

        console.log(this.phoneImages);
      });
    });

  }

}
