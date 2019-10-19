import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OrdersData } from './orders.models';

@Component({
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})

export class AllOrdersComponent implements OnInit {

    public data: OrdersData[] = [];
    constructor(public http: HttpClient) {}
    public BASE_URL = 'http://localhost:3000';
    ngOnInit() {
        this.http.get('http://localhost:3000/order/getall').subscribe((res: OrdersData[]) => {
            // console.log(res);
            this.data = res;
        });
        // console.log(this.data);wh
    }
    deleteorder(offerId: string) {
        console.log(offerId);
        const url = 'http://localhost:3000/order/delete/' + offerId;
        this.http.post(url, offerId).subscribe(() => {
            console.log('deleted');
        });
    }
}
