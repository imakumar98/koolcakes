import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { OffersData } from '../offers.models';

@Component({
    templateUrl: './alloffers.component.html',
    styleUrls: ['./alloffers.component.css']
})

export class AllOffersComponent implements OnInit {

    // public data: OffersData[] = [];
    // constructor(public http: HttpClient) {}
    ngOnInit() {
        // this.http.get<OffersData[]>('http://localhost:3000/getalloffers')
        //          .map((res: any) => res.Record.map(r => this.data));
    }

}
