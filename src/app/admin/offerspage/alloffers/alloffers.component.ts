import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OffersData } from '../offers.models';

@Component({
    templateUrl: './alloffers.component.html',
    styleUrls: ['./alloffers.component.css']
})

export class AllOffersComponent implements OnInit {

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
    updateoffer(offerId: string) {
        const url = 'http://localhost:3000/offers/update/' + offerId;
        this.http.post(url, offerId).subscribe(() => {
            console.log('deleted');
        });
    }
    deleteoffer(offerId: string) {
        const url = 'http://localhost:3000/offers/delete/' + offerId;
        this.http.post(url, offerId).subscribe(() => {
            console.log('deleted');
        });
    }

}
