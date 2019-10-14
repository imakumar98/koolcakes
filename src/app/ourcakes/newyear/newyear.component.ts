import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CakesData } from '../ourcakes.model';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  templateUrl: './newyear.component.html',
  styleUrls: ['./newyear.component.css']
})

export class NewYearComponent implements OnInit {
  public data: CakesData[] = [];
  constructor(public http: HttpClient) {}
    public BASE_URL = 'http://localhost:3000';

    ngOnInit() {
      const params1 = new HttpParams();
      params1.set('category', 'ourcakes');
      params1.set('subcategory', 'baby_shower');
      const x = { category: 'ourcakes' , subcategory: 'baby_shower' };

      // const category = 'ourcakes'
      this.http.get('http://localhost:3000/cakes/getcakebycategory' , { params: x }).subscribe((res: CakesData[]) => {
           console.log(res);
           this.data = res;
      });
      // console.log(this.data);
  }
  linkImg(fileName) {
    // base_URL returns localhost:3000 or the production URL
        return `${this.BASE_URL}/Images/cakes/${fileName}`;
      }

}
