import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-offersreg',
    templateUrl: './cakereg.component.html',
    styleUrls: ['./cakereg.component.css']
})

export class CakesregComponent implements OnInit {

    constructor(public http: HttpClient, public router: Router) {}
    selectedFile: File = null;
    ngOnInit() {}

    selectedImage(event) {
      // console.log(event);
      if (event.target.files.length > 0) {
         this.selectedFile = event.target.files[0] as File;

        }
    }


    Cakesreg(form: NgForm) {
      const cakedata = new FormData();
      cakedata.append('Category', form.value.category);
      cakedata.append('SubCategory', form.value.subcategory);
      // cakedata.append('Text', form.value.text);
      cakedata.append('Shape', form.value.shape);
      cakedata.append('Name', form.value.name );
      cakedata.append('Price', form.value.price );
      cakedata.append('image', this.selectedFile, this.selectedFile.name);
    //   Category: string;
    // SubCategory: string;
    // Text: string;
    // Shape: string;
    // Name: string;
    // Price: string;
    // image: string;
    // createdDate: string;
    // id: string;

      this.http.post('http://localhost:3000/api/user/cakesregister', cakedata).subscribe(() => {
            console.log('news runing');
          }, error => {
            console.log(error);
          });

      this.router.navigate(['/admin']);
    }

}
