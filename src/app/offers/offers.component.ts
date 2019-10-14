import { Component, OnInit } from '@angular/core';
import { OffersData } from '../admin/offerspage/offers.models';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  public data: OffersData[] = [];
  constructor(public http: HttpClient) {}
  public BASE_URL = 'http://localhost:3000';
  ngOnInit() {
      this.http.get('http://localhost:3000/offers/getalloffers').subscribe((res: OffersData[]) => {
          // console.log(res);
          this.data = res;
      });
      // console.log(this.data);
  }

  linkImg(fileName) {
      // base_URL returns localhost:3000 or the production URL
          return `${this.BASE_URL}/Images/offers/${fileName}`;
        }
}
