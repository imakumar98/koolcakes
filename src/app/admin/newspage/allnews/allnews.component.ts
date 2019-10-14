import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NewsData } from '../news.models';

@Component({
    templateUrl: './allnews.component.html',
    styleUrls: ['./allnews.component.css']
})

export class AllNewsComponent implements OnInit {

    public data: NewsData[] = [];
    public BASE_URL = 'http://localhost:3000';
    constructor(public http: HttpClient) {}
    ngOnInit() {
        this.http.get('http://localhost:3000/news/getall').subscribe((res: NewsData[]) => {
            // console.log(res);
            this.data = res;
        });
        // console.log(this.data);
    }

    linkImg(fileName) {
        // base_URL returns localhost:3000 or the production URL
            return `${this.BASE_URL}/Images/news/${fileName}`;
          }

    updateoffer(offerId: string) {
        this.http.post('http://localhost:3000/news/update/:id', offerId).subscribe(() => {
            console.log('deleted');
        });
    }
    deleteoffer(offerId: string) {
        this.http.post('http://localhost:3000/newss/delete/:id', offerId).subscribe(() => {
            console.log('deleted');
        });
    }

}
