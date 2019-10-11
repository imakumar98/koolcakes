import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-offerspage',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.css']
})

export class OffersPageComponent {
    constructor(public http: HttpClient) {}
    OffersUpdate() {

    }

    OffersDelete() {

    }

    // OffersRegister() {
    //     this.http.get('http://localhost:3000/api/user/offersregister').subscribe(() => {
    //         // console.log('news runing');
    //       }, error => {
    //         console.log(error);
    //       });
    // }

}
