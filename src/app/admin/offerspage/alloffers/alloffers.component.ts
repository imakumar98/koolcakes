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
    ngOnInit() {
        this.http.get('http://localhost:3000/offers/getalloffers').subscribe((res: OffersData[]) => {
            // console.log(res);
            this.data = res;
        });
        // console.log(this.data);
    }
    updateoffer(offerId: string) {
        this.http.post('http://localhost:3000/offers/update/:id', offerId).subscribe(() => {
            console.log('deleted');
        });
    }
    deleteoffer(offerId: string) {
        this.http.post('http://localhost:3000/offers/delete/:id', offerId).subscribe(() => {
            console.log('deleted');
        });
    }

}
