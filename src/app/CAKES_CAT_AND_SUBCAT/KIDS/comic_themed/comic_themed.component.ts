import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CakesData } from 'src/app/CAKES_CAT_AND_SUBCAT/OUR_CAKES/ourcakes.model';

@Component({
  templateUrl: './comic_themed.component.html',
  styleUrls: ['./comic_themed.component.css']
})

export class ComicThemedcakesComponent implements OnInit {
  public data: CakesData[] = [];
  constructor(public http: HttpClient) {}
    public BASE_URL = 'http://localhost:3000';

    ngOnInit() {
    //   const params1 = new HttpParams();
    //   params1.set('category', 'ourcakes');
    //   params1.set('subcategory', 'baby_shower');
      const x = { category: 'kids' , subcategory: 'comic_themed' };

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
