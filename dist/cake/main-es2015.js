(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <mat-card class=\"card\">\n          <mat-card-content>\n              <h2>About Us</h2>\n              <hr>  <br>\n              Kool Cakes Bakery -  formarly known as Paul’s Bakers, was started in 1994 under the ownership of Kulwinder Paul Kumar. Paul's skill and proficiency in the art of modelling gum\n              paste flowers and decorations are exemplary. He attained his masters degree in cake decoration as well as diplomas in cake decorating from the US.<br><br><br><br>\n\n              <strong style=\"color: red;\">“Paul is truly a Master of Cakes”</strong><br>\n              All our staff members are trained in the art of Cake Making as well as customer service. ETHOS: We pride ourselves in using fresh ingredients and the desire to please our customers\n               at all times. ACCOLADES: We have created tens of thousands of cakes with over 100,000 satisfied customers over the years. With over 18 years of experience in the industry, this makes\n                us one of the most experienced cake makers in the UK. Our cakes are featured in various magazines and exhibitions and we are also preferred cake providers for weddings and special occasions\n                 organised by various popular event organisers, caterers, venues and banqueting halls. In January 2012 we were chosen to provide a massive 5 foot tall cake for Celebrity Big Brother for one \n                 of the tasks. To top it all up in June 2012 we were honoured to make and gift a 'Royal' cake to the Queen at Buckingham Palace during her Jubilee Celebrations. Paul masterminded the making\n                  of these cake and this is what he had to say about the Queens Jubilee Celebrations cake: \" This is the biggest thing that has happened to me in over 20 years of me being in this business and \n                  this is a dream come true for me\".<br><br><br>\n              \n               Community Assistance<br>\n              We believe in assisting the local and general community wherever we can by doing our share of charitable work whether financially or in kind.  Examples include donating to local churches during their fund raising events, donating to religious groups during their events and donating to local schools during their fund raising events such as 'Cake Sale Day'.\n          </mat-card-content>\n        </mat-card>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <h3>Welcome to Admin Pannel</h3> <br>\n    <div class=\"main\">\n\n        <div class=\"offer\">        \n            MANAGE OFFERS <br>\n            <a routerLink=\"/admin/offerspage\">\n                <button mat-raised-button>Offers</button>\n            </a> <br> <br>\n        </div>\n\n        <div class=\"news\">\n            ADD OR EDIT NEWS <br>\n            <a routerLink=\"/admin/newsregform\">\n                  <button mat-raised-button (onclick)=\"NewsRegister();\">News</button>\n            </a> <br> <br>\n        </div>\n\n        <div class=\"track\">\n            CHANGE ORDER STATUS <br>\n            <!-- <a routerLink=\"http://localhost:3000/\"> -->\n                <button mat-raised-button (onclick)=\"NewsRegister();\">Order Status</button> <br> <br>\n        </div>\n\n        <div class=\"cakes\">\n            ADD CAKES <br>\n            <a routerLink=\"/admin/cakecatreg\">\n                <button mat-raised-button (onclick)=\"CakesRegister();\">Category's cake</button>\n        </a><br> <br>\n        </div>\n\n        <div class=\"cakes\">\n                ADD CAKES <br>\n                <a routerLink=\"/admin/cakereg\">\n                    <button mat-raised-button (onclick)=\"CakesRegister();\">Add cake</button>\n            </a><br> <br>\n            </div>\n\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/offerspage/alloffers/alloffers.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/offerspage/alloffers/alloffers.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/offerspage/offers.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/offerspage/offers.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title>\n        Offer Management Page\n    </mat-card-title>\n    <mat-card-content>\n        <div class=\"reg\">\n                <a routerLink=\"/admin/offersreg\">\n                    <button mat-raised-button>Register Offers</button>\n                </a> <br> <br>\n        </div>\n        \n        <div class=\"update\">\n                <!-- <a routerLink=\"/admin/offersupdate\"> -->\n                    <button mat-raised-button (onclick)=\"OffersUpdate();\">Updare Offers</button>\n                <!-- </a>  -->\n                <br> <br>\n        </div>\n\n        <div class=\"delete\">\n                <!-- <a routerLink=\"/admin/offersup\"> -->\n                    <button mat-raised-button (onclick)=\"OffersDelete();\">Delete Offer</button>\n                <!-- </a> <br> <br> -->\n                <br> <br>\n        </div>\n\n        <div class=\"getall\">\n                <a routerLink=\"/admin/alloffers\">\n                    <button mat-raised-button>All Offers</button>\n                </a> <br> <br>\n        </div>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/offerspage/offersreg/offersreg.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/offerspage/offersreg/offersreg.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Contact</title>\n\n<mat-card class=\"outercard\">\n    <mat-card-title>\n        Offers Register Form\n      </mat-card-title>\n  <mat-card class=\"innercard\">\n        <form (ngSubmit)=\"Offersreg(SignupForm)\" #SignupForm=\"ngForm\">\n          <mat-form-field>\n            <input type=\"text\"\n                    matInput\n                    name=\"heading\"\n                    ngModel\n                    placeholder=\"Offer's Heading\"\n                    #head= \"ngModel\" required>\n            <mat-error *ngIf=\"head.invalid\">Please Enter offer's heading!</mat-error>\n          </mat-form-field> <br> <br>\n\n          <mat-form-field>\n              <input type=\"text\"\n                      matInput\n                      name=\"subheading\"\n                      ngModel\n                      placeholder=\"Subheading(if any)\"\n                      #subhead= \"ngModel\">\n              <mat-error *ngIf=\"subhead.invalid\">Please Enter the subheading!</mat-error>\n            </mat-form-field> <br><br>\n\n            <mat-form-field>\n                <input type=\"text\"\n                        matInput\n                        name=\"content\"\n                        ngModel\n                        placeholder=\"Offer's Description\"\n                        #head= \"ngModel\" required>\n                <mat-error *ngIf=\"head.invalid\">Please Enter the offer's content!</mat-error>\n              </mat-form-field> <br> <br>\n\n              <div class=\"img\" >\n                <h6>Please choose your image file</h6>\n                <input type=\"file\" name=\"image\" (change)=\"selectedImage($event)\">\n              </div> <br> <br>\n\n            <div class=\"butn\">\n            <button mat-button><b>Submit</b></button>\n          </div>\n        </form> <br>\n        <span style=\"float: right;\"><button mat-raised-button> <a routerLink=\"/admin/offerspage\">Back</a> </button></span> \n  </mat-card>\n</mat-card>\n\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n\n<app-footer></app-footer>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>login</title>\n\n<mat-card class=\"outercard\">\n    <mat-card-title>\n        Login / Signin\n      </mat-card-title>\n  <mat-card class=\"innercard\">\n        <form (ngSubmit)=\"LoginForm(SignupForm)\" #SignupForm=\"ngForm\">\n          <mat-form-field>\n            <input type=\"email\"\n                    matInput\n                    name=\"email\"\n                    ngModel\n                    placeholder=\"Email ID\"\n                    #emailId= \"ngModel\" required email>\n            <mat-error *ngIf=\"emailId.invalid\">PLease Enter a valid email!</mat-error>\n          </mat-form-field> <br> <br>\n          <mat-form-field>\n              <input type=\"password\"\n                      matInput\n                      name=\"password\"\n                      ngModel\n                      placeholder=\"Password\"\n                      #pass= \"ngModel\" required>\n              <mat-error *ngIf=\"pass.invalid\">PLease Enter correct Password!</mat-error>\n            </mat-form-field> <br>            \n            <span style=\"margin-left:100px;font-size: 14px;\">Not have an account till now? Make one by clicking \n                <a routerLink=\"/register\">here!</a></span>\n            <br> <br>\n            <div class=\"butn\">\n            <button mat-button><b>Submit</b></button>\n          </div>\n        </form> <br>\n  </mat-card>\n</mat-card>\n\n<!-- <router-outlet></router-outlet> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>signup</title>\n\n<mat-card class=\"outercard\">\n    <mat-card-title>\n        Register / Signup\n      </mat-card-title>\n  <mat-card class=\"innercard\">\n        <form (ngSubmit)=\"onSignup(SignupForm)\" #SignupForm=\"ngForm\">\n                <mat-form-field>\n                        <input type=\"text\"\n                                matInput\n                                name=\"firstname\"\n                                ngModel\n                                placeholder=\"First Name\"\n                                #fname= \"ngModel\" required>\n                        <mat-error *ngIf=\"fname.invalid\">Please Enter your first name!</mat-error>\n                </mat-form-field> <br>\n                   \n                <mat-form-field>\n                            <input type=\"text\"\n                                    matInput\n                                    name=\"lastname\"\n                                    ngModel\n                                    placeholder=\"Last Name\"\n                                    #lname= \"ngModel\" required>\n                            <mat-error *ngIf=\"lname.invalid\">Please Enter your last name</mat-error>\n                </mat-form-field> <br>\n                <mat-form-field>\n                <input type=\"email\"\n                        matInput\n                        name=\"email\"\n                        ngModel\n                        placeholder=\"Email ID\"\n                        #emailId= \"ngModel\" required email>\n                <mat-error *ngIf=\"emailId.invalid\">PLease Enter a valid email!</mat-error>\n            </mat-form-field> <br>\n            <mat-form-field>\n                <input type=\"password\"\n                        matInput\n                        name=\"password\"\n                        ngModel\n                        placeholder=\"Password\"\n                        #pass= \"ngModel\" required>\n                <mat-error *ngIf=\"pass.invalid\">Please Enter Your Password!</mat-error>\n                </mat-form-field> <br>   \n                <mat-form-field>\n                <input type=\"password\"\n                        matInput\n                        name=\"confirmpassword\"\n                        ngModel\n                        placeholder=\"Confirm Password\"\n                        #cpass= \"ngModel\" required>\n                <mat-error *ngIf=\"cpass.invalid\">Please Enter correct Password!</mat-error>\n                </mat-form-field> <br>  \n\n            <span style=\"margin-left:120px;font-size: 14px;\">Already have an account? Sign in by clicking  \n                <a routerLink=\"/login\">here!</a></span>\n            <br> <br>\n            <div class=\"butn\">\n            <button mat-button><b>Submit</b></button>\n          </div>\n        </form> <br>\n  </mat-card>\n</mat-card>\n\n<!-- <router-outlet></router-outlet> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/1st25th50thbday/1st_25th_50th.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/birthdaycakes/1st25th50thbday/1st_25th_50th.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>1st/25th/50th Birthday Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\" #data>\n                <span class=\"hidden\">\n                    superhero\n                </span>\n                <span class=\"price\">250$</span>\n               <strong>SUPERHEROS <a routerLink=\"/cakeform\"><button mat-raised-button>Add to Cart</button></a></strong> \n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/birthdaycakes.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/birthdaycakes/birthdaycakes.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Birthday Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/birthdaycakes/superheroes\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/birthdaycakes/cartoonchar\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/birthdaycakes/jamesbond\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/birthdaycakes/1st25th50thbday\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/birthdaycakes/disneyprincess\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/birthdaycakes/cameracake\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/birthdaycakes/harwaretool\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/birthdaycakes/crown_tiara\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/birthdaycakes/videogames\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/cameracake/cameracake.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/birthdaycakes/cameracake/cameracake.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Camera Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/cartoonchar/cartoonchar.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/birthdaycakes/cartoonchar/cartoonchar.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Cartoon Characters Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/crown_tiara/crown_tiara.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/birthdaycakes/crown_tiara/crown_tiara.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Crown/Tiara Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/disneyprincess/disneyprincess.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/birthdaycakes/disneyprincess/disneyprincess.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Disney Princess Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/hardwaretool/harwaretool.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/birthdaycakes/hardwaretool/harwaretool.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Harware Tool Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/jamesbond/jamesbond.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/birthdaycakes/jamesbond/jamesbond.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>James Bond Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/superheroes/super.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/birthdaycakes/superheroes/super.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Superhero Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/videogames/videogames.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/birthdaycakes/videogames/videogames.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Video Game Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cakecategory/cakecategory.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cakecategory/cakecategory.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Contact</title>\n\n<mat-card class=\"outercard\">\n    <mat-card-title>\n        Cake Category's Register Form\n      </mat-card-title>\n  <mat-card class=\"innercard\">\n        <form (ngSubmit)=\"Cakesreg(SignupForm)\" #SignupForm=\"ngForm\">\n          <mat-form-field>\n            <input type=\"text\"\n                    matInput\n                    name=\"category\"\n                    ngModel\n                    placeholder=\"Category\"\n                    #head= \"ngModel\" required>\n            <mat-error *ngIf=\"head.invalid\">Please Enter category's name!</mat-error>\n          </mat-form-field> <br> <br>\n\n          <mat-form-field>\n              <input type=\"text\"\n                      matInput\n                      name=\"name\"\n                      ngModel\n                      placeholder=\"Cake's Name\"\n                      #subhead= \"ngModel\">\n              <mat-error *ngIf=\"subhead.invalid\">Please Enter the cake name!</mat-error>\n            </mat-form-field> <br><br>\n\n            <mat-form-field>\n                <input type=\"text\"\n                        matInput\n                        name=\"price\"\n                        ngModel\n                        placeholder=\"Price\"\n                        #head= \"ngModel\" required>\n                <mat-error *ngIf=\"head.invalid\">Please Enter the cake's price!</mat-error>\n              </mat-form-field> <br> <br>\n\n              <div class=\"img\" >\n                <h6>Please choose your image file</h6>\n                <input type=\"file\" name=\"image\" (change)=\"selectedImage($event)\">\n              </div> <br> <br>\n              \n            <div class=\"butn\">\n            <button mat-button><b>Submit</b></button>\n          </div>\n        </form> <br>\n  </mat-card>\n</mat-card>\n\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cakeform/cakeform.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cakeform/cakeform.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"abc\">\n    <form (ngSubmit)=\"processForm(SignupForm)\" #SignupForm=\"ngForm\" class=\"border border-light p-5\" action=\"https://formspree.io/kajolkumarisingh222@gmail.com\" method=\"POST\" >\n   <p class=\"h4 mb-4\">Cake Description Form\n      </p>\n      <hr>\n      <div class=\"row\" style=\"margin-top: 5%;\">\n          <label for=\"textInput\">How many people do you need to serve? What size cake do you need?</label>\n          <select class=\"browser-default custom-select mb-8\" id=\"select\" name=\"size\">\n            <option value=\"\" disabled=\"\" selected=\"\">Select Size</option>\n            <option value=\"1\">8'' x 12''  80 - 120 Portion*  <strong style=\"color: red;\">£220</strong></option>\n            <option value=\"2\">10'' x 14''\t120 - 160 Portion*\t<strong style=\"color:red;\">£270</strong></option>\n          </select>\n      </div>\n\n      <div class=\"row\" style=\"margin-top: 5%;\">\n        <label for=\"textInput\">Do you want vanilla or chocolate sponge?</label>\n        <select class=\"browser-default custom-select mb-8\" id=\"select\" name=\"sponge type\">\n          <option value=\"\" disabled=\"\" selected=\"\">Select Sponge</option>\n          <option value=\"1\">\tVanila Sponge Cake</option>\n          <option value=\"2\">Chocolate Sponge Cake<strong style=\"color:red;\">(+ £10)</strong></option>\n        </select>\n    </div>\n\n    <div class=\"row\" style=\"margin-top: 5%;\">\n      <label for=\"textInput\">Do you want vanilla or chocolate Cream?</label>\n      <select class=\"browser-default custom-select mb-8\" id=\"select\" name=\"cream\">\n        <option value=\"\" disabled=\"\" selected=\"\">Select Cream</option>\n        <option value=\"1\">Vanilla Cream</option>\n        <option value=\"2\">Chocolate Cream</option>\n      </select>\n  </div>\n\n  <div class=\"row\" style=\"margin-top: 5%;\">\n    <label for=\"textInput\">Do you want your cake to contain eggs?</label>\n    <select class=\"browser-default custom-select mb-8\" id=\"select\" name=\"egg or eggless\">\n      <option value=\"\" disabled=\"\" selected=\"\">Select Egg</option>\n      <option value=\"1\"> Eggless</option>\n      <option value=\"2\">With Eggs</option>\n    </select>\n</div>\n\n<div class=\"row\" style=\"margin-top: 5%;\">\n  <label for=\"textInput\">What filling do you want inside your cake?</label>\n  <select class=\"browser-default custom-select mb-8\" id=\"select\" name=\"cake filler\">\n    <option value=\"\" disabled=\"\" selected=\"\">Select Cake Filler</option>\n    <option value=\"1\">Mixed Fruit Jam</option>\n    <option value=\"2\">White Butter Cream</option>\n  </select>\n</div>\n\n<div class=\"row\" style=\"margin-top: 5%;\">\n  <label for=\"textInput\">Would you like to add a message onto the cake?</label>\n  <h6>If you do not want a message, please leave below box empty. We will decorate the cake with your chosen toppings (No Extra Charge).\n    The message on the cake will be written in the same colour as the colour of the ribbon chosen above.</h6>\n    Type the message: \n    <input type=\"text\" style=\"width:800px;border:1px solid black;\" name=\"message\">\n</div> \n\n<div class=\"row\" style=\"margin-top: 5%;\">\n    <label for=\"textInput\">What colour writing do you want?</label>\n    <select class=\"browser-default custom-select mb-8\" id=\"select\" name=\"message color\">\n      <option value=\"\" disabled=\"\" selected=\"\">Select Colour</option>\n      <option value=\"1\">Blue</option>\n      <option value=\"2\">Brown</option>\n      <option value=\"3\">Gold</option>\n      <option value=\"4\">Light Green</option>\n      <option value=\"5\">Green</option>\n    </select>\n  </div>\n\n  <div class=\"row\" style=\"margin-top: 5%;\">\n    <h6></h6>\n      <!-- <label for=\"textInput\">How can we contact you?</label> -->\n      <h6>Your Full name</h6>\n        <input type=\"text\" \n                style=\"width:800px;border:1px solid black;\" \n                name=\"fullname\"\n                matInput\n                ngModel  \n                #fname= \"ngModel\">\n    </div> \n  \n    <div class=\"row\" style=\"margin-top: 5%;\">\n      <label for=\"textInput\">Your Mobile number</label>\n    <input type=\"number\" \n                style=\"width:800px;border:1px solid black;\" \n                name=\"mno\"\n                matInput\n                ngModel  \n                #mno= \"ngModel\"\n                onKeyPress=\"if(this.value.length==10) return false;\">\n    </div>\n  \n    <div class=\"row\" style=\"margin-top: 5%;\">\n      <label for=\"textInput\">Your email ID</label>\n    <input type=\"email\" \n                style=\"width:800px;border:1px solid black;\" \n                name=\"email\"\n                matInput\n                ngModel  \n                #email= \"ngModel\">\n    </div>\n    \n  <br> <br>\n\n<!-- <input type=\"submit\" value=\"Send\"> -->\n      <button mat-raised-button color=\"primary\" class=\"btn btn-info btn-block\" type=\"submit\" style=\"margin-top: 5%;width:25%;margin:auto;\" value=\"Send\">Submit</button>\n    </form>\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cakereg/cakereg.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cakereg/cakereg.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Contact</title>\n\n<mat-card class=\"outercard\">\n    <mat-card-title>\n        Cake's Register Form\n      </mat-card-title>\n  <mat-card class=\"innercard\">\n        <form (ngSubmit)=\"Offersreg(SignupForm)\" #SignupForm=\"ngForm\">\n          <mat-form-field>\n            <input type=\"text\"\n                    matInput\n                    name=\"category\"\n                    ngModel\n                    placeholder=\"Category\"\n                    #head= \"ngModel\" required>\n            <mat-error *ngIf=\"head.invalid\">Please Enter category's name!</mat-error>\n          </mat-form-field> <br> <br>\n\n          <mat-form-field>\n                <input type=\"text\"\n                        matInput\n                        name=\"subcategory\"\n                        ngModel\n                        placeholder=\"Sub Category\"\n                        #head= \"ngModel\" required>\n                <mat-error *ngIf=\"head.invalid\">Please Enter sub category's name!</mat-error>\n              </mat-form-field> <br> <br>\n\n              <mat-form-field>\n                    <input type=\"text\"\n                            matInput\n                            name=\"type\"\n                            ngModel\n                            placeholder=\"Cake Type\"\n                            #head= \"ngModel\" required>\n                    <mat-error *ngIf=\"head.invalid\">Please Enter sub category's name!</mat-error>\n                  </mat-form-field> <br> <br>\n\n                  <mat-form-field>\n                        <input type=\"text\"\n                                matInput\n                                name=\"shape\"\n                                ngModel\n                                placeholder=\"Cake's Shape\"\n                                #head= \"ngModel\" required>\n                        <mat-error *ngIf=\"head.invalid\">Please Enter sub category's name!</mat-error>\n                      </mat-form-field> <br> <br>\n\n          <mat-form-field>\n              <input type=\"text\"\n                      matInput\n                      name=\"name\"\n                      ngModel\n                      placeholder=\"Cake's Name\"\n                      #subhead= \"ngModel\">\n              <mat-error *ngIf=\"subhead.invalid\">Please Enter the cake name!</mat-error>\n            </mat-form-field> <br><br>\n\n            <mat-form-field>\n                <input type=\"text\"\n                        matInput\n                        name=\"price\"\n                        ngModel\n                        placeholder=\"Price\"\n                        #head= \"ngModel\" required>\n                <mat-error *ngIf=\"head.invalid\">Please Enter the cake's price!</mat-error>\n              </mat-form-field> <br> <br>\n\n              <div class=\"img\" >\n                <h6>Please choose your image file</h6>\n                <input type=\"file\" name=\"image\" (change)=\"selectedImage($event)\">\n              </div> <br> <br>\n\n            <div class=\"butn\">\n            <button mat-button><b>Submit</b></button>\n          </div>\n        </form> <br>\n      <span style=\"float: right;\"><button mat-raised-button> <a routerLink=\"/admin\">Back</a> </button></span>  \n  </mat-card>\n</mat-card>\n\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Your Cart</h3>\n{{products}} <br>\n{{quantity}}\n<!-- <div class=\"tbl\">\n<table border=\"1\">\n    <tr>\n        <th>Option</th>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Photo</th>\n        <th>Price</th>\n        <th>Quantity</th>\n        <th>Sub Total</th>\n    </tr>\n    <tr *ngFor=\"let item of products\">\n        <td align=\"center\">\n            <a (click)=\"remove(item.id)\">X</a>\n        </td>\n        <td>{{item.id}}</td>\n        <td>{{item.name}}</td>\n        <td>\n            <img src=\"assets/{{item.product.photo}}\" width=\"50\" alt=\"SELECTED CAKE IMAGE\">\n        </td>\n        <td>{{item.price}}</td>\n        <td>{{quantity}}</td>\n        <td>{{item.price * quantity}}</td>\n    </tr>\n    <tr>\n        <td colspan=\"6\" align=\"right\">Total</td>\n        <td>{{total}}</td>\n    </tr>\n</table>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"abc\">\n    <form class=\"border border-light p-5\">\n  \n      <p class=\"h4 mb-4\">Your Contact Information\n      </p>\n      <hr>\n      <h6>We will endeavour to contact you within 24 hours of receipt of your enquiry. In case your query is of an urgent\n        nature then we suggest you call the bakery at the earliest.\n      </h6>\n      <div class=\"row\" style=\"margin-top: 5%;\">\n        <div class=\"col\">\n          <label for=\"textInput\">Enquiry type:</label>\n          <select class=\"browser-default custom-select mb-4\" id=\"select\">\n            <option value=\"\" disabled=\"\" selected=\"\">Select Enquiry Type</option>\n            <option value=\"1\">Wedding Cakes</option>\n            <option value=\"2\">Birthday Cakes</option>\n            <option value=\"3\">Novelty Cakes</option>\n            <option value=\"4\">Special Occassion</option>\n            <option value=\"5\">Write a Review</option>\n            <option value=\"6\">Others</option>\n  \n  \n          </select>\n        </div>\n        <div class=\"col\">\n          <label for=\"textInput\">Full Name</label>\n          <input type=\"text\" id=\"defaultContactFormName\" class=\"form-control mb-4\" placeholder=\"\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <label for=\"textInput\">Would you like us to contact you by phone or on email?</label>\n          <select class=\"browser-default custom-select mb-4\" id=\"select\">\n            <option value=\"\" disabled=\"\" selected=\"\">By Phone</option>\n            <option value=\"1\">By E-mail</option>\n          </select>\n        </div>\n        <div class=\"col\">\n          <label for=\"textInput\">How did you hear about us?</label>\n          <select class=\"browser-default custom-select mb-4\" id=\"select\">\n            <option value=\"\" disabled=\"\" selected=\"\">Google</option>\n            <option value=\"1\">Returning Custumer</option>\n            <option value=\"2\">From a Friend</option>\n          </select>\n        </div>\n      </div>\n  \n      <div class=\"row\">\n        <div class=\"col\">\n          <label for=\"textInput\">Address Line</label>\n          <input type=\"text\" id=\"textInput\" class=\"form-control mb-4\" placeholder=\"\">\n        </div>\n        <div class=\"col\">\n          <label for=\"textInput\">City</label>\n          <input type=\"text\" id=\"textInput\" class=\"form-control mb-4\" placeholder=\"\">\n        </div>\n      </div>\n  \n      <div class=\"row\">\n        <div class=\"col\">\n          <label for=\"textInput\">Country</label>\n          <input type=\"text\" id=\"textInput\" class=\"form-control mb-4\" placeholder=\"\">\n        </div>\n        <div class=\"col\">\n          <label for=\"textInput\">Postcode</label>\n          <input type=\"text\" id=\"textInput\" class=\"form-control mb-4\" placeholder=\"\">\n        </div>\n      </div>\n  \n  \n      <div class=\"row\">\n        <div class=\"col\">\n          <label for=\"textInput\">Phone Number</label>\n          <input type=\"text\" id=\"textInput\" class=\"form-control mb-4\" placeholder=\"\">\n        </div>\n        <div class=\"col\">\n          <label for=\"textInput\">E-mail</label>\n          <input type=\"email\" id=\"defaultContactFormEmail\" class=\"form-control mb-4\" placeholder=\"\">\n  \n        </div>\n      </div>\n  \n  \n  \n      <label for=\"textInput\">Enquiry</label>\n      <textarea class=\"form-control rounded-0\" id=\"exampleFormControlTextarea2\" rows=\"3\" placeholder=\"\"></textarea>\n  \n      <br>\n      <button class=\"btn btn-info btn-block\" type=\"submit\" style=\"margin-top: 5%;width:25%;margin:auto;\">Submit</button>\n    </form>\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/boat/boat.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corporatecakes/boat/boat.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Boat Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/corporatecakes.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corporatecakes/corporatecakes.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Corporate Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/corporatecakes/boat\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>BOAT</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/corporatecakes/doctor\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>DOCTOR</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/corporatecakes/football_clubs\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FOTBALL CLUBS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/corporatecakes/lawyer\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>LAWYER</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/corporatecakes/music_equipment\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>MUSIC EQUIPMENTS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/corporatecakes/poker_casino\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>POKER CASINO</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/corporatecakes/religious_theme\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>RELIGIOUS THEME CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/corporatecakes/safae_jungle\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SAFAE JUNGLE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/corporatecakes/watch_brands\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>WATCH BRANDS</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/doctor/doctor.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corporatecakes/doctor/doctor.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Doctor Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/football_clubs/footballclubs.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corporatecakes/football_clubs/footballclubs.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Football Clubs Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/lawyer/lawyer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corporatecakes/lawyer/lawyer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Lawyer Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/music_equipment/musiceq.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corporatecakes/music_equipment/musiceq.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Music Equipment Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/poker_casino/pokercasino.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corporatecakes/poker_casino/pokercasino.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Poker Casino Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/religious_theme/religioustheme.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corporatecakes/religious_theme/religioustheme.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Religious Theme Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/safai_jungle/safaejungle.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corporatecakes/safai_jungle/safaejungle.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Safae Jungle Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/watch_brands/watchbrands.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corporatecakes/watch_brands/watchbrands.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Watch Brands Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small stylish-color-dark pt-4\">\n\n    <!-- Footer Links -->\n    <div class=\"container text-center text-md-left\">\n  \n      <!-- Grid row -->\n      <div class=\"row\">\n  \n        <!-- Grid column -->\n        <div class=\"col-md-4 mx-auto\">\n  \n          <!-- Content -->\n          <img class=\"footlogo\" src=\"../../assets/logo.png\" alt=\"Koolcakes\">\n\n  \n        </div>\n        <!-- Grid column -->\n  \n        <hr class=\"clearfix w-100 d-md-none\">\n  \n        <!-- Grid column -->\n        <div class=\"col-md-2 mx-auto\">\n  \n          <!-- Links -->\n          <h5 class=\"font-weight-bold text-uppercase mt-3 mb-4\">KoolCakes</h5>\n  \n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">> Home</a>\n            </li>\n            <li>\n              <a href=\"#!\">> About</a>\n            </li>\n            <li>\n              <a href=\"#!\">> Our Cakes</a>\n            </li>\n            <li>\n              <a href=\"#!\">> Cake Builder</a>\n            </li>\n            <li>\n                <a href=\"#!\">> News</a>\n              </li>\n              <li>\n                  <a href=\"#!\">> Blogs</a>\n                </li>\n                <li>\n                    <a href=\"#!\">> Offers</a>\n                  </li>\n                  <li>\n                      <a href=\"#!\">> Egg Free Cakes</a>\n                    </li>\n                    <li>\n                        <a href=\"#!\">> Contact Us</a>\n                      </li>\n          </ul>\n  \n        </div>\n        <!-- Grid column -->\n  \n        <hr class=\"clearfix w-100 d-md-none\">\n  \n        <!-- Grid column -->\n        <div class=\"col-md-3 mx-auto\">\n  \n          <!-- Links -->\n          <h5 class=\"font-weight-bold text-uppercase mt-3 mb-4\">Help</h5>\n  \n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">> FAQ</a>\n            </li>\n            <li>\n              <a href=\"#!\">> Terms and Conditions</a>\n            </li>\n            <li>\n              <a href=\"#!\">> Privacy Policy</a>\n            </li>\n            <li>\n              <a href=\"#!\">> Cokkies</a>\n            </li>\n          </ul>\n  \n        </div>\n        <!-- Grid column -->\n  \n        <hr class=\"clearfix w-100 d-md-none\">\n  \n        <!-- Grid column -->\n        <div class=\"col-md-3 mx-auto\">\n  \n          <!-- Links -->\n          <h5 class=\"font-weight-bold text-uppercase mt-3 mb-4\">KoolCakes Bakery</h5>\n  \n          <!-- <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">Link 1</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 2</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 3</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 4</a>\n            </li>\n          </ul> -->\n  \n        </div>\n        <!-- Grid column -->\n  \n      </div>\n      <!-- Grid row -->\n  \n    </div>\n    <!-- Footer Links -->\n  \n    <hr>\n  \n    <!-- Copyright -->\n    <!-- <div class=\"footer-copyright text-center py-3\">Copyright © 2019\n      <a href=\"#\">koolcakes.co.uk All Rights Reserved.</a>\n    </div> -->\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" \n    integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\n</head>\n\n<a routerLink=\"home\">\n  <img class=\"navlogo\" src=\"../../assets/logo.png\" alt=\"Koolcakes\">\n</a>\n<span class=\"spacer\"></span>\n  <span class=\"right\">\n      <a routerLink=\"#\" class=\"num\"><i class=\"fas fa-phone\"></i>020-70525152</a>\n      <a routerLink=\"/offers\" class=\"num\"> offers</a>\n      <a routerLink=\"#\" class=\"num\"> Partner With Us</a>\n      <a routerLink=\"#\" class=\"num\"> Track Order</a>\n      <a routerLink=\"#\" class=\"num\"> Help</a>\n      <a class=\"reg\" routerLink=\"/login\" *ngIf=\"!(loggedIn)\">Login / </a>\n      <a class=\"reg\" routerLink=\"/register\" *ngIf=\"!(loggedIn)\">Signup</a>\n      <a class=\"reg\" (onclick)=\"onLogout();\" *ngIf=\"loggedIn\">Logout</a> <br> <br>\n  <!-- </span>\n  <span class=\"n_line\"> -->\n      <a routerLink=\"#\" class=\"bot\"> <i class=\"fas fa-search\"></i> Search</a>\n      <a routerLink=\"#\" class=\"bot\"> \n        <i class=\"fas fa-user-clock\"></i> \n        Delivery in <strong style=\"color: red;\"> 2 Hours</strong>\n      </a>\n      <a routerLink=\"#\" class=\"bot\"> \n        <i class=\"fas fa-map-marker-alt\"></i> \n        Delivery In <strong style=\"color: red;\">Choose City</strong>\n      </a>\n      <a routerLink=\"#\" class=\"bot\"> <i class=\"fas fa-shopping-cart\"></i> Cart</a>\n  </span>\n<hr>\n<nav class=\"navbar navbar-expand-lg navbar-light \">\n    <a class=\"navbar-brand\" routerLink=\"#\"></a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"ourcakes\">Our Cakes<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li>\n          <a class=\"nav-link\" routerLink=\"\">|</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"birthdaycakes\">Birthday Cakes</a>\n      </li>\n      <li>\n          <a class=\"nav-link\" routerLink=\"\">|</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"weddingcakes\">Wedding Cakes</a>\n        </li>\n        <li>\n            <a class=\"nav-link\" routerLink=\"\">|</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"personalizedcakes\">Personalised Cakes</a>\n          </li>\n          <li>\n              <a class=\"nav-link\" routerLink=\"\">|</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"kidscakes\">Kids Cakes</a>\n            </li>\n            <li>\n                <a class=\"nav-link\" routerLink=\"\">|</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"kidscakes\">Cake Builder</a>\n              </li>\n              <li>\n                  <a class=\"nav-link\" routerLink=\"\">|</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"offers\">Offer</a>\n                </li>\n                <li>\n                    <a class=\"nav-link\" routerLink=\"\">|</a>\n                </li>\n      <!-- <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            OUR CAKES\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"ourcakes\">Our Cakes</a>\n            <a class=\"dropdown-item\" routerLink=\"birthdaycakes\">Birthday Cakes</a>\n            <a class=\"dropdown-item\" routerLink=\"specialcakes\">Special Occasion Cakes</a>\n            <a class=\"dropdown-item\" routerLink=\"corporatecakes\">Corporate Cakes</a>\n            <a class=\"dropdown-item\" routerLink=\"personalizedcakes\">Personalized Cakes</a>\n            <a class=\"dropdown-item\" routerLink=\"sportscakes\">Sports</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link \" routerLink=\"news\">NEWS</a>\n          </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"offers\">OFFERS</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link \" routerLink=\"#\">EGG FREE CAKES</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link \" routerLink=\"/contact\">CONTACT US</a>\n          </li> -->\n    </ul>\n\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pic1\">\n    <a routerLink=\"\"> <img src=\"../../assets/halloween_banner.png\" alt=\"\" class=\"p1\"></a>\n</div>\n<div class=\"pic2\">\n\n    <div class=\"row\">\n        <div class=\"col-md-4 text-center ab\"> <a routerLink=\"\"><img src=\"../../assets/retirement.jpg\" alt=\"retirement cake\" class=\"p2\"></a></div>\n        <div class=\"col-md-4 text-center ab\"> <a routerLink=\"\"><img src=\"../../assets/graduation.jpg\" alt=\"\" class=\"p2\"></a></div>\n        <div class=\"col-md-4 text-center ab\"> <a routerLink=\"\"><img src=\"../../assets/short notice cakes_1.jpg\" alt=\"\" class=\"p2\"></a>\n        </div>\n    </div>\n</div>\n<hr>\n\n    <div class=\"content\">\n       <p class=\"text-center\"> <b>Explore Our Most Selling Cakes </b></p>\n    </div>\n\n    <div class=\"mostsell\">\n        <span class=\"single\">\n            <img src=\"../../assets/kids cakes.jpg\" alt=\"kidscake\">\n        </span>\n        <span class=\"containsthree\">\n            <div class=\"b1\">\n                   <img src=\"../../assets/age cakes.jpg\" alt=\"\">\n            </div>\n            <div class=\"b1\">\n                    <img src=\"../../assets/photo cakes.jpg\" alt=\"photo cake\">\n            </div>\n            <div class=\"b1\">\n                        <img src=\"../../assets/theme cakes.jpg\" alt=\"\">\n            </div>\n        </span>  \n    </div>\n\n    <div class=\"alloccasion\">\n        <img src=\"../../assets/cake image.png\" alt=\"\">\n    </div>\n\n    <div class=\"wedanniversary\">\n        <span class=\"wedding\">\n            <span class=\"wed\">\n                <img src=\"../../assets/weddingposter.png\" alt=\"\">\n            </span>\n            <!-- <span class=\"wedcont\">\n                <ul>\n                    <li>Cakes</li>\n                    <li>Flowers</li>\n                    <li>Gifts</li>\n                    <li>Chocolates</li>\n                    <li>Personalized</li>\n                </ul>\n            </span> -->\n        </span>\n\n    <span class=\"anniver\">\n            <span class=\"annimg\">\n                    <img src=\"../../assets/annivervaryposter.png\" alt=\"\">\n                </span>\n                <!-- <span class=\"wedcont\">\n                    <h4>Anniversary Gifts</h4>\n                    <hr style=\"width: 200px;\">\n                    <ul>\n                        <li>Cakes</li>\n                        <li>Flowers</li>\n                        <li>Gifts</li>\n                        <li>Chocolates</li>\n                        <li>Personalized</li>\n                    </ul>\n                </span> -->\n        </span>\n</div>\n\n    <div class=\"shortnotice\">\n        <img src=\"../../assets/short notice cake (1).jpg\" alt=\"\">\n    </div>\n\n    <div class=\"novelty\">\n        <img src=\"../../assets/image 33..jpg\" alt=\"\">\n    </div>\n\n    <div class=\"content\">\n            <p class=\"text-center\"> <b>GIFT A CAKE </b></p>\n         </div>\n\n    <div class=\"giftcake\">\n        <span class=\"p1\">\n            <img src=\"../../assets/friend.png\" alt=\"\">\n        </span>\n        <span class=\"p1\">\n            <img src=\"../../assets/closed_one.png\" alt=\"\">\n        </span>\n        <span class=\"p1\">\n            <img src=\"../../assets/boss.png\" alt=\"\">\n        </span>\n        <span class=\"p1\">\n            <img src=\"../../assets/someone_special.png\" alt=\"\">\n        </span>\n    </div>\n\n    <div class=\"her\">\n        <span class=\"hertype\">\n            <h6>For Her</h6>\n            <ul>\n                <li>For Girlfriend</li>\n                <li>For Wife</li>\n                <li>For Sister</li>\n                <li>For Mother</li>\n            </ul>\n            \n        </span>\n        <span class=\"herimg\">\n            <img src=\"../../assets/for her.png\" alt=\"\">\n        </span>\n    </div> <br> <br>\n\n    <div class=\"him\">\n            <span class=\"himtype\">\n                <h6>For Him</h6>\n                <ul>\n                    <li>For Boyfriend</li>\n                    <li>For Husband</li>\n                    <li>For Brother</li>\n                    <li>For Father</li>\n                </ul>\n            </span>\n            <span class=\"himimg\">\n                <img src=\"../../assets/for him.png\" alt=\"\">\n            </span>\n        </div>\n\n        <div class=\"buildacake\">\n            <img src=\"../../assets/buildacake.png\" alt=\"\">\n        </div>\n\n        \n    <div class=\"content\">\n            <p class=\"text-center\" style=\"color: rgb(236, 26, 96);\"> <b>Explore More With Us </b></p>\n         </div>\n\n         <div class=\"explore\">\n            <span class=\"e1\">\n                <img src=\"../../assets/iphone1.png\" alt=\"\">\n            </span>\n            <span class=\"e1\">\n                    <img src=\"../../assets/bag11.png\" alt=\"\">\n            </span>\n            <span class=\"e1\">\n                    <img src=\"../../assets/car1.png\" alt=\"\">\n            </span>\n            <span class=\"e1\">\n                    <img src=\"../../assets/casino1.png\" alt=\"\">\n            </span>\n            <span class=\"e1\">\n                <img src=\"../../assets/cricket1.png\" alt=\"\">\n            </span>\n            <br>\n            <span class=\"e1\">\n                    <img src=\"../../assets/crown1.png\" alt=\"\">\n            </span>\n            <span class=\"e1\">\n                    <img src=\"../../assets/doctor1.png\" alt=\"\">\n            </span>\n            <span class=\"e1\">\n                    <img src=\"../../assets/drip1.png\" alt=\"\">\n                </span>\n            <span class=\"e1\">\n                        <img src=\"../../assets/lawyer1.png\" alt=\"\">\n            </span>\n            <span class=\"e1\">\n                    <img src=\"../../assets/whiskey1 (1).png\" alt=\"\">\n                </span>\n         </div>\n     \n<!-- \n<div class=\"bestsell\">\n    <div class=\"row\">\n\n        <div class=\"col-md-3 text-center t\"> <a routerLink=\"\"> <img src=\"../../assets/p5.png\" alt=\"\" class=\"p3\"><p class=\"text-center text\">Cakes</p></a> </div>\n        <div class=\"col-md-3 text-center t\"> <a routerLink=\"\"> <img src=\"../../assets/p6.png\" alt=\"\" class=\"p3\" ><p class=\"text-center text\">Gifts</p></a></div>\n        <div class=\"col-md-3 text-center t\"> <a routerLink=\"\"> <img src=\"../../assets/p7.png\" alt=\"\" class=\"p3\"> <p class=\"text-center text\">Flowers</p></a></div>\n        <div class=\"col-md-3 text-center t\"> <a routerLink=\"\"> <img src=\"../../assets/p8.png\" alt=\"\" class=\"p3\"><p class=\"text-center text\">Birthday</p></a>\n        </div>\n\n    </div>\n</div> -->\n\n\n<!-- <div class=\"col-md-12\">\n<div class=\"foot\">\n    <img  class=\"low\" src=\"../../assets/p9.png\" alt=\"\">\n</div>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/news/news.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/news/news.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <mat-card class=\"card\">\n            <mat-card-content>\n                    <h2>News</h2>\n                    <hr>  <br>\n                    Finding the right cake for your needs requires much more thought than simply what kind of cake you’d like to have. In fact, the design of the cake can – and should – be one of the main decisions that you make when trying to create the perfect cake.\n\n                    No matter whether it’s for a birthday party or your wedding cake, here are some aspects of cake design that you should think about!\n                    <br><br>\n                    <strong style=\"color: red;\">What Colour Do You Want?</strong><br>\n                    \n                    Cakes don’t have to be bland and boring. In fact, we actively encourage people to play around with colour when it comes to their cake design.\n                    \n                    \n                    Whether you’re a fan of blocked, bold colours or prefer a more subtle addition of colour, it’s a great way to create an eye catching focal point which looks attractive and tastes good, too!\n                    <br><br>\n                    <strong style=\"color: red;\">How Many Tiers?</strong> <br>\n                    \n                    There’s no right or wrong answer when it comes to the amount of tiers that your cake has. If you want to have a three tiered birthday cake, there’s nothing to stop you! This also means those of you who want a single tier wedding cake can have one if that’s what you really want!\n                    \n                    <br>\n                    It’s worth thinking about how many people you will want to be sharing your cake with. More people doesn’t necessarily mean more tiers; you could always have a larger single tiered cake! Cakes with many tiers look grand, though, so maybe think about how important the cake is to your celebration.\n                    <br>\n                    <strong style=\"color: red;\">What Shape?</strong> <br>\n                    \n                    Many people think that a cake has to be either round or square, but this really isn’t the case. Many bakers will have a variety of different cake trays which come in an array of shapes – after all, cake making really is an art form!\n                    <br><br>\n                    \n                    From love hearts, hexagons – even cakes which are shaped like teddy bears, have some kind of idea what shape you’d like to have for your cake. Love hearts are extremely popular with weddings, and hexagons are a great, visually appealing alternative to square cakes! You could even go for something completely out there like the cake above!\n                    <br><br>\n                    <strong style=\"color: red;\">\"Do You Want Decorations?\"</strong> <br>\n                    \n                    Many people forget that cakes can be decorated with other things that aren’t icing. There are some beautiful icing decorations that can be added, some people may want to take their cake in a completely different direction and have something to remember their cake by once it has gone.\n                    \n                    <br><br>\n                    Using flower garlands as cake decorations has become increasingly popular over the last few years, adding a natural touch to even the simplest of cakes. Ribbons are also a great choice to add a splash of colour to your cake without being too overbearing.\n                    \n                    If you do want edible decorations, the world is your oyster. From delicious icing flowers to incredible art drawn onto your cake using a piping bag full of icing – the choice is completely up to you.\n                    \n                    If you’d like to call upon the expertise of our master cake makers here at Kool Cakes, be sure to get in contact with us today. We’d love to help you create the perfect cake for your celebration, no matter what it might be.\n                    \n                     \n                            \n            </mat-card-content>\n          </mat-card>\n      </div>\n  \n    </div>\n  </div>\n\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/newsregister/newsreg.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newsregister/newsreg.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Contact</title>\n\n<mat-card class=\"outercard\">\n    <mat-card-title>\n        News Register Form\n      </mat-card-title>\n  <mat-card class=\"innercard\">\n        <form (ngSubmit)=\"Newsreg(SignupForm)\" #SignupForm=\"ngForm\">\n          <mat-form-field>\n            <input type=\"text\"\n                    matInput\n                    name=\"heading\"\n                    ngModel\n                    placeholder=\"News Heading\"\n                    #head= \"ngModel\" required>\n            <mat-error *ngIf=\"head.invalid\">Please Enter the News Heading!</mat-error>\n          </mat-form-field> <br> <br>\n\n          <mat-form-field>\n              <input type=\"text\"\n                      matInput\n                      name=\"subheading\"\n                      ngModel\n                      placeholder=\"News Subheading(if any)\"\n                      #subhead= \"ngModel\">\n              <mat-error *ngIf=\"subhead.invalid\">Please Enter the subheading(if any)!</mat-error>\n            </mat-form-field> <br><br>\n\n            <mat-form-field>\n                <input type=\"text\"\n                        matInput\n                        name=\"content\"\n                        ngModel\n                        placeholder=\"News content\"\n                        #head= \"ngModel\" required>\n                <mat-error *ngIf=\"head.invalid\">Please Enter the News Content!</mat-error>\n              </mat-form-field> <br> <br>\n\n              <div class=\"img\" >\n                <h6>Please choose your image file</h6>\n                <input type=\"file\" name=\"image\" (change)=\"selectedImage($event)\">\n              </div> <br> <br>\n\n            <div class=\"butn\">\n            <button mat-button><b>Submit</b></button>\n          </div>\n        </form> <br>\n        <span style=\"float: right;\"><button mat-raised-button> <a routerLink=\"/admin\">Back</a> </button></span>  \n  </mat-card>\n</mat-card>\n\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/offers/offers.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/offers/offers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"im\">\n    <h2>Our Offers</h2>\n<img src=\"../../assets/p10.png\" alt=\"\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ourcakes/adult/adult.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ourcakes/adult/adult.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Adult Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL SPORTS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HOUSE WARMING</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ourcakes/anniversary/anniversary.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ourcakes/anniversary/anniversary.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Anniversaryr Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL SPORTS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HOUSE WARMING</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ourcakes/baby_shower/baby_shower.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ourcakes/baby_shower/baby_shower.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Special Occassion Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL SPORTS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HOUSE WARMING</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ourcakes/corporate/corporate.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ourcakes/corporate/corporate.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Corporate Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL SPORTS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HOUSE WARMING</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ourcakes/fathersday/fathers.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ourcakes/fathersday/fathers.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Father's Day Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL SPORTS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HOUSE WARMING</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ourcakes/mohersday/mothers.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ourcakes/mohersday/mothers.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Mother's Day Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL SPORTS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HOUSE WARMING</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ourcakes/newyear/newyear.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ourcakes/newyear/newyear.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>New Year Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL SPORTS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HOUSE WARMING</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ourcakes/ourcakes.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ourcakes/ourcakes.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Our Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/ourcakes/baby_shower\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>BABY SHOWER</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/ourcakes/wedding\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>WEDDING</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/ourcakes/mothersday\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>MOTHER'S DAY</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/ourcakes/fathersday\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FATHER'S DAY</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/ourcakes/corporate\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CORPORATE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/ourcakes/adult\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ADULT</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/ourcakes/newyear\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>NEW YEAR</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/ourcakes/valentinesday\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>VALENTINE'S DAY</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/ourcakes/anniversary\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ANNIVERSARY</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Looking for something different for a themed birthday party? Well, you don’t need to look beyond us. All of our novelty cakes are made from the freshest of ingredient with the touch of bakers who have mastered the art of cake making.\n        These novelty cakes greatly vary in terms of decoration, theme and size. While we offer cakes that are perfect for smaller parties, we also have bigger cakes to fit any crowd size of your choice.\n        <br> \n        <h5>Kid’s Novelty cake</h5>\n        Kids are always attracted to fun, why should their special cake miss out on it? Our novelty cakes, specially made for kids parties, like birthdays, graduations are not only playful to look at but taste as amazing as our traditional cakes. We have here, sports theme cake, Disney theme cakes, castle cakes, superhero theme cakes and so much more for the kids to take their pick. \n      <br> <h5>Adult’s Novelty Cake</h5> <br>\n\nAdult’s need to let loose and have some fun too amidst all the monotony. Our novelty cakes here are the perfect gateway to having a great party and spread the joy. With each bite providing a treat for your mouth, these cakes have been decorated and designed as liquor bottle, mendhi and makeup. Our mendhi cakes are perfect for ceremonies and religious occasions, while the novelty birthday cakes do a fine job at your birthday party.\n\nSo pick your favourite here and we can adorn it with a special message or a topper of your choice and personalize it to suit your need. If you have your own idea of the cake, you can hop on to our cake builder to design your favourite piece and we will have it delivered.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ourcakes/valentinesday/valentinesday.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ourcakes/valentinesday/valentinesday.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Valentine's Day Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL SPORTS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HOUSE WARMING</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ourcakes/wedding/wedding.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ourcakes/wedding/wedding.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Wedding Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL SPORTS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HOUSE WARMING</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/personalizedcakes/alcohol_theme/alcoholtheme.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/personalizedcakes/alcohol_theme/alcoholtheme.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Alcohol Theme Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/personalizedcakes/comic_theme/comictheme.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/personalizedcakes/comic_theme/comictheme.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Comic Theme Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/personalizedcakes/dog_shaped/dogshaped.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/personalizedcakes/dog_shaped/dogshaped.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Dog Shaped Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/personalizedcakes/number_shaped/numbershaped.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/personalizedcakes/number_shaped/numbershaped.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Number Shaped Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>SUPERHEROS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CARTOON CHARACTERS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JAMES BOND</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>1st/25th/50th BIRTHDAYS</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL DISNEY PRINCES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CAMERA CAKE</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HARDWARE TOOL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Crown/tiara\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CROWN/TIARA</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All video games\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL VIDEO GAMES</strong>\n            </div>\n        </div>\n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/personalizedcakes/personalizedcakes.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/personalizedcakes/personalizedcakes.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Personalized Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/personalizedcakes/alcohol_theme\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"ALCOHOL\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALCOHOL THEME CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/personalizedcakes/comic_theme\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>COMIC THEME CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/personalizedcakes/dog_shaped\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>DOG SHAPED</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/personalizedcakes/number_shaped\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>NUMBER SHAPED</strong>\n            </div>\n        </div>\n    </div>\n\n\n<br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <mat-card class=\"card\">\n                <mat-card-content>\n                    <h2>About Us</h2>\n                    <hr>  <br>\n                    Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n                </mat-card-content>\n              </mat-card>\n          </div>\n      \n        </div>\n      </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/specialcakes/all_sports/all_sports.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/specialcakes/all_sports/all_sports.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>All Sports Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GYM CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FOOTBALL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>TENNIS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GOLF</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FORMULA 1</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JERSY SHAPED</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>OTHER SPORTS</strong>\n            </div>\n        </div>\n      \n        \n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/specialcakes/baptism/baptism.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/specialcakes/baptism/baptism.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Baptism Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GYM CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FOOTBALL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>TENNIS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GOLF</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FORMULA 1</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JERSY SHAPED</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>OTHER SPORTS</strong>\n            </div>\n        </div>\n      \n        \n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/specialcakes/christmas/christmas.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/specialcakes/christmas/christmas.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Christmas  Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GYM CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FOOTBALL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>TENNIS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GOLF</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FORMULA 1</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JERSY SHAPED</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>OTHER SPORTS</strong>\n            </div>\n        </div>\n      \n        \n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/specialcakes/easter/easter.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/specialcakes/easter/easter.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Easter Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GYM CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FOOTBALL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>TENNIS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GOLF</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FORMULA 1</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JERSY SHAPED</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>OTHER SPORTS</strong>\n            </div>\n        </div>\n      \n        \n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/specialcakes/gender_reveal/genderrev.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/specialcakes/gender_reveal/genderrev.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Gender Reveal Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GYM CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FOOTBALL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>TENNIS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GOLF</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FORMULA 1</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JERSY SHAPED</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>OTHER SPORTS</strong>\n            </div>\n        </div>\n      \n        \n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/specialcakes/graduation/graduation.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/specialcakes/graduation/graduation.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Graduation Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GYM CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FOOTBALL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>TENNIS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GOLF</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FORMULA 1</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JERSY SHAPED</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>OTHER SPORTS</strong>\n            </div>\n        </div>\n      \n        \n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/specialcakes/house_warming/house_warming.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/specialcakes/house_warming/house_warming.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>House Warming Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GYM CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FOOTBALL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>TENNIS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GOLF</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FORMULA 1</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JERSY SHAPED</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>OTHER SPORTS</strong>\n            </div>\n        </div>\n      \n        \n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/specialcakes/specialcakes.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/specialcakes/specialcakes.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>Special Occassion Cakes</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/specialcakes/all_sports\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>ALL SPORTS</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/specialcakes/house_warming\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>HOUSE WARMING</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/specialcakes/easter\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>Easter</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/specialcakes/christmas\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>CHRISTMAS </strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLink=\"/specialcakes/baptism\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>BAPRISM</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/specialcakes/gender_reveal\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GENDER REVEAL</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/specialcakes/graduation\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Hardware tool\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GRADUATION</strong>\n            </div>\n        </div>\n\n        \n    </div> <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sportscakes/Jersey_shaped/jerseyshaped.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sportscakes/Jersey_shaped/jerseyshaped.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n        <h3>Jersey Shaped Cakes</h3>\n        <hr>\n        <div class=\"card-group 1\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GYM CAKES</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FOOTBALL</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>TENNIS</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GOLF</strong>\n                </div>\n            </div>\n        </div>\n    \n    \n    \n        <div class=\"card-group b\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FORMULA 1</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>JERSY SHAPED</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>OTHER SPORTS</strong>\n                </div>\n            </div>\n          \n            \n        </div>\n    \n    \n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sportscakes/Other_Sports_and_games/othersportsandgames.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sportscakes/Other_Sports_and_games/othersportsandgames.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n        <h3>Other Sports And Games Cakes</h3>\n        <hr>\n        <div class=\"card-group 1\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GYM CAKES</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FOOTBALL</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>TENNIS</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GOLF</strong>\n                </div>\n            </div>\n        </div>\n    \n    \n    \n        <div class=\"card-group b\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FORMULA 1</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>JERSY SHAPED</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>OTHER SPORTS</strong>\n                </div>\n            </div>\n          \n            \n        </div>\n    \n    \n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sportscakes/footballcakes/footballcakes.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sportscakes/footballcakes/footballcakes.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n        <h3>Football Cakes</h3>\n        <hr>\n        <div class=\"card-group 1\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GYM CAKES</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FOOTBALL</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>TENNIS</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GOLF</strong>\n                </div>\n            </div>\n        </div>\n    \n    \n    \n        <div class=\"card-group b\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FORMULA 1</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>JERSY SHAPED</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>OTHER SPORTS</strong>\n                </div>\n            </div>\n          \n            \n        </div>\n    \n    \n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sportscakes/formula_1/formula1.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sportscakes/formula_1/formula1.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n        <h3>Formula 1 Cakes</h3>\n        <hr>\n        <div class=\"card-group 1\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GYM CAKES</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FOOTBALL</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>TENNIS</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GOLF</strong>\n                </div>\n            </div>\n        </div>\n    \n    \n    \n        <div class=\"card-group b\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FORMULA 1</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>JERSY SHAPED</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>OTHER SPORTS</strong>\n                </div>\n            </div>\n          \n            \n        </div>\n    \n    \n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sportscakes/golf/golf.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sportscakes/golf/golf.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n        <h3>Golf Cakes</h3>\n        <hr>\n        <div class=\"card-group 1\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GYM CAKES</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FOOTBALL</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>TENNIS</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GOLF</strong>\n                </div>\n            </div>\n        </div>\n    \n    \n    \n        <div class=\"card-group b\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FORMULA 1</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>JERSY SHAPED</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>OTHER SPORTS</strong>\n                </div>\n            </div>\n          \n            \n        </div>\n    \n    \n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sportscakes/gymcakes/gymcakes.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sportscakes/gymcakes/gymcakes.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n        <h3>Gym Cakes</h3>\n        <hr>\n        <div class=\"card-group 1\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GYM CAKES</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FOOTBALL</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>TENNIS</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GOLF</strong>\n                </div>\n            </div>\n        </div>\n    \n    \n    \n        <div class=\"card-group b\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FORMULA 1</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>JERSY SHAPED</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>OTHER SPORTS</strong>\n                </div>\n            </div>\n          \n            \n        </div>\n    \n    \n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sportscakes/sportscakes.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sportscakes/sportscakes.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n    <h3>SPORTS CAKES</h3>\n    <hr>\n    <div class=\"card-group 1\">\n        <div class=\"card\">\n            <a routerLink=\"/sportscakes/gymcakes\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Superheroes\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GYM CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLink=\"/sportscakes/footballcakes\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Cartoon characters\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FOOTBALL CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLInk=\"/sportscakes/golf\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"James bond\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>GOLF CAKES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLInk=\"/sportscakes/jerseyshaped\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"1st/25th/50th Birthday\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>JERSEY SHAPED</strong>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"card-group b\">\n        <div class=\"card\">\n            <a routerLInk=\"/sportscakes/other_sports_and_games\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"All Disney princesses\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>OTHER SPORTS AND GAMES</strong>\n            </div>\n        </div>\n        <div class=\"card\">\n            <a routerLInk=\"/sportscakes/tennis\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>TENNIS</strong>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <a routerLInk=\"/sportscakes/formulacakes\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"Camera cake\"></a>\n            <div class=\"card-body\">\n            </div>\n            <div class=\"card-footer\">\n                <strong>FORMULA CAKES</strong>\n            </div>\n        </div>\n        \n        </div>\n     <br>\n\n    <hr> <br>\n    <div class=\"desc\">\n        Birthdays call for a special treat and what better way than to pick your favourite \n                    butter cream, fresh cream or the best of chocolate cakes to quench your thirst for \n                    sweet treats. Our birthday cakes are decked in rich cream or icing and can all be \n                    personalised with heartfelt messages, pictures and toppers of your choice.\n\n                    Birthday parties with their usual rituals like blowing out candles, making a wish \n                    need a traditional birthday cake large enough or small enough for the expected crowd. \n                    We master in delivering cakes of all sizes as each party is unique and deserves a cake that goes well with the occasion and taste delicious.\n                    \n                    With us you have the complete liberty to personalize the birthday cake as you wish.\n                     We can add some memorable images that would be edible and make the cake a memorable piece.              \n                    With us your birthday cakes option have no limits. Starting from the popular favourites\n                    like icing, chocolate and fresh cream to themed cakes and picture cakes, we have it all. So \n                    take a look around pick your favourite and we will have it delivered for your special event.\n                     You can also have your own cake built from scratch with our cake builder, check it out.\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sportscakes/tennis/tennis.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sportscakes/tennis/tennis.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crd\">\n        <h3>Tennis Cakes</h3>\n        <hr>\n        <div class=\"card-group 1\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"gym cake\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GYM CAKES</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"football\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FOOTBALL</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"tennis\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>TENNIS</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"golf\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>GOLF</strong>\n                </div>\n            </div>\n        </div>\n    \n    \n    \n        <div class=\"card-group b\">\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"formula 1\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>FORMULA 1</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"jersy shaped\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>JERSY SHAPED</strong>\n                </div>\n            </div>\n            <div class=\"card\">\n                <a routerLink=\"/cakeform\"><img class=\"card-img-top\" src=\"../../assets/p7.png\" alt=\"other sports\"></a>\n                <div class=\"card-body\">\n                </div>\n                <div class=\"card-footer\">\n                    <strong>OTHER SPORTS</strong>\n                </div>\n            </div>\n          \n            \n        </div>\n    \n    \n    </div>\n    "

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    text-align: center;\n    color:brown;\n}\nhr{\n    color: #000;\n    width: 60%;\n}\n.row{\n    margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOmJyb3duO1xufVxuaHJ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgd2lkdGg6IDYwJTtcbn1cbi5yb3d7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background-color: antiquewhite;\n    color: rgb(0, 0, 0);\n    width: 100%;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\nh3{\n    padding-top: 2%;\n    text-align: center;\n}\n.main {\n   text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHdFQUF3RTtBQUM1RTtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0dBQ0csa0JBQWtCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuaDN7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluIHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AdminComponent = class AdminComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ngOnInit() { }
    NewsRegister() {
        // this.http.get('http://localhost:3000/newsregister').subscribe(() => {
        //     console.log('news runing');
        //   }, error => {
        //     console.log(error);
        //   });
    }
    // OffersRegister() {
    //     // this.http.get('http://localhost:3000/offersregister').subscribe(() => {
    //     //     console.log('news runing');
    //     //   }, error => {
    //     //     console.log(error);
    //     //   });
    // }
    CakesRegister() {
        // this.http.get('http://localhost:3000/cakesregister').subscribe(() => {
        //     console.log('news runing');
        //   }, error => {
        //     console.log(error);
        //   });
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/offerspage/alloffers/alloffers.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/offerspage/alloffers/alloffers.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL29mZmVyc3BhZ2UvYWxsb2ZmZXJzL2FsbG9mZmVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/offerspage/alloffers/alloffers.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/offerspage/alloffers/alloffers.component.ts ***!
  \*******************************************************************/
/*! exports provided: AllOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOffersComponent", function() { return AllOffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AllOffersComponent = class AllOffersComponent {
    // public data: OffersData[] = [];
    // constructor(public http: HttpClient) {}
    ngOnInit() {
        // this.http.get<OffersData[]>('http://localhost:3000/getalloffers')
        //          .map((res: any) => res.Record.map(r => this.data));
    }
};
AllOffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./alloffers.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/offerspage/alloffers/alloffers.component.html"),
        styles: [__webpack_require__(/*! ./alloffers.component.css */ "./src/app/admin/offerspage/alloffers/alloffers.component.css")]
    })
], AllOffersComponent);



/***/ }),

/***/ "./src/app/admin/offerspage/offers.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/offerspage/offers.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n    background-color: antiquewhite;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vb2ZmZXJzcGFnZS9vZmZlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9vZmZlcnNwYWdlL29mZmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/offerspage/offers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/offerspage/offers.component.ts ***!
  \******************************************************/
/*! exports provided: OffersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageComponent", function() { return OffersPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let OffersPageComponent = class OffersPageComponent {
    constructor(http) {
        this.http = http;
    }
    OffersUpdate() {
    }
    OffersDelete() {
    }
};
OffersPageComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OffersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offerspage',
        template: __webpack_require__(/*! raw-loader!./offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/offerspage/offers.component.html"),
        styles: [__webpack_require__(/*! ./offers.component.css */ "./src/app/admin/offerspage/offers.component.css")]
    })
], OffersPageComponent);



/***/ }),

/***/ "./src/app/admin/offerspage/offersreg/offersreg.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/offerspage/offersreg/offersreg.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outercard{\n    height: 100%;\n    width: 100%;\n    background-color: blanchedalmond;\n    padding-bottom: 40px;\n    }\n    .innercard{\n      margin: auto;\n      background-color: white;\n      height: 550px;\n      width: 800px;\n      color: black;\n    }\n    mat-card-title {\n      text-align: center;\n      padding: 20px;\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      font-size: 30px;\n    }\n    form{\n      padding: 4% 0% 0% 0%;\n    }\n    mat-form-field {\n      margin-left: 100px;\n      color: black;\n      width: 60%;\n      border-bottom-color: wheat;\n    }\n    matInput{\n      border: 0px 0px 1px 0px solid wheat;\n    }\n    form {\n      font-size: 16px;\n    }\n    .butn button{\n      background-color: rgb(119, 202, 113);\n      color: antiquewhite;\n    }\n    div{\n      margin-left: 100px;\n    }\n    a{\n      text-decoration: none;\n    }\n   \n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vb2ZmZXJzcGFnZS9vZmZlcnNyZWcvb2ZmZXJzcmVnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEI7SUFDQTtNQUNFLFlBQVk7TUFDWix1QkFBdUI7TUFDdkIsYUFBYTtNQUNiLFlBQVk7TUFDWixZQUFZO0lBQ2Q7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsNERBQTREO01BQzVELGVBQWU7SUFDakI7SUFDQTtNQUNFLG9CQUFvQjtJQUN0QjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixVQUFVO01BQ1YsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLGVBQWU7SUFDakI7SUFDQTtNQUNFLG9DQUFvQztNQUNwQyxtQkFBbUI7SUFDckI7SUFDQTtNQUNFLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UscUJBQXFCO0lBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vb2ZmZXJzcGFnZS9vZmZlcnNyZWcvb2ZmZXJzcmVnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJjYXJke1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICB9XG4gICAgLmlubmVyY2FyZHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgaGVpZ2h0OiA1NTBweDtcbiAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgbWF0LWNhcmQtdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgZm9ybXtcbiAgICAgIHBhZGRpbmc6IDQlIDAlIDAlIDAlO1xuICAgIH1cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hlYXQ7XG4gICAgfVxuICAgIG1hdElucHV0e1xuICAgICAgYm9yZGVyOiAwcHggMHB4IDFweCAwcHggc29saWQgd2hlYXQ7XG4gICAgfVxuICAgIGZvcm0ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuYnV0biBidXR0b257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE5LCAyMDIsIDExMyk7XG4gICAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIH1cbiAgICBkaXZ7XG4gICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgfVxuICAgIGF7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgXG4gICAgIl19 */"

/***/ }),

/***/ "./src/app/admin/offerspage/offersreg/offersreg.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/offerspage/offersreg/offersreg.component.ts ***!
  \*******************************************************************/
/*! exports provided: OffersregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersregComponent", function() { return OffersregComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let OffersregComponent = class OffersregComponent {
    constructor(http) {
        this.http = http;
        this.selectedFile = null;
    }
    ngOnInit() { }
    selectedImage(event) {
        // console.log(event);
        if (event.target.files.length > 0) {
            this.selectedFile = event.target.files[0];
        }
    }
    Offersreg(form) {
        // const payload = new HttpParams()
        // .set('Heading', form.value.heading)
        // .set('Subheading', form.value.subheading )
        // .set('Text', form.value.content )
        // .set('image', form.value.image);
        const offerdata = new FormData();
        offerdata.append('Heading', form.value.heading);
        offerdata.append('Subheading', form.value.subheading);
        offerdata.append('Text', form.value.content);
        offerdata.append('image', this.selectedFile, this.selectedFile.name);
        // console.log(offerdata);
        this.http.post('http://localhost:3000/api/user/offersregister', offerdata).subscribe(() => {
            // console.log('news runing');
        }, error => {
            console.log(error);
        });
    }
};
OffersregComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OffersregComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offersreg',
        template: __webpack_require__(/*! raw-loader!./offersreg.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/offerspage/offersreg/offersreg.component.html"),
        styles: [__webpack_require__(/*! ./offersreg.component.css */ "./src/app/admin/offerspage/offersreg/offersreg.component.css")]
    })
], OffersregComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offers/offers.component */ "./src/app/offers/offers.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _birthdaycakes_birthdaycakes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./birthdaycakes/birthdaycakes.component */ "./src/app/birthdaycakes/birthdaycakes.component.ts");
/* harmony import */ var _sportscakes_sportscakes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sportscakes/sportscakes.component */ "./src/app/sportscakes/sportscakes.component.ts");
/* harmony import */ var _ourcakes_ourcakes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ourcakes/ourcakes.component */ "./src/app/ourcakes/ourcakes.component.ts");
/* harmony import */ var _specialcakes_specialcakes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./specialcakes/specialcakes.component */ "./src/app/specialcakes/specialcakes.component.ts");
/* harmony import */ var _sportscakes_footballcakes_footballcakes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sportscakes/footballcakes/footballcakes.component */ "./src/app/sportscakes/footballcakes/footballcakes.component.ts");
/* harmony import */ var _sportscakes_gymcakes_gymcakes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sportscakes/gymcakes/gymcakes.component */ "./src/app/sportscakes/gymcakes/gymcakes.component.ts");
/* harmony import */ var _specialcakes_all_sports_all_sports_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./specialcakes/all_sports/all_sports.component */ "./src/app/specialcakes/all_sports/all_sports.component.ts");
/* harmony import */ var _ourcakes_baby_shower_baby_shower_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ourcakes/baby_shower/baby_shower.component */ "./src/app/ourcakes/baby_shower/baby_shower.component.ts");
/* harmony import */ var _birthdaycakes_superheroes_super_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./birthdaycakes/superheroes/super.component */ "./src/app/birthdaycakes/superheroes/super.component.ts");
/* harmony import */ var _cakeform_cakeform_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cakeform/cakeform.component */ "./src/app/cakeform/cakeform.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _newsregister_newsreg_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./newsregister/newsreg.component */ "./src/app/newsregister/newsreg.component.ts");
/* harmony import */ var _cakecategory_cakecategoryreg_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cakecategory/cakecategoryreg.component */ "./src/app/cakecategory/cakecategoryreg.component.ts");
/* harmony import */ var _admin_offerspage_offersreg_offersreg_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/offerspage/offersreg/offersreg.component */ "./src/app/admin/offerspage/offersreg/offersreg.component.ts");
/* harmony import */ var _cakereg_cakereg_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cakereg/cakereg.component */ "./src/app/cakereg/cakereg.component.ts");
/* harmony import */ var _ourcakes_wedding_wedding_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ourcakes/wedding/wedding.component */ "./src/app/ourcakes/wedding/wedding.component.ts");
/* harmony import */ var _ourcakes_mohersday_mothers_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ourcakes/mohersday/mothers.component */ "./src/app/ourcakes/mohersday/mothers.component.ts");
/* harmony import */ var _ourcakes_fathersday_fathers_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ourcakes/fathersday/fathers.component */ "./src/app/ourcakes/fathersday/fathers.component.ts");
/* harmony import */ var _ourcakes_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ourcakes/corporate/corporate.component */ "./src/app/ourcakes/corporate/corporate.component.ts");
/* harmony import */ var _ourcakes_adult_adult_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ourcakes/adult/adult.component */ "./src/app/ourcakes/adult/adult.component.ts");
/* harmony import */ var _ourcakes_newyear_newyear_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ourcakes/newyear/newyear.component */ "./src/app/ourcakes/newyear/newyear.component.ts");
/* harmony import */ var _ourcakes_valentinesday_valentinesday_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ourcakes/valentinesday/valentinesday.component */ "./src/app/ourcakes/valentinesday/valentinesday.component.ts");
/* harmony import */ var _ourcakes_anniversary_anniversary_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ourcakes/anniversary/anniversary.component */ "./src/app/ourcakes/anniversary/anniversary.component.ts");
/* harmony import */ var _birthdaycakes_cartoonchar_cartoonchar_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./birthdaycakes/cartoonchar/cartoonchar.component */ "./src/app/birthdaycakes/cartoonchar/cartoonchar.component.ts");
/* harmony import */ var _birthdaycakes_jamesbond_jamesbond_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./birthdaycakes/jamesbond/jamesbond.component */ "./src/app/birthdaycakes/jamesbond/jamesbond.component.ts");
/* harmony import */ var _birthdaycakes_1st25th50thbday_1st_25th_50th_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./birthdaycakes/1st25th50thbday/1st_25th_50th.component */ "./src/app/birthdaycakes/1st25th50thbday/1st_25th_50th.component.ts");
/* harmony import */ var _birthdaycakes_disneyprincess_disneyprincess_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./birthdaycakes/disneyprincess/disneyprincess.component */ "./src/app/birthdaycakes/disneyprincess/disneyprincess.component.ts");
/* harmony import */ var _birthdaycakes_cameracake_cameracake_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./birthdaycakes/cameracake/cameracake.component */ "./src/app/birthdaycakes/cameracake/cameracake.component.ts");
/* harmony import */ var _birthdaycakes_hardwaretool_harwaretool_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./birthdaycakes/hardwaretool/harwaretool.component */ "./src/app/birthdaycakes/hardwaretool/harwaretool.component.ts");
/* harmony import */ var _birthdaycakes_crown_tiara_crown_tiara_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./birthdaycakes/crown_tiara/crown_tiara.component */ "./src/app/birthdaycakes/crown_tiara/crown_tiara.component.ts");
/* harmony import */ var _birthdaycakes_videogames_videogames_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./birthdaycakes/videogames/videogames.component */ "./src/app/birthdaycakes/videogames/videogames.component.ts");
/* harmony import */ var _specialcakes_house_warming_house_warming_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./specialcakes/house_warming/house_warming.component */ "./src/app/specialcakes/house_warming/house_warming.component.ts");
/* harmony import */ var _specialcakes_easter_easter_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./specialcakes/easter/easter.component */ "./src/app/specialcakes/easter/easter.component.ts");
/* harmony import */ var _specialcakes_christmas_christmas_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./specialcakes/christmas/christmas.component */ "./src/app/specialcakes/christmas/christmas.component.ts");
/* harmony import */ var _specialcakes_baptism_baptism_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./specialcakes/baptism/baptism.component */ "./src/app/specialcakes/baptism/baptism.component.ts");
/* harmony import */ var _specialcakes_gender_reveal_genderrev_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./specialcakes/gender_reveal/genderrev.component */ "./src/app/specialcakes/gender_reveal/genderrev.component.ts");
/* harmony import */ var _specialcakes_graduation_graduation_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./specialcakes/graduation/graduation.component */ "./src/app/specialcakes/graduation/graduation.component.ts");
/* harmony import */ var _corporatecakes_corporatecakes_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./corporatecakes/corporatecakes.component */ "./src/app/corporatecakes/corporatecakes.component.ts");
/* harmony import */ var _personalizedcakes_personalizedcakes_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./personalizedcakes/personalizedcakes.component */ "./src/app/personalizedcakes/personalizedcakes.component.ts");
/* harmony import */ var _corporatecakes_boat_boat_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./corporatecakes/boat/boat.component */ "./src/app/corporatecakes/boat/boat.component.ts");
/* harmony import */ var _corporatecakes_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./corporatecakes/doctor/doctor.component */ "./src/app/corporatecakes/doctor/doctor.component.ts");
/* harmony import */ var _corporatecakes_football_clubs_footballclubs_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./corporatecakes/football_clubs/footballclubs.component */ "./src/app/corporatecakes/football_clubs/footballclubs.component.ts");
/* harmony import */ var _corporatecakes_lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./corporatecakes/lawyer/lawyer.component */ "./src/app/corporatecakes/lawyer/lawyer.component.ts");
/* harmony import */ var _corporatecakes_music_equipment_musiceq_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./corporatecakes/music_equipment/musiceq.component */ "./src/app/corporatecakes/music_equipment/musiceq.component.ts");
/* harmony import */ var _corporatecakes_poker_casino_pokercasino_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./corporatecakes/poker_casino/pokercasino.component */ "./src/app/corporatecakes/poker_casino/pokercasino.component.ts");
/* harmony import */ var _corporatecakes_religious_theme_religioustheme_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./corporatecakes/religious_theme/religioustheme.component */ "./src/app/corporatecakes/religious_theme/religioustheme.component.ts");
/* harmony import */ var _corporatecakes_safai_jungle_safaejungle_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./corporatecakes/safai_jungle/safaejungle.component */ "./src/app/corporatecakes/safai_jungle/safaejungle.component.ts");
/* harmony import */ var _corporatecakes_watch_brands_watchbrands_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./corporatecakes/watch_brands/watchbrands.component */ "./src/app/corporatecakes/watch_brands/watchbrands.component.ts");
/* harmony import */ var _personalizedcakes_comic_theme_comictheme_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./personalizedcakes/comic_theme/comictheme.component */ "./src/app/personalizedcakes/comic_theme/comictheme.component.ts");
/* harmony import */ var _personalizedcakes_alcohol_theme_alcoholtheme_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./personalizedcakes/alcohol_theme/alcoholtheme.component */ "./src/app/personalizedcakes/alcohol_theme/alcoholtheme.component.ts");
/* harmony import */ var _personalizedcakes_dog_shaped_dogshaped_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./personalizedcakes/dog_shaped/dogshaped.component */ "./src/app/personalizedcakes/dog_shaped/dogshaped.component.ts");
/* harmony import */ var _personalizedcakes_number_shaped_numbershaped_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./personalizedcakes/number_shaped/numbershaped.component */ "./src/app/personalizedcakes/number_shaped/numbershaped.component.ts");
/* harmony import */ var _sportscakes_golf_golf_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./sportscakes/golf/golf.component */ "./src/app/sportscakes/golf/golf.component.ts");
/* harmony import */ var _sportscakes_Jersey_shaped_jerseyshaped_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./sportscakes/Jersey_shaped/jerseyshaped.component */ "./src/app/sportscakes/Jersey_shaped/jerseyshaped.component.ts");
/* harmony import */ var _sportscakes_Other_Sports_and_games_othersportsandgames_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./sportscakes/Other_Sports_and_games/othersportsandgames.component */ "./src/app/sportscakes/Other_Sports_and_games/othersportsandgames.component.ts");
/* harmony import */ var _sportscakes_tennis_tennis_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./sportscakes/tennis/tennis.component */ "./src/app/sportscakes/tennis/tennis.component.ts");
/* harmony import */ var _sportscakes_formula_1_formula1_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./sportscakes/formula_1/formula1.component */ "./src/app/sportscakes/formula_1/formula1.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _admin_offerspage_offers_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./admin/offerspage/offers.component */ "./src/app/admin/offerspage/offers.component.ts");
/* harmony import */ var _admin_offerspage_alloffers_alloffers_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./admin/offerspage/alloffers/alloffers.component */ "./src/app/admin/offerspage/alloffers/alloffers.component.ts");







































































const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"] },
    { path: 'offers', component: _offers_offers_component__WEBPACK_IMPORTED_MODULE_7__["OffersComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'register', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
    { path: 'cakeform', component: _cakeform_cakeform_component__WEBPACK_IMPORTED_MODULE_20__["CakeformComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"] },
    { path: 'admin/cakecatreg', component: _cakecategory_cakecategoryreg_component__WEBPACK_IMPORTED_MODULE_23__["CakescategoryregComponent"] },
    { path: 'admin/newsregform', component: _newsregister_newsreg_component__WEBPACK_IMPORTED_MODULE_22__["NewsregComponent"] },
    { path: 'admin/offerspage', component: _admin_offerspage_offers_component__WEBPACK_IMPORTED_MODULE_69__["OffersPageComponent"] },
    { path: 'admin/offersreg', component: _admin_offerspage_offersreg_offersreg_component__WEBPACK_IMPORTED_MODULE_24__["OffersregComponent"] },
    { path: 'admin/alloffers', component: _admin_offerspage_alloffers_alloffers_component__WEBPACK_IMPORTED_MODULE_70__["AllOffersComponent"] },
    { path: 'admin/cakereg', component: _cakereg_cakereg_component__WEBPACK_IMPORTED_MODULE_25__["CakesregComponent"] },
    { path: 'birthdaycakes', component: _birthdaycakes_birthdaycakes_component__WEBPACK_IMPORTED_MODULE_11__["BirthdaycakesComponent"] },
    { path: 'birthdaycakes/superheroes', component: _birthdaycakes_superheroes_super_component__WEBPACK_IMPORTED_MODULE_19__["SuperheroescakesComponent"] },
    { path: 'birthdaycakes/cartoonchar', component: _birthdaycakes_cartoonchar_cartoonchar_component__WEBPACK_IMPORTED_MODULE_34__["CartooncharcakesComponent"] },
    { path: 'birthdaycakes/jamesbond', component: _birthdaycakes_jamesbond_jamesbond_component__WEBPACK_IMPORTED_MODULE_35__["JamesBondcakesComponent"] },
    { path: 'birthdaycakes/1st25th50thbday', component: _birthdaycakes_1st25th50thbday_1st_25th_50th_component__WEBPACK_IMPORTED_MODULE_36__["Birthday1st25th50thComponent"] },
    { path: 'birthdaycakes/disneyprincess', component: _birthdaycakes_disneyprincess_disneyprincess_component__WEBPACK_IMPORTED_MODULE_37__["DisneyPrincesscakesComponent"] },
    { path: 'birthdaycakes/cameracake', component: _birthdaycakes_cameracake_cameracake_component__WEBPACK_IMPORTED_MODULE_38__["CameracakesComponent"] },
    { path: 'birthdaycakes/hardwaretool', component: _birthdaycakes_hardwaretool_harwaretool_component__WEBPACK_IMPORTED_MODULE_39__["HarwaretoolcakesComponent"] },
    { path: 'birthdaycakes/crown_tiara', component: _birthdaycakes_crown_tiara_crown_tiara_component__WEBPACK_IMPORTED_MODULE_40__["CrowntiaracakesComponent"] },
    { path: 'birthdaycakes/videogames', component: _birthdaycakes_videogames_videogames_component__WEBPACK_IMPORTED_MODULE_41__["VideogamecakesComponent"] },
    { path: 'corporatecakes', component: _corporatecakes_corporatecakes_component__WEBPACK_IMPORTED_MODULE_48__["CorporatecakesComponent"] },
    { path: 'corporatecakes/boat', component: _corporatecakes_boat_boat_component__WEBPACK_IMPORTED_MODULE_50__["BoatcakesComponent"] },
    { path: 'corporatecakes/doctor', component: _corporatecakes_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_51__["DoctorcakesComponent"] },
    { path: 'corporatecakes/football_clubs', component: _corporatecakes_football_clubs_footballclubs_component__WEBPACK_IMPORTED_MODULE_52__["FootballclubscakesComponent"] },
    { path: 'corporatecakes/lawyer', component: _corporatecakes_lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_53__["LawyercakesComponent"] },
    { path: 'corporatecakes/music_equipment', component: _corporatecakes_music_equipment_musiceq_component__WEBPACK_IMPORTED_MODULE_54__["MusiceqcakesComponent"] },
    { path: 'corporatecakes/poker_casino', component: _corporatecakes_poker_casino_pokercasino_component__WEBPACK_IMPORTED_MODULE_55__["PokercasinocakesComponent"] },
    { path: 'corporatecakes/religious_theme', component: _corporatecakes_religious_theme_religioustheme_component__WEBPACK_IMPORTED_MODULE_56__["ReligiousthemecakesComponent"] },
    { path: 'corporatecakes/safai_jungle', component: _corporatecakes_safai_jungle_safaejungle_component__WEBPACK_IMPORTED_MODULE_57__["SafaejunglecakesComponent"] },
    { path: 'corporatecakes/watch_brands', component: _corporatecakes_watch_brands_watchbrands_component__WEBPACK_IMPORTED_MODULE_58__["WatchbrandscakesComponent"] },
    { path: 'personalizedcakes', component: _personalizedcakes_personalizedcakes_component__WEBPACK_IMPORTED_MODULE_49__["PersonalizedcakesComponent"] },
    { path: 'personalizedcakes/comic_theme', component: _personalizedcakes_comic_theme_comictheme_component__WEBPACK_IMPORTED_MODULE_59__["ComicthemecakesComponent"] },
    { path: 'personalizedcakes/alcohol_theme', component: _personalizedcakes_alcohol_theme_alcoholtheme_component__WEBPACK_IMPORTED_MODULE_60__["AlcoholthemecakesComponent"] },
    { path: 'personalizedcakes/dog_shaped', component: _personalizedcakes_dog_shaped_dogshaped_component__WEBPACK_IMPORTED_MODULE_61__["DogshapedcakesComponent"] },
    { path: 'personalizedcakes/number_shaped', component: _personalizedcakes_number_shaped_numbershaped_component__WEBPACK_IMPORTED_MODULE_62__["NumbershapedcakesComponent"] },
    { path: 'sportscakes', component: _sportscakes_sportscakes_component__WEBPACK_IMPORTED_MODULE_12__["SportscakesComponent"] },
    { path: 'sportscakes/golf', component: _sportscakes_golf_golf_component__WEBPACK_IMPORTED_MODULE_63__["GolfcakesComponent"] },
    { path: 'sportscakes/jerseyshaped', component: _sportscakes_Jersey_shaped_jerseyshaped_component__WEBPACK_IMPORTED_MODULE_64__["JerseyshapedcakesComponent"] },
    { path: 'sportscakes/other_sports_and_games', component: _sportscakes_Other_Sports_and_games_othersportsandgames_component__WEBPACK_IMPORTED_MODULE_65__["OthersportsandgamescakesComponent"] },
    { path: 'sportscakes/tennis', component: _sportscakes_tennis_tennis_component__WEBPACK_IMPORTED_MODULE_66__["TenniscakesComponent"] },
    { path: 'sportscakes/gymcakes', component: _sportscakes_gymcakes_gymcakes_component__WEBPACK_IMPORTED_MODULE_16__["GymcakesComponent"] },
    { path: 'sportscakes/footballcakes', component: _sportscakes_footballcakes_footballcakes_component__WEBPACK_IMPORTED_MODULE_15__["FootballcakesComponent"] },
    { path: 'sportscakes/formulacakes', component: _sportscakes_formula_1_formula1_component__WEBPACK_IMPORTED_MODULE_67__["Formula1cakesComponent"] },
    { path: 'ourcakes', component: _ourcakes_ourcakes_component__WEBPACK_IMPORTED_MODULE_13__["OurcakesComponent"] },
    { path: 'ourcakes/baby_shower', component: _ourcakes_baby_shower_baby_shower_component__WEBPACK_IMPORTED_MODULE_18__["BabyshowerComponent"] },
    { path: 'ourcakes/wedding', component: _ourcakes_wedding_wedding_component__WEBPACK_IMPORTED_MODULE_26__["WeddingComponent"] },
    { path: 'ourcakes/mothersday', component: _ourcakes_mohersday_mothers_component__WEBPACK_IMPORTED_MODULE_27__["MothersDayComponent"] },
    { path: 'ourcakes/fathersday', component: _ourcakes_fathersday_fathers_component__WEBPACK_IMPORTED_MODULE_28__["FathersDayComponent"] },
    { path: 'ourcakes/corporate', component: _ourcakes_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_29__["CorporateComponent"] },
    { path: 'ourcakes/adult', component: _ourcakes_adult_adult_component__WEBPACK_IMPORTED_MODULE_30__["AdultsComponent"] },
    { path: 'ourcakes/newyear', component: _ourcakes_newyear_newyear_component__WEBPACK_IMPORTED_MODULE_31__["NewYearComponent"] },
    { path: 'ourcakes/valentinesday', component: _ourcakes_valentinesday_valentinesday_component__WEBPACK_IMPORTED_MODULE_32__["ValentinesDayComponent"] },
    { path: 'ourcakes/anniversary', component: _ourcakes_anniversary_anniversary_component__WEBPACK_IMPORTED_MODULE_33__["AnniversaryComponent"] },
    { path: 'specialcakes', component: _specialcakes_specialcakes_component__WEBPACK_IMPORTED_MODULE_14__["SpecialcakesComponent"] },
    { path: 'specialcakes/all_sports', component: _specialcakes_all_sports_all_sports_component__WEBPACK_IMPORTED_MODULE_17__["AllcakesComponent"] },
    { path: 'specialcakes/house_warming', component: _specialcakes_house_warming_house_warming_component__WEBPACK_IMPORTED_MODULE_42__["HousewarmingcakesComponent"] },
    { path: 'specialcakes/easter', component: _specialcakes_easter_easter_component__WEBPACK_IMPORTED_MODULE_43__["EastercakesComponent"] },
    { path: 'specialcakes/christmas', component: _specialcakes_christmas_christmas_component__WEBPACK_IMPORTED_MODULE_44__["ChristmascakesComponent"] },
    { path: 'specialcakes/baptism', component: _specialcakes_baptism_baptism_component__WEBPACK_IMPORTED_MODULE_45__["BaptismcakesComponent"] },
    { path: 'specialcakes/gender_reveal', component: _specialcakes_gender_reveal_genderrev_component__WEBPACK_IMPORTED_MODULE_46__["GenderrevcakesComponent"] },
    { path: 'specialcakes/graduation', component: _specialcakes_graduation_graduation_component__WEBPACK_IMPORTED_MODULE_47__["GraduationcakesComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_68__["CartComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'cake';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./offers/offers.component */ "./src/app/offers/offers.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _birthdaycakes_birthdaycakes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./birthdaycakes/birthdaycakes.component */ "./src/app/birthdaycakes/birthdaycakes.component.ts");
/* harmony import */ var _sportscakes_sportscakes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sportscakes/sportscakes.component */ "./src/app/sportscakes/sportscakes.component.ts");
/* harmony import */ var _ourcakes_ourcakes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ourcakes/ourcakes.component */ "./src/app/ourcakes/ourcakes.component.ts");
/* harmony import */ var _specialcakes_specialcakes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./specialcakes/specialcakes.component */ "./src/app/specialcakes/specialcakes.component.ts");
/* harmony import */ var _sportscakes_gymcakes_gymcakes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sportscakes/gymcakes/gymcakes.component */ "./src/app/sportscakes/gymcakes/gymcakes.component.ts");
/* harmony import */ var _sportscakes_footballcakes_footballcakes_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sportscakes/footballcakes/footballcakes.component */ "./src/app/sportscakes/footballcakes/footballcakes.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _specialcakes_all_sports_all_sports_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./specialcakes/all_sports/all_sports.component */ "./src/app/specialcakes/all_sports/all_sports.component.ts");
/* harmony import */ var _ourcakes_baby_shower_baby_shower_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ourcakes/baby_shower/baby_shower.component */ "./src/app/ourcakes/baby_shower/baby_shower.component.ts");
/* harmony import */ var _birthdaycakes_superheroes_super_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./birthdaycakes/superheroes/super.component */ "./src/app/birthdaycakes/superheroes/super.component.ts");
/* harmony import */ var _cakeform_cakeform_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cakeform/cakeform.component */ "./src/app/cakeform/cakeform.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _newsregister_newsreg_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./newsregister/newsreg.component */ "./src/app/newsregister/newsreg.component.ts");
/* harmony import */ var _cakecategory_cakecategoryreg_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cakecategory/cakecategoryreg.component */ "./src/app/cakecategory/cakecategoryreg.component.ts");
/* harmony import */ var _admin_offerspage_offersreg_offersreg_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/offerspage/offersreg/offersreg.component */ "./src/app/admin/offerspage/offersreg/offersreg.component.ts");
/* harmony import */ var _cakereg_cakereg_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./cakereg/cakereg.component */ "./src/app/cakereg/cakereg.component.ts");
/* harmony import */ var _ourcakes_wedding_wedding_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ourcakes/wedding/wedding.component */ "./src/app/ourcakes/wedding/wedding.component.ts");
/* harmony import */ var _ourcakes_mohersday_mothers_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ourcakes/mohersday/mothers.component */ "./src/app/ourcakes/mohersday/mothers.component.ts");
/* harmony import */ var _ourcakes_fathersday_fathers_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ourcakes/fathersday/fathers.component */ "./src/app/ourcakes/fathersday/fathers.component.ts");
/* harmony import */ var _ourcakes_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ourcakes/corporate/corporate.component */ "./src/app/ourcakes/corporate/corporate.component.ts");
/* harmony import */ var _ourcakes_adult_adult_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ourcakes/adult/adult.component */ "./src/app/ourcakes/adult/adult.component.ts");
/* harmony import */ var _ourcakes_newyear_newyear_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ourcakes/newyear/newyear.component */ "./src/app/ourcakes/newyear/newyear.component.ts");
/* harmony import */ var _ourcakes_valentinesday_valentinesday_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ourcakes/valentinesday/valentinesday.component */ "./src/app/ourcakes/valentinesday/valentinesday.component.ts");
/* harmony import */ var _ourcakes_anniversary_anniversary_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ourcakes/anniversary/anniversary.component */ "./src/app/ourcakes/anniversary/anniversary.component.ts");
/* harmony import */ var _birthdaycakes_cartoonchar_cartoonchar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./birthdaycakes/cartoonchar/cartoonchar.component */ "./src/app/birthdaycakes/cartoonchar/cartoonchar.component.ts");
/* harmony import */ var _birthdaycakes_jamesbond_jamesbond_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./birthdaycakes/jamesbond/jamesbond.component */ "./src/app/birthdaycakes/jamesbond/jamesbond.component.ts");
/* harmony import */ var _birthdaycakes_1st25th50thbday_1st_25th_50th_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./birthdaycakes/1st25th50thbday/1st_25th_50th.component */ "./src/app/birthdaycakes/1st25th50thbday/1st_25th_50th.component.ts");
/* harmony import */ var _birthdaycakes_disneyprincess_disneyprincess_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./birthdaycakes/disneyprincess/disneyprincess.component */ "./src/app/birthdaycakes/disneyprincess/disneyprincess.component.ts");
/* harmony import */ var _birthdaycakes_cameracake_cameracake_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./birthdaycakes/cameracake/cameracake.component */ "./src/app/birthdaycakes/cameracake/cameracake.component.ts");
/* harmony import */ var _birthdaycakes_hardwaretool_harwaretool_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./birthdaycakes/hardwaretool/harwaretool.component */ "./src/app/birthdaycakes/hardwaretool/harwaretool.component.ts");
/* harmony import */ var _birthdaycakes_crown_tiara_crown_tiara_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./birthdaycakes/crown_tiara/crown_tiara.component */ "./src/app/birthdaycakes/crown_tiara/crown_tiara.component.ts");
/* harmony import */ var _birthdaycakes_videogames_videogames_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./birthdaycakes/videogames/videogames.component */ "./src/app/birthdaycakes/videogames/videogames.component.ts");
/* harmony import */ var _specialcakes_house_warming_house_warming_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./specialcakes/house_warming/house_warming.component */ "./src/app/specialcakes/house_warming/house_warming.component.ts");
/* harmony import */ var _specialcakes_easter_easter_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./specialcakes/easter/easter.component */ "./src/app/specialcakes/easter/easter.component.ts");
/* harmony import */ var _specialcakes_christmas_christmas_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./specialcakes/christmas/christmas.component */ "./src/app/specialcakes/christmas/christmas.component.ts");
/* harmony import */ var _specialcakes_baptism_baptism_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./specialcakes/baptism/baptism.component */ "./src/app/specialcakes/baptism/baptism.component.ts");
/* harmony import */ var _specialcakes_gender_reveal_genderrev_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./specialcakes/gender_reveal/genderrev.component */ "./src/app/specialcakes/gender_reveal/genderrev.component.ts");
/* harmony import */ var _specialcakes_graduation_graduation_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./specialcakes/graduation/graduation.component */ "./src/app/specialcakes/graduation/graduation.component.ts");
/* harmony import */ var _corporatecakes_corporatecakes_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./corporatecakes/corporatecakes.component */ "./src/app/corporatecakes/corporatecakes.component.ts");
/* harmony import */ var _personalizedcakes_personalizedcakes_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./personalizedcakes/personalizedcakes.component */ "./src/app/personalizedcakes/personalizedcakes.component.ts");
/* harmony import */ var _corporatecakes_watch_brands_watchbrands_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./corporatecakes/watch_brands/watchbrands.component */ "./src/app/corporatecakes/watch_brands/watchbrands.component.ts");
/* harmony import */ var _corporatecakes_boat_boat_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./corporatecakes/boat/boat.component */ "./src/app/corporatecakes/boat/boat.component.ts");
/* harmony import */ var _corporatecakes_safai_jungle_safaejungle_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./corporatecakes/safai_jungle/safaejungle.component */ "./src/app/corporatecakes/safai_jungle/safaejungle.component.ts");
/* harmony import */ var _corporatecakes_poker_casino_pokercasino_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./corporatecakes/poker_casino/pokercasino.component */ "./src/app/corporatecakes/poker_casino/pokercasino.component.ts");
/* harmony import */ var _corporatecakes_religious_theme_religioustheme_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./corporatecakes/religious_theme/religioustheme.component */ "./src/app/corporatecakes/religious_theme/religioustheme.component.ts");
/* harmony import */ var _corporatecakes_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./corporatecakes/doctor/doctor.component */ "./src/app/corporatecakes/doctor/doctor.component.ts");
/* harmony import */ var _corporatecakes_lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./corporatecakes/lawyer/lawyer.component */ "./src/app/corporatecakes/lawyer/lawyer.component.ts");
/* harmony import */ var _corporatecakes_music_equipment_musiceq_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./corporatecakes/music_equipment/musiceq.component */ "./src/app/corporatecakes/music_equipment/musiceq.component.ts");
/* harmony import */ var _corporatecakes_football_clubs_footballclubs_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./corporatecakes/football_clubs/footballclubs.component */ "./src/app/corporatecakes/football_clubs/footballclubs.component.ts");
/* harmony import */ var _personalizedcakes_comic_theme_comictheme_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./personalizedcakes/comic_theme/comictheme.component */ "./src/app/personalizedcakes/comic_theme/comictheme.component.ts");
/* harmony import */ var _personalizedcakes_number_shaped_numbershaped_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./personalizedcakes/number_shaped/numbershaped.component */ "./src/app/personalizedcakes/number_shaped/numbershaped.component.ts");
/* harmony import */ var _personalizedcakes_dog_shaped_dogshaped_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./personalizedcakes/dog_shaped/dogshaped.component */ "./src/app/personalizedcakes/dog_shaped/dogshaped.component.ts");
/* harmony import */ var _personalizedcakes_alcohol_theme_alcoholtheme_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./personalizedcakes/alcohol_theme/alcoholtheme.component */ "./src/app/personalizedcakes/alcohol_theme/alcoholtheme.component.ts");
/* harmony import */ var _sportscakes_formula_1_formula1_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./sportscakes/formula_1/formula1.component */ "./src/app/sportscakes/formula_1/formula1.component.ts");
/* harmony import */ var _sportscakes_golf_golf_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./sportscakes/golf/golf.component */ "./src/app/sportscakes/golf/golf.component.ts");
/* harmony import */ var _sportscakes_Jersey_shaped_jerseyshaped_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./sportscakes/Jersey_shaped/jerseyshaped.component */ "./src/app/sportscakes/Jersey_shaped/jerseyshaped.component.ts");
/* harmony import */ var _sportscakes_Other_Sports_and_games_othersportsandgames_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./sportscakes/Other_Sports_and_games/othersportsandgames.component */ "./src/app/sportscakes/Other_Sports_and_games/othersportsandgames.component.ts");
/* harmony import */ var _sportscakes_tennis_tennis_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./sportscakes/tennis/tennis.component */ "./src/app/sportscakes/tennis/tennis.component.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _cakeform_cakeform_service__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./cakeform/cakeform.service */ "./src/app/cakeform/cakeform.service.ts");
/* harmony import */ var _admin_offerspage_offers_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./admin/offerspage/offers.component */ "./src/app/admin/offerspage/offers.component.ts");
/* harmony import */ var _admin_offerspage_alloffers_alloffers_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./admin/offerspage/alloffers/alloffers.component */ "./src/app/admin/offerspage/alloffers/alloffers.component.ts");




























// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import {AngularFireModule} from '@angular/fire';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
// import {AngularFireAuthModule} from 'angularfire2/auth';
// import { environment } from 'src/environments/environment';
























































// import { ProductService } from './cart/services/product.service';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
            _news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"],
            _offers_offers_component__WEBPACK_IMPORTED_MODULE_13__["OffersComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_28__["AdminComponent"],
            _birthdaycakes_birthdaycakes_component__WEBPACK_IMPORTED_MODULE_17__["BirthdaycakesComponent"],
            _birthdaycakes_cartoonchar_cartoonchar_component__WEBPACK_IMPORTED_MODULE_41__["CartooncharcakesComponent"],
            _birthdaycakes_jamesbond_jamesbond_component__WEBPACK_IMPORTED_MODULE_42__["JamesBondcakesComponent"],
            _birthdaycakes_1st25th50thbday_1st_25th_50th_component__WEBPACK_IMPORTED_MODULE_43__["Birthday1st25th50thComponent"],
            _birthdaycakes_disneyprincess_disneyprincess_component__WEBPACK_IMPORTED_MODULE_44__["DisneyPrincesscakesComponent"],
            _birthdaycakes_cameracake_cameracake_component__WEBPACK_IMPORTED_MODULE_45__["CameracakesComponent"],
            _birthdaycakes_hardwaretool_harwaretool_component__WEBPACK_IMPORTED_MODULE_46__["HarwaretoolcakesComponent"],
            _birthdaycakes_crown_tiara_crown_tiara_component__WEBPACK_IMPORTED_MODULE_47__["CrowntiaracakesComponent"],
            _birthdaycakes_videogames_videogames_component__WEBPACK_IMPORTED_MODULE_48__["VideogamecakesComponent"],
            _corporatecakes_corporatecakes_component__WEBPACK_IMPORTED_MODULE_55__["CorporatecakesComponent"],
            _corporatecakes_watch_brands_watchbrands_component__WEBPACK_IMPORTED_MODULE_57__["WatchbrandscakesComponent"],
            _corporatecakes_boat_boat_component__WEBPACK_IMPORTED_MODULE_58__["BoatcakesComponent"],
            _corporatecakes_safai_jungle_safaejungle_component__WEBPACK_IMPORTED_MODULE_59__["SafaejunglecakesComponent"],
            _corporatecakes_poker_casino_pokercasino_component__WEBPACK_IMPORTED_MODULE_60__["PokercasinocakesComponent"],
            _corporatecakes_religious_theme_religioustheme_component__WEBPACK_IMPORTED_MODULE_61__["ReligiousthemecakesComponent"],
            _corporatecakes_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_62__["DoctorcakesComponent"],
            _corporatecakes_lawyer_lawyer_component__WEBPACK_IMPORTED_MODULE_63__["LawyercakesComponent"],
            _corporatecakes_music_equipment_musiceq_component__WEBPACK_IMPORTED_MODULE_64__["MusiceqcakesComponent"],
            _corporatecakes_football_clubs_footballclubs_component__WEBPACK_IMPORTED_MODULE_65__["FootballclubscakesComponent"],
            _personalizedcakes_personalizedcakes_component__WEBPACK_IMPORTED_MODULE_56__["PersonalizedcakesComponent"],
            _personalizedcakes_comic_theme_comictheme_component__WEBPACK_IMPORTED_MODULE_66__["ComicthemecakesComponent"],
            _personalizedcakes_number_shaped_numbershaped_component__WEBPACK_IMPORTED_MODULE_67__["NumbershapedcakesComponent"],
            _personalizedcakes_dog_shaped_dogshaped_component__WEBPACK_IMPORTED_MODULE_68__["DogshapedcakesComponent"],
            _personalizedcakes_alcohol_theme_alcoholtheme_component__WEBPACK_IMPORTED_MODULE_69__["AlcoholthemecakesComponent"],
            _sportscakes_sportscakes_component__WEBPACK_IMPORTED_MODULE_18__["SportscakesComponent"],
            _sportscakes_formula_1_formula1_component__WEBPACK_IMPORTED_MODULE_70__["Formula1cakesComponent"],
            _sportscakes_golf_golf_component__WEBPACK_IMPORTED_MODULE_71__["GolfcakesComponent"],
            _sportscakes_Jersey_shaped_jerseyshaped_component__WEBPACK_IMPORTED_MODULE_72__["JerseyshapedcakesComponent"],
            _sportscakes_Other_Sports_and_games_othersportsandgames_component__WEBPACK_IMPORTED_MODULE_73__["OthersportsandgamescakesComponent"],
            _sportscakes_tennis_tennis_component__WEBPACK_IMPORTED_MODULE_74__["TenniscakesComponent"],
            _sportscakes_gymcakes_gymcakes_component__WEBPACK_IMPORTED_MODULE_21__["GymcakesComponent"],
            _sportscakes_footballcakes_footballcakes_component__WEBPACK_IMPORTED_MODULE_22__["FootballcakesComponent"],
            _ourcakes_ourcakes_component__WEBPACK_IMPORTED_MODULE_19__["OurcakesComponent"],
            _ourcakes_baby_shower_baby_shower_component__WEBPACK_IMPORTED_MODULE_25__["BabyshowerComponent"],
            _ourcakes_wedding_wedding_component__WEBPACK_IMPORTED_MODULE_33__["WeddingComponent"],
            _ourcakes_mohersday_mothers_component__WEBPACK_IMPORTED_MODULE_34__["MothersDayComponent"],
            _ourcakes_fathersday_fathers_component__WEBPACK_IMPORTED_MODULE_35__["FathersDayComponent"],
            _ourcakes_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_36__["CorporateComponent"],
            _ourcakes_adult_adult_component__WEBPACK_IMPORTED_MODULE_37__["AdultsComponent"],
            _ourcakes_newyear_newyear_component__WEBPACK_IMPORTED_MODULE_38__["NewYearComponent"],
            _ourcakes_valentinesday_valentinesday_component__WEBPACK_IMPORTED_MODULE_39__["ValentinesDayComponent"],
            _ourcakes_anniversary_anniversary_component__WEBPACK_IMPORTED_MODULE_40__["AnniversaryComponent"],
            _specialcakes_specialcakes_component__WEBPACK_IMPORTED_MODULE_20__["SpecialcakesComponent"],
            _specialcakes_all_sports_all_sports_component__WEBPACK_IMPORTED_MODULE_24__["AllcakesComponent"],
            _specialcakes_house_warming_house_warming_component__WEBPACK_IMPORTED_MODULE_49__["HousewarmingcakesComponent"],
            _specialcakes_easter_easter_component__WEBPACK_IMPORTED_MODULE_50__["EastercakesComponent"],
            _specialcakes_christmas_christmas_component__WEBPACK_IMPORTED_MODULE_51__["ChristmascakesComponent"],
            _specialcakes_baptism_baptism_component__WEBPACK_IMPORTED_MODULE_52__["BaptismcakesComponent"],
            _specialcakes_gender_reveal_genderrev_component__WEBPACK_IMPORTED_MODULE_53__["GenderrevcakesComponent"],
            _specialcakes_graduation_graduation_component__WEBPACK_IMPORTED_MODULE_54__["GraduationcakesComponent"],
            _cakeform_cakeform_component__WEBPACK_IMPORTED_MODULE_27__["CakeformComponent"],
            _birthdaycakes_superheroes_super_component__WEBPACK_IMPORTED_MODULE_26__["SuperheroescakesComponent"],
            _admin_offerspage_offersreg_offersreg_component__WEBPACK_IMPORTED_MODULE_31__["OffersregComponent"],
            _admin_offerspage_offers_component__WEBPACK_IMPORTED_MODULE_82__["OffersPageComponent"],
            _admin_offerspage_alloffers_alloffers_component__WEBPACK_IMPORTED_MODULE_83__["AllOffersComponent"],
            _newsregister_newsreg_component__WEBPACK_IMPORTED_MODULE_29__["NewsregComponent"],
            _cakecategory_cakecategoryreg_component__WEBPACK_IMPORTED_MODULE_30__["CakescategoryregComponent"],
            _cakereg_cakereg_component__WEBPACK_IMPORTED_MODULE_32__["CakesregComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_80__["CartComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_76__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_79__["environment"].firebase),
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_78__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_77__["AngularFirestoreModule"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_75__["AngularFireDatabaseModule"]
        ],
        providers: [_cakeform_cakeform_service__WEBPACK_IMPORTED_MODULE_81__["CartService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getToken() {
        return this.token;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getUserId() {
        return this.userId;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    createUser(fname, lname, email, pass, cpass) {
        // const authData: SignupData = { firstname: fname, lastname: lname, email: emal, password: pass, cpassword: cpass };
        const payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('fname', fname)
            .set('lname', lname)
            .set('email', email)
            .set('password', pass);
        this.http
            .post('http://localhost:3000/api/user/register', payload)
            .subscribe(() => {
            this.loggedIn = true;
            this.router.navigate(['/']);
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    login(emal, pass) {
        // const authData: LoginData = { email: emal, password: pass };
        const payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', emal)
            .set('password', pass);
        this.http
            .post('http://localhost:3000/api/user/login', payload)
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                // this.userId = response.userId;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                // console.log(expirationDate);
                this.loggedIn = true;
                this.saveAuthData(token, expirationDate);
                this.router.navigate(['/']);
            }
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.t;
            this.isAuthenticated = true;
            this.userId = authInformation.uId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.loggedIn = false;
        this.router.navigate(['/']);
    }
    setAuthTimer(duration) {
        // console.log('Setting timer: ' + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        // localStorage.setItem('userId', userId);
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
    }
    getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const userId = localStorage.getItem('userId');
        if (!token || !expirationDate) {
            return;
        }
        return {
            t: token,
            expirationDate: new Date(expirationDate),
            uId: userId
        };
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outercard{\nheight: 100%;\nwidth: 100%;\nbackground-color: blanchedalmond;\n}\n.innercard{\n  margin: auto;\n  background-color: white;\n  height: 300px;\n  width: 600px;\n  color: black;\n}\nmat-card-title {\n  text-align: center;\n  padding: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 30px;\n}\nform{\n  padding: 4% 0% 0% 0%;\n}\nmat-form-field {\n  margin-left: 100px;\n  color: black;\n  width: 60%;\n  border-bottom-color: wheat;\n}\nmatInput{\n  border: 0px 0px 1px 0px solid wheat;\n}\nform {\n  font-size: 16px;\n}\n.butn{\n  padding-left: 80px;\n}\nbutton{\n  background-color: rgb(119, 202, 113);\n  color: antiquewhite;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsWUFBWTtBQUNaLFdBQVc7QUFDWCxnQ0FBZ0M7QUFDaEM7QUFDQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNERBQTREO0VBQzVELGVBQWU7QUFDakI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlcmNhcmR7XG5oZWlnaHQ6IDEwMCU7XG53aWR0aDogMTAwJTtcbmJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xufVxuLmlubmVyY2FyZHtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5tYXQtY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5mb3Jte1xuICBwYWRkaW5nOiA0JSAwJSAwJSAwJTtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoZWF0O1xufVxubWF0SW5wdXR7XG4gIGJvcmRlcjogMHB4IDBweCAxcHggMHB4IHNvbGlkIHdoZWF0O1xufVxuZm9ybSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5idXRue1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59XG5idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTksIDIwMiwgMTEzKTtcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, http, authservice) {
        this.router = router;
        this.http = http;
        this.authservice = authservice;
        this.isLoading = false;
    }
    ngOnInit() {
        this.authStatusSub = this.authservice.getAuthStatusListener().subscribe(authstatus => {
            this.isLoading = false;
        });
    }
    LoginForm(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        if (form.value.email === 'adminkoolcakes@gmail.com' && form.value.password === 'target123') {
            this.router.navigate(['/admin']);
        }
        else {
            this.authservice.login(form.value.email, form.value.password);
        }
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outercard{\n    height: 100%;\n    width: 100%;\n    background-color: blanchedalmond;\n    }\n    .innercard{\n      margin: auto;\n      background-color: white;\n      height: 450px;\n      width: 700px;\n      color: black;\n    }\n    mat-card-title {\n      text-align: center;\n      padding: 20px;\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      font-size: 30px;\n    }\n    /* form{\n      padding: 0% 0% 0% 0%;\n    } */\n    mat-form-field {\n      margin-left: 120px;\n      color: black;\n      width: 60%;\n      border-bottom-color: wheat;\n    }\n    matInput{\n      border: 0px 0px 1px 0px solid wheat;\n    }\n    form {\n      font-size: 16px;\n    }\n    .butn{\n      padding-left: 100px;\n    }\n    button{\n      background-color: rgb(119, 202, 113);\n      color: antiquewhite;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQztJQUNoQztJQUNBO01BQ0UsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixhQUFhO01BQ2IsWUFBWTtNQUNaLFlBQVk7SUFDZDtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLGFBQWE7TUFDYiw0REFBNEQ7TUFDNUQsZUFBZTtJQUNqQjtJQUNBOztPQUVHO0lBQ0g7TUFDRSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsZUFBZTtJQUNqQjtJQUNBO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxvQ0FBb0M7TUFDcEMsbUJBQW1CO0lBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJjYXJke1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbiAgICB9XG4gICAgLmlubmVyY2FyZHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgbWF0LWNhcmQtdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgLyogZm9ybXtcbiAgICAgIHBhZGRpbmc6IDAlIDAlIDAlIDAlO1xuICAgIH0gKi9cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hlYXQ7XG4gICAgfVxuICAgIG1hdElucHV0e1xuICAgICAgYm9yZGVyOiAwcHggMHB4IDFweCAwcHggc29saWQgd2hlYXQ7XG4gICAgfVxuICAgIGZvcm0ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuYnV0bntcbiAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTksIDIwMiwgMTEzKTtcbiAgICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgfVxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



let SignupComponent = class SignupComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            this.isLoading = false;
        });
    }
    onSignup(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.createUser(form.value.firstname, form.value.lastname, form.value.email, form.value.password, form.value.cpassword);
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/birthdaycakes/1st25th50thbday/1st_25th_50th.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/birthdaycakes/1st25th50thbday/1st_25th_50th.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n.hidden{\n    visibility: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhkYXljYWtlcy8xc3QyNXRoNTB0aGJkYXkvMXN0XzI1dGhfNTB0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9iaXJ0aGRheWNha2VzLzFzdDI1dGg1MHRoYmRheS8xc3RfMjV0aF81MHRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuLmhpZGRlbntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/birthdaycakes/1st25th50thbday/1st_25th_50th.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/birthdaycakes/1st25th50thbday/1st_25th_50th.component.ts ***!
  \**************************************************************************/
/*! exports provided: Birthday1st25th50thComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Birthday1st25th50thComponent", function() { return Birthday1st25th50thComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Birthday1st25th50thComponent = class Birthday1st25th50thComponent {
    constructor() { }
    ngOnInit() { }
};
Birthday1st25th50thComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./1st_25th_50th.component.html */ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/1st25th50thbday/1st_25th_50th.component.html"),
        styles: [__webpack_require__(/*! ./1st_25th_50th.component.css */ "./src/app/birthdaycakes/1st25th50thbday/1st_25th_50th.component.css")]
    })
], Birthday1st25th50thComponent);



/***/ }),

/***/ "./src/app/birthdaycakes/birthdaycakes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/birthdaycakes/birthdaycakes.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhkYXljYWtlcy9iaXJ0aGRheWNha2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9iaXJ0aGRheWNha2VzL2JpcnRoZGF5Y2FrZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/birthdaycakes/birthdaycakes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/birthdaycakes/birthdaycakes.component.ts ***!
  \**********************************************************/
/*! exports provided: BirthdaycakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdaycakesComponent", function() { return BirthdaycakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BirthdaycakesComponent = class BirthdaycakesComponent {
};
BirthdaycakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./birthdaycakes.component.html */ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/birthdaycakes.component.html"),
        styles: [__webpack_require__(/*! ./birthdaycakes.component.css */ "./src/app/birthdaycakes/birthdaycakes.component.css")]
    })
], BirthdaycakesComponent);



/***/ }),

/***/ "./src/app/birthdaycakes/cameracake/cameracake.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/birthdaycakes/cameracake/cameracake.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhkYXljYWtlcy9jYW1lcmFjYWtlL2NhbWVyYWNha2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2JpcnRoZGF5Y2FrZXMvY2FtZXJhY2FrZS9jYW1lcmFjYWtlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/birthdaycakes/cameracake/cameracake.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/birthdaycakes/cameracake/cameracake.component.ts ***!
  \******************************************************************/
/*! exports provided: CameracakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameracakesComponent", function() { return CameracakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CameracakesComponent = class CameracakesComponent {
};
CameracakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./cameracake.component.html */ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/cameracake/cameracake.component.html"),
        styles: [__webpack_require__(/*! ./cameracake.component.css */ "./src/app/birthdaycakes/cameracake/cameracake.component.css")]
    })
], CameracakesComponent);



/***/ }),

/***/ "./src/app/birthdaycakes/cartoonchar/cartoonchar.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/birthdaycakes/cartoonchar/cartoonchar.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhkYXljYWtlcy9jYXJ0b29uY2hhci9jYXJ0b29uY2hhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvYmlydGhkYXljYWtlcy9jYXJ0b29uY2hhci9jYXJ0b29uY2hhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/birthdaycakes/cartoonchar/cartoonchar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/birthdaycakes/cartoonchar/cartoonchar.component.ts ***!
  \********************************************************************/
/*! exports provided: CartooncharcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartooncharcakesComponent", function() { return CartooncharcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartooncharcakesComponent = class CartooncharcakesComponent {
};
CartooncharcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./cartoonchar.component.html */ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/cartoonchar/cartoonchar.component.html"),
        styles: [__webpack_require__(/*! ./cartoonchar.component.css */ "./src/app/birthdaycakes/cartoonchar/cartoonchar.component.css")]
    })
], CartooncharcakesComponent);



/***/ }),

/***/ "./src/app/birthdaycakes/crown_tiara/crown_tiara.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/birthdaycakes/crown_tiara/crown_tiara.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhkYXljYWtlcy9jcm93bl90aWFyYS9jcm93bl90aWFyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvYmlydGhkYXljYWtlcy9jcm93bl90aWFyYS9jcm93bl90aWFyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/birthdaycakes/crown_tiara/crown_tiara.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/birthdaycakes/crown_tiara/crown_tiara.component.ts ***!
  \********************************************************************/
/*! exports provided: CrowntiaracakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrowntiaracakesComponent", function() { return CrowntiaracakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CrowntiaracakesComponent = class CrowntiaracakesComponent {
};
CrowntiaracakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./crown_tiara.component.html */ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/crown_tiara/crown_tiara.component.html"),
        styles: [__webpack_require__(/*! ./crown_tiara.component.css */ "./src/app/birthdaycakes/crown_tiara/crown_tiara.component.css")]
    })
], CrowntiaracakesComponent);



/***/ }),

/***/ "./src/app/birthdaycakes/disneyprincess/disneyprincess.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/birthdaycakes/disneyprincess/disneyprincess.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhkYXljYWtlcy9kaXNuZXlwcmluY2Vzcy9kaXNuZXlwcmluY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvYmlydGhkYXljYWtlcy9kaXNuZXlwcmluY2Vzcy9kaXNuZXlwcmluY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/birthdaycakes/disneyprincess/disneyprincess.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/birthdaycakes/disneyprincess/disneyprincess.component.ts ***!
  \**************************************************************************/
/*! exports provided: DisneyPrincesscakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisneyPrincesscakesComponent", function() { return DisneyPrincesscakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DisneyPrincesscakesComponent = class DisneyPrincesscakesComponent {
};
DisneyPrincesscakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./disneyprincess.component.html */ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/disneyprincess/disneyprincess.component.html"),
        styles: [__webpack_require__(/*! ./disneyprincess.component.css */ "./src/app/birthdaycakes/disneyprincess/disneyprincess.component.css")]
    })
], DisneyPrincesscakesComponent);



/***/ }),

/***/ "./src/app/birthdaycakes/hardwaretool/harwaretool.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/birthdaycakes/hardwaretool/harwaretool.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhkYXljYWtlcy9oYXJkd2FyZXRvb2wvaGFyd2FyZXRvb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2JpcnRoZGF5Y2FrZXMvaGFyZHdhcmV0b29sL2hhcndhcmV0b29sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/birthdaycakes/hardwaretool/harwaretool.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/birthdaycakes/hardwaretool/harwaretool.component.ts ***!
  \*********************************************************************/
/*! exports provided: HarwaretoolcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HarwaretoolcakesComponent", function() { return HarwaretoolcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HarwaretoolcakesComponent = class HarwaretoolcakesComponent {
};
HarwaretoolcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./harwaretool.component.html */ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/hardwaretool/harwaretool.component.html"),
        styles: [__webpack_require__(/*! ./harwaretool.component.css */ "./src/app/birthdaycakes/hardwaretool/harwaretool.component.css")]
    })
], HarwaretoolcakesComponent);



/***/ }),

/***/ "./src/app/birthdaycakes/jamesbond/jamesbond.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/birthdaycakes/jamesbond/jamesbond.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhkYXljYWtlcy9qYW1lc2JvbmQvamFtZXNib25kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9iaXJ0aGRheWNha2VzL2phbWVzYm9uZC9qYW1lc2JvbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/birthdaycakes/jamesbond/jamesbond.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/birthdaycakes/jamesbond/jamesbond.component.ts ***!
  \****************************************************************/
/*! exports provided: JamesBondcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JamesBondcakesComponent", function() { return JamesBondcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JamesBondcakesComponent = class JamesBondcakesComponent {
};
JamesBondcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./jamesbond.component.html */ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/jamesbond/jamesbond.component.html"),
        styles: [__webpack_require__(/*! ./jamesbond.component.css */ "./src/app/birthdaycakes/jamesbond/jamesbond.component.css")]
    })
], JamesBondcakesComponent);



/***/ }),

/***/ "./src/app/birthdaycakes/superheroes/super.component.css":
/*!***************************************************************!*\
  !*** ./src/app/birthdaycakes/superheroes/super.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhkYXljYWtlcy9zdXBlcmhlcm9lcy9zdXBlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvYmlydGhkYXljYWtlcy9zdXBlcmhlcm9lcy9zdXBlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/birthdaycakes/superheroes/super.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/birthdaycakes/superheroes/super.component.ts ***!
  \**************************************************************/
/*! exports provided: SuperheroescakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperheroescakesComponent", function() { return SuperheroescakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SuperheroescakesComponent = class SuperheroescakesComponent {
};
SuperheroescakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./super.component.html */ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/superheroes/super.component.html"),
        styles: [__webpack_require__(/*! ./super.component.css */ "./src/app/birthdaycakes/superheroes/super.component.css")]
    })
], SuperheroescakesComponent);



/***/ }),

/***/ "./src/app/birthdaycakes/videogames/videogames.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/birthdaycakes/videogames/videogames.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlydGhkYXljYWtlcy92aWRlb2dhbWVzL3ZpZGVvZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2JpcnRoZGF5Y2FrZXMvdmlkZW9nYW1lcy92aWRlb2dhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/birthdaycakes/videogames/videogames.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/birthdaycakes/videogames/videogames.component.ts ***!
  \******************************************************************/
/*! exports provided: VideogamecakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideogamecakesComponent", function() { return VideogamecakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideogamecakesComponent = class VideogamecakesComponent {
};
VideogamecakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./videogames.component.html */ "./node_modules/raw-loader/index.js!./src/app/birthdaycakes/videogames/videogames.component.html"),
        styles: [__webpack_require__(/*! ./videogames.component.css */ "./src/app/birthdaycakes/videogames/videogames.component.css")]
    })
], VideogamecakesComponent);



/***/ }),

/***/ "./src/app/cakecategory/cakecategory.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cakecategory/cakecategory.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outercard{\n    height: 100%;\n    width: 100%;\n    background-color: blanchedalmond;\n    padding-bottom: 40px;\n    }\n    .innercard{\n      margin: auto;\n      background-color: white;\n      height: 500px;\n      width: 800px;\n      color: black;\n    }\n    mat-card-title {\n      text-align: center;\n      padding: 20px;\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      font-size: 30px;\n    }\n    form{\n      padding: 4% 0% 0% 0%;\n    }\n    mat-form-field {\n      margin-left: 100px;\n      color: black;\n      width: 60%;\n      border-bottom-color: wheat;\n    }\n    matInput{\n      border: 0px 0px 1px 0px solid wheat;\n    }\n    form {\n      font-size: 16px;\n    }\n    .butn button{\n      background-color: rgb(119, 202, 113);\n      color: antiquewhite;\n    }\n    div{\n      margin-left: 100px;\n    }\n   \n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FrZWNhdGVnb3J5L2Nha2VjYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCO0lBQ0E7TUFDRSxZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLGFBQWE7TUFDYixZQUFZO01BQ1osWUFBWTtJQUNkO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLDREQUE0RDtNQUM1RCxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxvQ0FBb0M7TUFDcEMsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jYWtlY2F0ZWdvcnkvY2FrZWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJjYXJke1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICB9XG4gICAgLmlubmVyY2FyZHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgbWF0LWNhcmQtdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgZm9ybXtcbiAgICAgIHBhZGRpbmc6IDQlIDAlIDAlIDAlO1xuICAgIH1cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hlYXQ7XG4gICAgfVxuICAgIG1hdElucHV0e1xuICAgICAgYm9yZGVyOiAwcHggMHB4IDFweCAwcHggc29saWQgd2hlYXQ7XG4gICAgfVxuICAgIGZvcm0ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuYnV0biBidXR0b257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE5LCAyMDIsIDExMyk7XG4gICAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIH1cbiAgICBkaXZ7XG4gICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgfVxuICAgXG4gICAgIl19 */"

/***/ }),

/***/ "./src/app/cakecategory/cakecategoryreg.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cakecategory/cakecategoryreg.component.ts ***!
  \***********************************************************/
/*! exports provided: CakescategoryregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakescategoryregComponent", function() { return CakescategoryregComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CakescategoryregComponent = class CakescategoryregComponent {
    constructor(http) {
        this.http = http;
        this.selectedFile = null;
    }
    ngOnInit() { }
    selectedImage(event) {
        // console.log(event);
        if (event.target.files.length > 0) {
            this.selectedFile = event.target.files[0];
        }
    }
    Cakesreg(form) {
        const cakecatdata = new FormData();
        cakecatdata.append('Category', form.value.category);
        cakecatdata.append('Name', form.value.name);
        cakecatdata.append('Price', form.value.price);
        cakecatdata.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:3000/api/user/cakesregister', cakecatdata).subscribe(() => {
            // console.log('news runing');
        }, error => {
            console.log(error);
        });
    }
};
CakescategoryregComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CakescategoryregComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cakereg',
        template: __webpack_require__(/*! raw-loader!./cakecategory.component.html */ "./node_modules/raw-loader/index.js!./src/app/cakecategory/cakecategory.component.html"),
        styles: [__webpack_require__(/*! ./cakecategory.component.css */ "./src/app/cakecategory/cakecategory.component.css")]
    })
], CakescategoryregComponent);



/***/ }),

/***/ "./src/app/cakeform/cakeform.component.css":
/*!*************************************************!*\
  !*** ./src/app/cakeform/cakeform.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".abc{\n    width: 70%;\n    height: 60%;\n    margin: auto;\n}\n.row {\n    width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FrZWZvcm0vY2FrZWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY2FrZWZvcm0vY2FrZWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYmN7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4ucm93IHtcbiAgICB3aWR0aDogNjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cakeform/cakeform.component.ts":
/*!************************************************!*\
  !*** ./src/app/cakeform/cakeform.component.ts ***!
  \************************************************/
/*! exports provided: CakeformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeformComponent", function() { return CakeformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cakeform_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cakeform.service */ "./src/app/cakeform/cakeform.service.ts");



// import { FirebaseService } from '../angularfire.service';


let CakeformComponent = class CakeformComponent {
    constructor(formBuilder, fb, router, cartservice) {
        this.formBuilder = formBuilder;
        this.fb = fb;
        this.router = router;
        this.cartservice = cartservice;
        this.submitted = false;
    }
    // public cakedetails: Array<any> = [];
    ngOnInit() { }
    processForm(form) {
        if (form.valid) {
            const data = {
                size: form.value.size,
                spongetype: form.value.sponge,
                cream: form.value.cream,
                egg_or_eggless: form.value.egg,
                cake_filler: form.value.cakefiller,
                message: form.value.message,
                message_color: form.value.messagecolor,
                first_name: form.value.fullname,
                email_ID: form.value.email,
                mobile_number: form.value.mno
            };
            console.log(data);
            this.cartservice.StoreAllCakeDetails(data);
            // this.firebaseService.addmessage(data).then(res => {
            //     form.reset();
            //   });
        }
        this.router.navigate(['/cart']);
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)');
    }
};
CakeformComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _cakeform_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
CakeformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cakeform',
        template: __webpack_require__(/*! raw-loader!./cakeform.component.html */ "./node_modules/raw-loader/index.js!./src/app/cakeform/cakeform.component.html"),
        styles: [__webpack_require__(/*! ./cakeform.component.css */ "./src/app/cakeform/cakeform.component.css")]
    })
], CakeformComponent);



/***/ }),

/***/ "./src/app/cakeform/cakeform.service.ts":
/*!**********************************************!*\
  !*** ./src/app/cakeform/cakeform.service.ts ***!
  \**********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartService = class CartService {
    constructor() {
        this.cakedetail = [];
    }
    StoreAllCakeDetails(data) {
        this.cakedetail = data;
        // console.log(this.cakedetail);
    }
    findAll() {
        return this.cakedetail;
    }
    find(id) {
        return this.cakedetail[this.getSelectedIndex(id)];
    }
    getSelectedIndex(id) {
        for (let i = 0; i < this.cakedetail.length; i++) {
            if (this.cakedetail[i].id === id) {
                return i;
            }
        }
        return -1;
    }
};
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CartService);



/***/ }),

/***/ "./src/app/cakereg/cakereg.component.css":
/*!***********************************************!*\
  !*** ./src/app/cakereg/cakereg.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outercard{\n    height: 100%;\n    width: 100%;\n    background-color: blanchedalmond;\n    padding-bottom: 40px;\n    }\n    .innercard{\n      margin: auto;\n      padding-bottom: 20px;\n      background-color: white;\n      height: 800px;\n      width: 800px;\n      color: black;\n    }\n    mat-card-title {\n      text-align: center;\n      padding: 20px;\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      font-size: 30px;\n    }\n    form{\n      padding: 4% 0% 0% 0%;\n    }\n    mat-form-field {\n      margin-left: 100px;\n      color: black;\n      width: 60%;\n      border-bottom-color: wheat;\n    }\n    matInput{\n      border: 0px 0px 1px 0px solid wheat;\n    }\n    form {\n      font-size: 16px;\n    }\n    .butn button{\n      background-color: rgb(119, 202, 113);\n      color: antiquewhite;\n    }\n    div{\n      margin-left: 100px;\n    }\n    a{\n      text-decoration: none;\n    }\n   \n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FrZXJlZy9jYWtlcmVnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEI7SUFDQTtNQUNFLFlBQVk7TUFDWixvQkFBb0I7TUFDcEIsdUJBQXVCO01BQ3ZCLGFBQWE7TUFDYixZQUFZO01BQ1osWUFBWTtJQUNkO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLDREQUE0RDtNQUM1RCxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxvQ0FBb0M7TUFDcEMsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLHFCQUFxQjtJQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Nha2VyZWcvY2FrZXJlZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyY2FyZHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgfVxuICAgIC5pbm5lcmNhcmR7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgaGVpZ2h0OiA4MDBweDtcbiAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgbWF0LWNhcmQtdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgZm9ybXtcbiAgICAgIHBhZGRpbmc6IDQlIDAlIDAlIDAlO1xuICAgIH1cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hlYXQ7XG4gICAgfVxuICAgIG1hdElucHV0e1xuICAgICAgYm9yZGVyOiAwcHggMHB4IDFweCAwcHggc29saWQgd2hlYXQ7XG4gICAgfVxuICAgIGZvcm0ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuYnV0biBidXR0b257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE5LCAyMDIsIDExMyk7XG4gICAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIH1cbiAgICBkaXZ7XG4gICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgfVxuICAgIGF7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgXG4gICAgIl19 */"

/***/ }),

/***/ "./src/app/cakereg/cakereg.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cakereg/cakereg.component.ts ***!
  \**********************************************/
/*! exports provided: CakesregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakesregComponent", function() { return CakesregComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CakesregComponent = class CakesregComponent {
    constructor(http) {
        this.http = http;
        this.selectedFile = null;
    }
    ngOnInit() { }
    selectedImage(event) {
        // console.log(event);
        if (event.target.files.length > 0) {
            this.selectedFile = event.target.files[0];
        }
    }
    Offersreg(form) {
        const cakedata = new FormData();
        cakedata.append('Category', form.value.category);
        cakedata.append('SubCategory', form.value.subcategory);
        cakedata.append('Text', form.value.text);
        cakedata.append('Shape', form.value.shape);
        cakedata.append('Name', form.value.name);
        cakedata.append('Price', form.value.price);
        cakedata.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:3000/api/user/cakesregister', cakedata).subscribe(() => {
            console.log('news runing');
        }, error => {
            console.log(error);
        });
    }
};
CakesregComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CakesregComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offersreg',
        template: __webpack_require__(/*! raw-loader!./cakereg.component.html */ "./node_modules/raw-loader/index.js!./src/app/cakereg/cakereg.component.html"),
        styles: [__webpack_require__(/*! ./cakereg.component.css */ "./src/app/cakereg/cakereg.component.css")]
    })
], CakesregComponent);



/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cakeform_cakeform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cakeform/cakeform.service */ "./src/app/cakeform/cakeform.service.ts");




// import { ProductService } from './services/product.service';
let CartComponent = class CartComponent {
    constructor(activatedRoute, cartService) {
        this.activatedRoute = activatedRoute;
        this.cartService = cartService;
        this.items = [];
        this.total = 0;
        this.products = [];
    }
    ngOnInit() {
        this.products = this.cartService.findAll();
        // console.log(this.products);
        this.quantity = 1;
        //     this.activatedRoute.params.subscribe(params => {
        //     const id = params.id;
        //     if (id) {
        // const item: Item = {
        // product: this.cartService.find(id),
        // quantity: 1
        // };
        // if (localStorage.getItem('cart') == null) {
        // const cart: any = [];
        // cart.push(JSON.stringify(item));
        // localStorage.setItem('cart', JSON.stringify(cart));
        // } else {
        // const cart: any = JSON.parse(localStorage.getItem('cart'));
        // let index = -1;
        // for (let i = 0; i < cart.length; i++) {
        // const it: Item = JSON.parse(cart[i]);
        // if (item.product.id === id) {
        // index = i;
        // break;
        // }
        // }
        // if (index === -1) {
        // cart.push(JSON.stringify(item));
        // localStorage.setItem('cart', JSON.stringify(cart));
        // } else {
        // const it: Item = JSON.parse(cart[index]);
        // item.quantity += 1;
        // cart[index] = JSON.stringify(item);
        // localStorage.setItem('cart', JSON.stringify(cart));
        // }
        // }
        // this.loadCart();
        // } else {
        // this.loadCart();
        // }
        // });
        // }
        // loadCart(): void {
        // this.total = 0;
        // this.items = [];
        // const cart = JSON.parse(localStorage.getItem('cart'));
        // // tslint:disable-next-line: prefer-for-of
        // for (let i = 0; i < cart.length; i++) {
        // const item = JSON.parse(cart[i]);
        // this.items.push({
        // product: item.product,
        // quantity: item.quantity
        // });
        // this.total += item.product.price * item.quantity;
        // }
        // }
        // remove(id: string): void {
        // const cart: any = JSON.parse(localStorage.getItem('cart'));
        // const index = -1;
        // for (let i = 0; i < cart.length; i++) {
        // const item: Item = JSON.parse(cart[i]);
        // if (item.product.id === id) {
        // cart.splice(i, 1);
        // break;
        // }
        // }
        // localStorage.setItem('cart', JSON.stringify(cart));
        // this.loadCart();
    }
};
CartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _cakeform_cakeform_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html")
    })
], CartComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".abc{\n    width: 70%;\n    height: 50%;\n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYmN7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ContactComponent = class ContactComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)');
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/corporatecakes/boat/boat.component.css":
/*!********************************************************!*\
  !*** ./src/app/corporatecakes/boat/boat.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycG9yYXRlY2FrZXMvYm9hdC9ib2F0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9jb3Jwb3JhdGVjYWtlcy9ib2F0L2JvYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/corporatecakes/boat/boat.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/corporatecakes/boat/boat.component.ts ***!
  \*******************************************************/
/*! exports provided: BoatcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoatcakesComponent", function() { return BoatcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoatcakesComponent = class BoatcakesComponent {
};
BoatcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./boat.component.html */ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/boat/boat.component.html"),
        styles: [__webpack_require__(/*! ./boat.component.css */ "./src/app/corporatecakes/boat/boat.component.css")]
    })
], BoatcakesComponent);



/***/ }),

/***/ "./src/app/corporatecakes/corporatecakes.component.css":
/*!*************************************************************!*\
  !*** ./src/app/corporatecakes/corporatecakes.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycG9yYXRlY2FrZXMvY29ycG9yYXRlY2FrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2NvcnBvcmF0ZWNha2VzL2NvcnBvcmF0ZWNha2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/corporatecakes/corporatecakes.component.ts":
/*!************************************************************!*\
  !*** ./src/app/corporatecakes/corporatecakes.component.ts ***!
  \************************************************************/
/*! exports provided: CorporatecakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporatecakesComponent", function() { return CorporatecakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CorporatecakesComponent = class CorporatecakesComponent {
};
CorporatecakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./corporatecakes.component.html */ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/corporatecakes.component.html"),
        styles: [__webpack_require__(/*! ./corporatecakes.component.css */ "./src/app/corporatecakes/corporatecakes.component.css")]
    })
], CorporatecakesComponent);



/***/ }),

/***/ "./src/app/corporatecakes/doctor/doctor.component.css":
/*!************************************************************!*\
  !*** ./src/app/corporatecakes/doctor/doctor.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycG9yYXRlY2FrZXMvZG9jdG9yL2RvY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29ycG9yYXRlY2FrZXMvZG9jdG9yL2RvY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/corporatecakes/doctor/doctor.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/corporatecakes/doctor/doctor.component.ts ***!
  \***********************************************************/
/*! exports provided: DoctorcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorcakesComponent", function() { return DoctorcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DoctorcakesComponent = class DoctorcakesComponent {
};
DoctorcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./doctor.component.html */ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/doctor/doctor.component.html"),
        styles: [__webpack_require__(/*! ./doctor.component.css */ "./src/app/corporatecakes/doctor/doctor.component.css")]
    })
], DoctorcakesComponent);



/***/ }),

/***/ "./src/app/corporatecakes/football_clubs/footballclubs.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/corporatecakes/football_clubs/footballclubs.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycG9yYXRlY2FrZXMvZm9vdGJhbGxfY2x1YnMvZm9vdGJhbGxjbHVicy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29ycG9yYXRlY2FrZXMvZm9vdGJhbGxfY2x1YnMvZm9vdGJhbGxjbHVicy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/corporatecakes/football_clubs/footballclubs.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/corporatecakes/football_clubs/footballclubs.component.ts ***!
  \**************************************************************************/
/*! exports provided: FootballclubscakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballclubscakesComponent", function() { return FootballclubscakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FootballclubscakesComponent = class FootballclubscakesComponent {
};
FootballclubscakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./footballclubs.component.html */ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/football_clubs/footballclubs.component.html"),
        styles: [__webpack_require__(/*! ./footballclubs.component.css */ "./src/app/corporatecakes/football_clubs/footballclubs.component.css")]
    })
], FootballclubscakesComponent);



/***/ }),

/***/ "./src/app/corporatecakes/lawyer/lawyer.component.css":
/*!************************************************************!*\
  !*** ./src/app/corporatecakes/lawyer/lawyer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycG9yYXRlY2FrZXMvbGF3eWVyL2xhd3llci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29ycG9yYXRlY2FrZXMvbGF3eWVyL2xhd3llci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/corporatecakes/lawyer/lawyer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/corporatecakes/lawyer/lawyer.component.ts ***!
  \***********************************************************/
/*! exports provided: LawyercakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawyercakesComponent", function() { return LawyercakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LawyercakesComponent = class LawyercakesComponent {
};
LawyercakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./lawyer.component.html */ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/lawyer/lawyer.component.html"),
        styles: [__webpack_require__(/*! ./lawyer.component.css */ "./src/app/corporatecakes/lawyer/lawyer.component.css")]
    })
], LawyercakesComponent);



/***/ }),

/***/ "./src/app/corporatecakes/music_equipment/musiceq.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/corporatecakes/music_equipment/musiceq.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycG9yYXRlY2FrZXMvbXVzaWNfZXF1aXBtZW50L211c2ljZXEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2NvcnBvcmF0ZWNha2VzL211c2ljX2VxdWlwbWVudC9tdXNpY2VxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/corporatecakes/music_equipment/musiceq.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/corporatecakes/music_equipment/musiceq.component.ts ***!
  \*********************************************************************/
/*! exports provided: MusiceqcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusiceqcakesComponent", function() { return MusiceqcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MusiceqcakesComponent = class MusiceqcakesComponent {
};
MusiceqcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./musiceq.component.html */ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/music_equipment/musiceq.component.html"),
        styles: [__webpack_require__(/*! ./musiceq.component.css */ "./src/app/corporatecakes/music_equipment/musiceq.component.css")]
    })
], MusiceqcakesComponent);



/***/ }),

/***/ "./src/app/corporatecakes/poker_casino/pokercasino.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/corporatecakes/poker_casino/pokercasino.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycG9yYXRlY2FrZXMvcG9rZXJfY2FzaW5vL3Bva2VyY2FzaW5vLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9jb3Jwb3JhdGVjYWtlcy9wb2tlcl9jYXNpbm8vcG9rZXJjYXNpbm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/corporatecakes/poker_casino/pokercasino.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/corporatecakes/poker_casino/pokercasino.component.ts ***!
  \**********************************************************************/
/*! exports provided: PokercasinocakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokercasinocakesComponent", function() { return PokercasinocakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PokercasinocakesComponent = class PokercasinocakesComponent {
};
PokercasinocakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./pokercasino.component.html */ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/poker_casino/pokercasino.component.html"),
        styles: [__webpack_require__(/*! ./pokercasino.component.css */ "./src/app/corporatecakes/poker_casino/pokercasino.component.css")]
    })
], PokercasinocakesComponent);



/***/ }),

/***/ "./src/app/corporatecakes/religious_theme/religioustheme.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/corporatecakes/religious_theme/religioustheme.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycG9yYXRlY2FrZXMvcmVsaWdpb3VzX3RoZW1lL3JlbGlnaW91c3RoZW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9jb3Jwb3JhdGVjYWtlcy9yZWxpZ2lvdXNfdGhlbWUvcmVsaWdpb3VzdGhlbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/corporatecakes/religious_theme/religioustheme.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/corporatecakes/religious_theme/religioustheme.component.ts ***!
  \****************************************************************************/
/*! exports provided: ReligiousthemecakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReligiousthemecakesComponent", function() { return ReligiousthemecakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReligiousthemecakesComponent = class ReligiousthemecakesComponent {
};
ReligiousthemecakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./religioustheme.component.html */ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/religious_theme/religioustheme.component.html"),
        styles: [__webpack_require__(/*! ./religioustheme.component.css */ "./src/app/corporatecakes/religious_theme/religioustheme.component.css")]
    })
], ReligiousthemecakesComponent);



/***/ }),

/***/ "./src/app/corporatecakes/safai_jungle/safaejungle.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/corporatecakes/safai_jungle/safaejungle.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycG9yYXRlY2FrZXMvc2FmYWlfanVuZ2xlL3NhZmFlanVuZ2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9jb3Jwb3JhdGVjYWtlcy9zYWZhaV9qdW5nbGUvc2FmYWVqdW5nbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/corporatecakes/safai_jungle/safaejungle.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/corporatecakes/safai_jungle/safaejungle.component.ts ***!
  \**********************************************************************/
/*! exports provided: SafaejunglecakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafaejunglecakesComponent", function() { return SafaejunglecakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SafaejunglecakesComponent = class SafaejunglecakesComponent {
};
SafaejunglecakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./safaejungle.component.html */ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/safai_jungle/safaejungle.component.html"),
        styles: [__webpack_require__(/*! ./safaejungle.component.css */ "./src/app/corporatecakes/safai_jungle/safaejungle.component.css")]
    })
], SafaejunglecakesComponent);



/***/ }),

/***/ "./src/app/corporatecakes/watch_brands/watchbrands.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/corporatecakes/watch_brands/watchbrands.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycG9yYXRlY2FrZXMvd2F0Y2hfYnJhbmRzL3dhdGNoYnJhbmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9jb3Jwb3JhdGVjYWtlcy93YXRjaF9icmFuZHMvd2F0Y2hicmFuZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/corporatecakes/watch_brands/watchbrands.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/corporatecakes/watch_brands/watchbrands.component.ts ***!
  \**********************************************************************/
/*! exports provided: WatchbrandscakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchbrandscakesComponent", function() { return WatchbrandscakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WatchbrandscakesComponent = class WatchbrandscakesComponent {
};
WatchbrandscakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./watchbrands.component.html */ "./node_modules/raw-loader/index.js!./src/app/corporatecakes/watch_brands/watchbrands.component.html"),
        styles: [__webpack_require__(/*! ./watchbrands.component.css */ "./src/app/corporatecakes/watch_brands/watchbrands.component.css")]
    })
], WatchbrandscakesComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* footer{\n    background-color: #262261;\n    color: #a39fdc;\n    margin-top: 20%;\n    }\n    a{\n        color: #a39fdc;\n    }\n\n    .footlogo{\n        margin-top: 16%;\n    } */\n    footer{\n        background-color: rgb(175, 97, 66);\n        color: wheat;\n        margin-top: 20%;\n        }\n    a{\n            color: wheat;\n        }\n    .footlogo{\n            margin-top: 16%;\n            width: 100%;\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztPQVdPO0lBQ0g7UUFDSSxrQ0FBa0M7UUFDbEMsWUFBWTtRQUNaLGVBQWU7UUFDZjtJQUNBO1lBQ0ksWUFBWTtRQUNoQjtJQUVBO1lBQ0ksZUFBZTtZQUNmLFdBQVc7UUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyMjYxO1xuICAgIGNvbG9yOiAjYTM5ZmRjO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICB9XG4gICAgYXtcbiAgICAgICAgY29sb3I6ICNhMzlmZGM7XG4gICAgfVxuXG4gICAgLmZvb3Rsb2dve1xuICAgICAgICBtYXJnaW4tdG9wOiAxNiU7XG4gICAgfSAqL1xuICAgIGZvb3RlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgOTcsIDY2KTtcbiAgICAgICAgY29sb3I6IHdoZWF0O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgICAgIH1cbiAgICAgICAgYXtcbiAgICAgICAgICAgIGNvbG9yOiB3aGVhdDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuZm9vdGxvZ297XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNiU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navlogo{\n  margin-top: 1%;\n  margin-left: 2%;\n  width: 15%;\n  margin-bottom: 1%;\n}\n\n\nhr{\nmargin:0;  \n}\n\n\n.navbar-light .navbar-nav .nav-link {\n\ntext-transform: capitalize;\nmargin-right: 20px;\ncolor: #333333;\nfont: 14px Roboto sans-serif;\n}\n\n\n.navbar-collapse.in{\ndisplay: block ! important;\n}\n\n\n.right{\nfloat: right;\npadding-top: 10px;\nfont-size: 14px;\n}\n\n\n.right a{\ntext-decoration: none;\ncolor: black;\n}\n\n\n.num{\npadding-right:20px; \n}\n\n\n.bot {\npadding-right: 40px;\n}\n\n\n.bot i{\nfont-size: 25px;\n}\n\n\n@media only screen and (max-width: 1024px) {\nspan.right{\n  font-size: 11px;\n}\n\n\na.num{\n  padding: 5px;\n}\n\n.bot{\n  padding-right: 12px;\n}\n}\n\n\n@media only screen and (max-width: 768px) {\nspan.right{\n  font-size: 8px;\n  margin-top: -1%;\n}\n\n\na.num{\n  padding: 5px;\n}\n\n.bot{\n  padding-right: 12px;\n}\n}\n\n\n@media only screen and (max-width: 414px) {\nspan.right{\n  font-size: 10px;\n  margin-top: -1%;\n}\n\n\na.num{\n  padding: 5px;\n}\n\n.bot{\n  padding-right: 12px;\n}\n}\n\n\n@media only screen and (max-width: 375px) {\nspan.right{\n  font-size: 8px;\n  margin-top: -1%;\n}\n\n\na.num{\n  padding: 5px;\n}\n\n.bot{\n  padding-right: 12px;\n}\n}\n\n\n@media only screen and (max-width: 320px) {\nspan.right{\n  font-size: 6px;\n  margin-top: -1%;\n}\n\n\na.num{\n  padding: 5px;\n}\n\n.bot{\n  padding-right: 12px;\n}\n}\n\n\n/* .navlogo{\n    margin-top: 1%;\n    margin-left: 2%;\n    width: 15%;\n    margin-bottom: 1%;\n}\n\n\nhr{\n  margin:0;  \n}\n\n\n.navbar-light .navbar-nav .nav-link {\n\n  text-transform: capitalize;\n  margin-right: 20px;\n  color: #333333;\n  font: 13px Roboto sans-serif;\n}\n\n.navbar-collapse.in{\n  display: block ! important;\n  }\n.right{\n  float: right;\n  padding-top: 10px;\n  font-size: 14px;\n}\n.right a{\n  text-decoration: none;\n  color: black;\n}\n.num{\n  padding-right:20px; \n}\n\n.bot {\n  padding-right: 40px;\n}\n.bot i{\n  font-size: 25px;\n} */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COzs7QUFHQTtBQUNBLFFBQVE7QUFDUjs7O0FBR0E7O0FBRUEsMEJBQTBCO0FBQzFCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsNEJBQTRCO0FBQzVCOzs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7O0FBQ0E7QUFDQSxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjs7O0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsWUFBWTtBQUNaOzs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7OztBQUNBO0FBQ0EsZUFBZTtBQUNmOzs7QUFFQTtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTs7O0FBRUE7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBOzs7QUFFQTtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7OztBQUVBO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTs7O0FBRUE7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENHIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmxvZ297XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG5cbmhye1xubWFyZ2luOjA7ICBcbn1cblxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG5cbnRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xubWFyZ2luLXJpZ2h0OiAyMHB4O1xuY29sb3I6ICMzMzMzMzM7XG5mb250OiAxNHB4IFJvYm90byBzYW5zLXNlcmlmO1xufVxuXG4ubmF2YmFyLWNvbGxhcHNlLmlue1xuZGlzcGxheTogYmxvY2sgISBpbXBvcnRhbnQ7XG59XG4ucmlnaHR7XG5mbG9hdDogcmlnaHQ7XG5wYWRkaW5nLXRvcDogMTBweDtcbmZvbnQtc2l6ZTogMTRweDtcbn1cbi5yaWdodCBhe1xudGV4dC1kZWNvcmF0aW9uOiBub25lO1xuY29sb3I6IGJsYWNrO1xufVxuLm51bXtcbnBhZGRpbmctcmlnaHQ6MjBweDsgXG59XG5cbi5ib3Qge1xucGFkZGluZy1yaWdodDogNDBweDtcbn1cbi5ib3QgaXtcbmZvbnQtc2l6ZTogMjVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbnNwYW4ucmlnaHR7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuXG5hLm51bXtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYm90e1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5zcGFuLnJpZ2h0e1xuICBmb250LXNpemU6IDhweDtcbiAgbWFyZ2luLXRvcDogLTElO1xufVxuXG5cbmEubnVte1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5ib3R7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbnNwYW4ucmlnaHR7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLXRvcDogLTElO1xufVxuXG5cbmEubnVte1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5ib3R7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbnNwYW4ucmlnaHR7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBtYXJnaW4tdG9wOiAtMSU7XG59XG5cblxuYS5udW17XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmJvdHtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuc3Bhbi5yaWdodHtcbiAgZm9udC1zaXplOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0xJTtcbn1cblxuXG5hLm51bXtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYm90e1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxufVxuXG4vKiAubmF2bG9nb3tcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuXG5ocntcbiAgbWFyZ2luOjA7ICBcbn1cblxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG5cbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQ6IDEzcHggUm9ib3RvIHNhbnMtc2VyaWY7XG59XG5cbi5uYXZiYXItY29sbGFwc2UuaW57XG4gIGRpc3BsYXk6IGJsb2NrICEgaW1wb3J0YW50O1xuICB9XG4ucmlnaHR7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5yaWdodCBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5udW17XG4gIHBhZGRpbmctcmlnaHQ6MjBweDsgXG59XG5cbi5ib3Qge1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLmJvdCBpe1xuICBmb250LXNpemU6IDI1cHg7XG59ICovXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.loggedIn = this.authService.loggedIn;
    }
    ngOnInit() {
    }
    onLogout() {
        this.authService.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pic1 img{\n    width: 100%;\n    height: 400px;\n    margin: auto;\n    padding: 0% 1% 1% 1%;\n}\n.pic2 .p2,.p3 {\n    width: 450px;\n    height: 250px;\n    /* padding-bottom: 30px; */\n}\n.p2 {\n    width:  100%;\n    border-radius:20px;\n    margin:5% 2% 0% 2%;\n}\n.p3{\n   margin-left:1%;\n   width: 20%;\n}\n.p4{\n    height:250px;\n    width: 420px;\n    padding-left: 60px;\n    padding-top:20px;\n}\na{\n    text-decoration: none;\n}\n.pic2 img:hover{\n   height:260px;\n}\nhr{\n    margin-top: 30px;\n    color: gray;\n}\n.content {\n    text-align: center;\n    font-size: 25px;\n    padding:30px;\n    word-spacing: 3px;\n}\n.bestsell img {\n    width: 150px;\n    height:100px;\n    margin: 40px 30px 0px 60px;\n}\n.gift{\n    padding-left: 300px;\n}\n.flwr{\n    padding-left: 280px;\n}\n.bday{\n    padding-left: 270px;\n}\n.cake{\n    padding-left:180px;\n}\nimg.low{\n    width:100%;    }\n.mostsell{\n    width: 100%;\n    border: 1px solid rgb(165, 112, 42);\n    /* height:400px; */\n    /* margin: auto; */\n    }\n.mostsell .single img {\n    width: 49.5%;\n    height:300px;\n}\n.mostsell .containsthree{\n    height: 300px;\n    width: 50%;\n    float: right;\n}\n.mostsell .b1 img{\n    margin: 0%;\n    padding: 0%;\n    width: 100%;\n    height: 100px;\n }\n.alloccasion img{\n     width: 100%;\n     margin: 1% 0% 0% 0%;\n     height: 500px;\n }\n.wedanniversary{\n     width: 100%;\n     height: 250px;\n }\n.wedding{\n     margin:  2% 1% 2% 20%;\n     float: left;\n }\n.wedcont{\n    margin: 0px;\n    float: left;\n    padding-left: 15%;\n    padding-top: 10%;\n }\n.wed img{\n     width: 100%;\n     height: 250px;\n     margin: 1% 1% 1% 2%;\n }\n.wedding li {\n     list-style: none;\n }\n.anniver {\n     width:  50%;\n     float: right;\n     margin:  2% 1%2% 2%;\n }\n.anniver li{\n     list-style: none;\n }\n.annimg img{\n    width: 60%;\n     height: 250px;\n     margin: 1% 1% 1% 2%;\n }\n.shortnotice img{\n    height: 400px;\n    width: 100%;\n}\n.novelty img {\n    height: 500px;\n    width: 100%;\n    margin: 1%;\n}\n.giftcake {\n    width: 92%;\n    height: 400px;\n    margin: 0% 10% 0% 8%;\n}\n.p1 img{\n    width: 23%;\n}\n.her{\n    width: 100%;\n    height: 300px;\n    padding: 8%;\n}\n.hertype{\n    float: left;\n    padding-left: 15%;\n    padding-top: 10%;\n}\n.hertype h6 {\n    background-color: rgb(207, 21, 83);\n    color: white;\n    padding-left: 30%;\n}\n.hertype li {\n    list-style: none;\n}\n.herimg{\n    float: right;\n}\n.him{\n    height: 300px;\n    width: 100%;\n    padding: 8%;\n}\n.himtype{\n    float: right;\n    padding-right: 25%;\n    padding-top: 10%;\n}\n.himtype h6 {\n    background-color: rgb(207, 21, 83);\n    color: white;\n    padding-left: 30%;\n}\n.himtype li {\n    list-style: none;\n}\n.himimg{\n    float: left;\n}\n.himimg img{\n    width: 80%;\n    height: 300px;\n}\n.buildacake {\n    width: 100%;\n}\n.buildacake img{\n    height: 400px;\n    width: 95%;\n    margin: 2% 1% 1% 2%;\n}\n.explore{\n    width: 100%;\n    height: 600px;\n}\n.explore .e1{\n    width:20%;\n    height: 300px;\n}\n.e1 img {\n    width:20%;\n    height: 300px;\n}\n@media only screen and (max-width: 600px) {\n    img.low{\nwidth:100%;    }\n}\n@media only screen and (max-width: 1024px) {\n    img.p2{\nwidth:14%;\n}\n\ndiv.col-md-3 {\n    padding: 0;\n}\n\n.bestsell{\nwidth: 85%;\n}\n\n.pic2{\n    width:80%;\n}\nimg.p2{\n    height: 80%!important;\n    width: 100%!important;\n    margin-left: 30%;\n}\np.text{\n    margin-left: 50%;\n\n}\n\n}\n@media only screen and (max-width: 768px) {\n\n.bestsell{\n    width: 75%;\n    }\n\n    img.p3{\npadding: 5px;   \n    }\n\n\n    p.text{\n        margin-left: 20%;\n    \n    }\n}\n@media only screen and (max-width: 375px) {\nimg.p2{\n    height: 80%!important;\n    width: 80%!important;\n    margin-left: 20%;\n}\n\n}\n@media only screen and (max-width: 414px) {\n    img.p2{\n        height: 80%!important;\n        width: 70%!important;    }\n\n    img.p3{\n        padding: 5px;\n        \n        width: 40%!important;\n            }\n    \n    }\n@media only screen and (max-width: 320px) {\n        img.p2{\n            height: 80%!important;\n            width: 80%!important;\n        }\n        \n        }\n@media only screen and (min-width: 320px) and (max-width: 414px) {\n            img.p2{\n                height: 80%!important;\n                width: 80%!important;\n            }\n            \n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0dBQ0csY0FBYztHQUNkLFVBQVU7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtHQUNHLFlBQVk7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxVQUFVLEtBQUs7QUFFbkI7SUFDSSxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEI7QUFDSjtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7Q0FDaEI7QUFDQTtLQUNJLFdBQVc7S0FDWCxtQkFBbUI7S0FDbkIsYUFBYTtDQUNqQjtBQUNBO0tBQ0ksV0FBVztLQUNYLGFBQWE7Q0FDakI7QUFDQTtLQUNJLHFCQUFxQjtLQUNyQixXQUFXO0NBQ2Y7QUFDQTtJQUNHLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjtBQUNBO0tBQ0ksV0FBVztLQUNYLGFBQWE7S0FDYixtQkFBbUI7Q0FDdkI7QUFDQTtLQUNJLGdCQUFnQjtDQUNwQjtBQUNBO0tBQ0ksV0FBVztLQUNYLFlBQVk7S0FDWixtQkFBbUI7Q0FDdkI7QUFDQTtLQUNJLGdCQUFnQjtDQUNwQjtBQUNBO0lBQ0csVUFBVTtLQUNULGFBQWE7S0FDYixtQkFBbUI7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjtBQUdBO0lBQ0k7QUFDSixVQUFVLEtBQUs7QUFDZjtBQUdBO0lBQ0k7QUFDSixTQUFTO0FBQ1Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0FBRUE7O0FBRUE7SUFDSSxVQUFVO0lBQ1Y7O0lBRUE7QUFDSixZQUFZO0lBQ1I7OztJQUdBO1FBQ0ksZ0JBQWdCOztJQUVwQjtBQUNKO0FBR0E7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0FBR0E7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixvQkFBb0IsS0FBSzs7SUFFN0I7UUFDSSxZQUFZOztRQUVaLG9CQUFvQjtZQUNoQjs7SUFFUjtBQUVBO1FBQ0k7WUFDSSxxQkFBcUI7WUFDckIsb0JBQW9CO1FBQ3hCOztRQUVBO0FBRUE7WUFDSTtnQkFDSSxxQkFBcUI7Z0JBQ3JCLG9CQUFvQjtZQUN4Qjs7WUFFQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpYzEgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDAlIDElIDElIDElO1xufVxuLnBpYzIgLnAyLC5wMyB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgLyogcGFkZGluZy1ib3R0b206IDMwcHg7ICovXG59XG4ucDIge1xuICAgIHdpZHRoOiAgMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgbWFyZ2luOjUlIDIlIDAlIDIlO1xufVxuLnAze1xuICAgbWFyZ2luLWxlZnQ6MSU7XG4gICB3aWR0aDogMjAlO1xufVxuLnA0e1xuICAgIGhlaWdodDoyNTBweDtcbiAgICB3aWR0aDogNDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIHBhZGRpbmctdG9wOjIwcHg7XG59XG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5waWMyIGltZzpob3ZlcntcbiAgIGhlaWdodDoyNjBweDtcbn1cbmhye1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgY29sb3I6IGdyYXk7XG59XG4uY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nOjMwcHg7XG4gICAgd29yZC1zcGFjaW5nOiAzcHg7XG59XG4uYmVzdHNlbGwgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OjEwMHB4O1xuICAgIG1hcmdpbjogNDBweCAzMHB4IDBweCA2MHB4O1xufVxuLmdpZnR7XG4gICAgcGFkZGluZy1sZWZ0OiAzMDBweDtcbn1cbi5mbHdye1xuICAgIHBhZGRpbmctbGVmdDogMjgwcHg7XG59XG4uYmRheXtcbiAgICBwYWRkaW5nLWxlZnQ6IDI3MHB4O1xufVxuLmNha2V7XG4gICAgcGFkZGluZy1sZWZ0OjE4MHB4O1xufVxuXG5pbWcubG93e1xuICAgIHdpZHRoOjEwMCU7ICAgIH1cblxuLm1vc3RzZWxse1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjUsIDExMiwgNDIpO1xuICAgIC8qIGhlaWdodDo0MDBweDsgKi9cbiAgICAvKiBtYXJnaW46IGF1dG87ICovXG4gICAgfVxuLm1vc3RzZWxsIC5zaW5nbGUgaW1nIHtcbiAgICB3aWR0aDogNDkuNSU7XG4gICAgaGVpZ2h0OjMwMHB4O1xufVxuLm1vc3RzZWxsIC5jb250YWluc3RocmVle1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ubW9zdHNlbGwgLmIxIGltZ3tcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmc6IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gfVxuIC5hbGxvY2Nhc2lvbiBpbWd7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBtYXJnaW46IDElIDAlIDAlIDAlO1xuICAgICBoZWlnaHQ6IDUwMHB4O1xuIH1cbiAud2VkYW5uaXZlcnNhcnl7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBoZWlnaHQ6IDI1MHB4O1xuIH1cbiAud2VkZGluZ3tcbiAgICAgbWFyZ2luOiAgMiUgMSUgMiUgMjAlO1xuICAgICBmbG9hdDogbGVmdDtcbiB9XG4gLndlZGNvbnR7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiB9XG4gLndlZCBpbWd7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICBtYXJnaW46IDElIDElIDElIDIlO1xuIH1cbiAud2VkZGluZyBsaSB7XG4gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gfVxuIC5hbm5pdmVyIHtcbiAgICAgd2lkdGg6ICA1MCU7XG4gICAgIGZsb2F0OiByaWdodDtcbiAgICAgbWFyZ2luOiAgMiUgMSUyJSAyJTtcbiB9XG4gLmFubml2ZXIgbGl7XG4gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gfVxuIC5hbm5pbWcgaW1ne1xuICAgIHdpZHRoOiA2MCU7XG4gICAgIGhlaWdodDogMjUwcHg7XG4gICAgIG1hcmdpbjogMSUgMSUgMSUgMiU7XG4gfVxuLnNob3J0bm90aWNlIGltZ3tcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm5vdmVsdHkgaW1nIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMSU7XG59XG4uZ2lmdGNha2Uge1xuICAgIHdpZHRoOiA5MiU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBtYXJnaW46IDAlIDEwJSAwJSA4JTtcbn1cbi5wMSBpbWd7XG4gICAgd2lkdGg6IDIzJTtcbn1cbi5oZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBwYWRkaW5nOiA4JTtcbn1cbi5oZXJ0eXBle1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTUlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG59XG4uaGVydHlwZSBoNiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjEsIDgzKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMCU7XG59XG5cbi5oZXJ0eXBlIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmhlcmltZ3tcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uaGlte1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOCU7XG59XG4uaGltdHlwZXtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG59XG4uaGltdHlwZSBoNiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjEsIDgzKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMCU7XG59XG5cbi5oaW10eXBlIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmhpbWltZ3tcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5oaW1pbWcgaW1ne1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cbi5idWlsZGFjYWtlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5idWlsZGFjYWtlIGltZ3tcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAyJSAxJSAxJSAyJTtcbn1cbi5leHBsb3Jle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAwcHg7XG59XG4uZXhwbG9yZSAuZTF7XG4gICAgd2lkdGg6MjAlO1xuICAgIGhlaWdodDogMzAwcHg7XG59XG4uZTEgaW1nIHtcbiAgICB3aWR0aDoyMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgaW1nLmxvd3tcbndpZHRoOjEwMCU7ICAgIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGltZy5wMntcbndpZHRoOjE0JTtcbn1cblxuZGl2LmNvbC1tZC0zIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uYmVzdHNlbGx7XG53aWR0aDogODUlO1xufVxuXG4ucGljMntcbiAgICB3aWR0aDo4MCU7XG59XG5pbWcucDJ7XG4gICAgaGVpZ2h0OiA4MCUhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xufVxucC50ZXh0e1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG5cbn1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbi5iZXN0c2VsbHtcbiAgICB3aWR0aDogNzUlO1xuICAgIH1cblxuICAgIGltZy5wM3tcbnBhZGRpbmc6IDVweDsgICBcbiAgICB9XG5cblxuICAgIHAudGV4dHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBcbiAgICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuaW1nLnAye1xuICAgIGhlaWdodDogODAlIWltcG9ydGFudDtcbiAgICB3aWR0aDogODAlIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgIGltZy5wMntcbiAgICAgICAgaGVpZ2h0OiA4MCUhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogNzAlIWltcG9ydGFudDsgICAgfVxuXG4gICAgaW1nLnAze1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIFxuICAgICAgICB3aWR0aDogNDAlIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgICAgIGltZy5wMntcbiAgICAgICAgICAgIGhlaWdodDogODAlIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICAgICAgICAgICBpbWcucDJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCUhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    text-align: center;\n    color:brown;\n}\nhr{\n    color: #000;\n    width: 60%;\n}\n.row{\n    margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6YnJvd247XG59XG5ocntcbiAgICBjb2xvcjogIzAwMDtcbiAgICB3aWR0aDogNjAlO1xufVxuLnJvd3tcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsComponent = class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: __webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/index.js!./src/app/news/news.component.html"),
        styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/newsregister/newsreg.component.css":
/*!****************************************************!*\
  !*** ./src/app/newsregister/newsreg.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outercard{\n    height: 100%;\n    width: 100%;\n    background-color: blanchedalmond;\n    padding-bottom: 40px;\n    }\n    .innercard{\n      margin: auto;\n      background-color: white;\n      height: 550px;\n      width: 800px;\n      color: black;\n    }\n    mat-card-title {\n      text-align: center;\n      padding: 20px;\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      font-size: 30px;\n    }\n    form{\n      padding: 4% 0% 0% 0%;\n    }\n    mat-form-field {\n      margin-left: 100px;\n      color: black;\n      width: 60%;\n      border-bottom-color: wheat;\n    }\n    matInput{\n      border: 0px 0px 1px 0px solid wheat;\n    }\n    form {\n      font-size: 16px;\n    }\n    /* .butn{\n       padding-left: 80px; \n    } */\n    .butn button{\n      background-color: rgb(119, 202, 113);\n      color: antiquewhite;\n    }\n    div{\n      margin-left: 100px;\n    }\n    a{\n      text-decoration: none;\n    }\n    /* input[type=\"file\"]{\n      visibility: hidden;\n    } */\n    /* .image-preview{\n      height :5rem;\n      margin: 1rem 0;\n    }\n    .image-preview img{\n      height: 100%;\n    }\n    \n     */\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3JlZ2lzdGVyL25ld3NyZWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQjtJQUNBO01BQ0UsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixhQUFhO01BQ2IsWUFBWTtNQUNaLFlBQVk7SUFDZDtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLGFBQWE7TUFDYiw0REFBNEQ7TUFDNUQsZUFBZTtJQUNqQjtJQUNBO01BQ0Usb0JBQW9CO0lBQ3RCO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsZUFBZTtJQUNqQjtJQUNBOztPQUVHO0lBQ0g7TUFDRSxvQ0FBb0M7TUFDcEMsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLHFCQUFxQjtJQUN2QjtJQUNBOztPQUVHO0lBQ0g7Ozs7Ozs7O01BUUUiLCJmaWxlIjoic3JjL2FwcC9uZXdzcmVnaXN0ZXIvbmV3c3JlZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyY2FyZHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgfVxuICAgIC5pbm5lcmNhcmR7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgICB3aWR0aDogODAwcHg7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIG1hdC1jYXJkLXRpdGxlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIGZvcm17XG4gICAgICBwYWRkaW5nOiA0JSAwJSAwJSAwJTtcbiAgICB9XG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHdoZWF0O1xuICAgIH1cbiAgICBtYXRJbnB1dHtcbiAgICAgIGJvcmRlcjogMHB4IDBweCAxcHggMHB4IHNvbGlkIHdoZWF0O1xuICAgIH1cbiAgICBmb3JtIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLyogLmJ1dG57XG4gICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4OyBcbiAgICB9ICovXG4gICAgLmJ1dG4gYnV0dG9ue1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExOSwgMjAyLCAxMTMpO1xuICAgICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICB9XG4gICAgZGl2e1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIH1cbiAgICBhe1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICAvKiBpbnB1dFt0eXBlPVwiZmlsZVwiXXtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9ICovXG4gICAgLyogLmltYWdlLXByZXZpZXd7XG4gICAgICBoZWlnaHQgOjVyZW07XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICB9XG4gICAgLmltYWdlLXByZXZpZXcgaW1ne1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAgKi9cbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/newsregister/newsreg.component.ts":
/*!***************************************************!*\
  !*** ./src/app/newsregister/newsreg.component.ts ***!
  \***************************************************/
/*! exports provided: NewsregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsregComponent", function() { return NewsregComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let NewsregComponent = class NewsregComponent {
    constructor(http) {
        this.http = http;
        this.selectedFile = null;
    }
    ngOnInit() { }
    selectedImage(event) {
        // console.log(event);
        if (event.target.files.length > 0) {
            this.selectedFile = event.target.files[0];
        }
    }
    Newsreg(form) {
        const fd = new FormData();
        /*const payload = new HttpParams()
        .set('Heading', form.value.heading)
        .set('Subheading', form.value.subheading )
        .set('Text', form.value.content )
        .set('image', form.value.image);*/
        fd.append('Heading', form.value.heading);
        fd.append('Subheading', form.value.subheading);
        fd.append('Text', form.value.content);
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:3000/api/user/newsregister', fd).subscribe(() => {
            // console.log('news runing');
        }, error => {
            console.log(error);
        });
    }
};
NewsregComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NewsregComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newsreg',
        template: __webpack_require__(/*! raw-loader!./newsreg.component.html */ "./node_modules/raw-loader/index.js!./src/app/newsregister/newsreg.component.html"),
        styles: [__webpack_require__(/*! ./newsreg.component.css */ "./src/app/newsregister/newsreg.component.css")]
    })
], NewsregComponent);



/***/ }),

/***/ "./src/app/offers/offers.component.css":
/*!*********************************************!*\
  !*** ./src/app/offers/offers.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    width: 80%;\n    height:200px;\n}\n.im{\n    padding-top: 5%;\n    text-align: center;\n}\nh2{\n    padding: 1%;\n    color: brown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXJzL29mZmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvb2ZmZXJzL29mZmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OjIwMHB4O1xufVxuLmlte1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMntcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBjb2xvcjogYnJvd247XG59Il19 */"

/***/ }),

/***/ "./src/app/offers/offers.component.ts":
/*!********************************************!*\
  !*** ./src/app/offers/offers.component.ts ***!
  \********************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OffersComponent = class OffersComponent {
    constructor() { }
    ngOnInit() {
    }
};
OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: __webpack_require__(/*! raw-loader!./offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/offers/offers.component.html"),
        styles: [__webpack_require__(/*! ./offers.component.css */ "./src/app/offers/offers.component.css")]
    })
], OffersComponent);



/***/ }),

/***/ "./src/app/ourcakes/adult/adult.component.css":
/*!****************************************************!*\
  !*** ./src/app/ourcakes/adult/adult.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyY2FrZXMvYWR1bHQvYWR1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL291cmNha2VzL2FkdWx0L2FkdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/ourcakes/adult/adult.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ourcakes/adult/adult.component.ts ***!
  \***************************************************/
/*! exports provided: AdultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdultsComponent", function() { return AdultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdultsComponent = class AdultsComponent {
};
AdultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./adult.component.html */ "./node_modules/raw-loader/index.js!./src/app/ourcakes/adult/adult.component.html"),
        styles: [__webpack_require__(/*! ./adult.component.css */ "./src/app/ourcakes/adult/adult.component.css")]
    })
], AdultsComponent);



/***/ }),

/***/ "./src/app/ourcakes/anniversary/anniversary.component.css":
/*!****************************************************************!*\
  !*** ./src/app/ourcakes/anniversary/anniversary.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyY2FrZXMvYW5uaXZlcnNhcnkvYW5uaXZlcnNhcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL291cmNha2VzL2Fubml2ZXJzYXJ5L2Fubml2ZXJzYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/ourcakes/anniversary/anniversary.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ourcakes/anniversary/anniversary.component.ts ***!
  \***************************************************************/
/*! exports provided: AnniversaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnniversaryComponent", function() { return AnniversaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnniversaryComponent = class AnniversaryComponent {
};
AnniversaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./anniversary.component.html */ "./node_modules/raw-loader/index.js!./src/app/ourcakes/anniversary/anniversary.component.html"),
        styles: [__webpack_require__(/*! ./anniversary.component.css */ "./src/app/ourcakes/anniversary/anniversary.component.css")]
    })
], AnniversaryComponent);



/***/ }),

/***/ "./src/app/ourcakes/baby_shower/baby_shower.component.css":
/*!****************************************************************!*\
  !*** ./src/app/ourcakes/baby_shower/baby_shower.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyY2FrZXMvYmFieV9zaG93ZXIvYmFieV9zaG93ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL291cmNha2VzL2JhYnlfc2hvd2VyL2JhYnlfc2hvd2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/ourcakes/baby_shower/baby_shower.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ourcakes/baby_shower/baby_shower.component.ts ***!
  \***************************************************************/
/*! exports provided: BabyshowerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabyshowerComponent", function() { return BabyshowerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BabyshowerComponent = class BabyshowerComponent {
};
BabyshowerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./baby_shower.component.html */ "./node_modules/raw-loader/index.js!./src/app/ourcakes/baby_shower/baby_shower.component.html"),
        styles: [__webpack_require__(/*! ./baby_shower.component.css */ "./src/app/ourcakes/baby_shower/baby_shower.component.css")]
    })
], BabyshowerComponent);



/***/ }),

/***/ "./src/app/ourcakes/corporate/corporate.component.css":
/*!************************************************************!*\
  !*** ./src/app/ourcakes/corporate/corporate.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyY2FrZXMvY29ycG9yYXRlL2NvcnBvcmF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvb3VyY2FrZXMvY29ycG9yYXRlL2NvcnBvcmF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/ourcakes/corporate/corporate.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ourcakes/corporate/corporate.component.ts ***!
  \***********************************************************/
/*! exports provided: CorporateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateComponent", function() { return CorporateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CorporateComponent = class CorporateComponent {
};
CorporateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./corporate.component.html */ "./node_modules/raw-loader/index.js!./src/app/ourcakes/corporate/corporate.component.html"),
        styles: [__webpack_require__(/*! ./corporate.component.css */ "./src/app/ourcakes/corporate/corporate.component.css")]
    })
], CorporateComponent);



/***/ }),

/***/ "./src/app/ourcakes/fathersday/fathers.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ourcakes/fathersday/fathers.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyY2FrZXMvZmF0aGVyc2RheS9mYXRoZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9vdXJjYWtlcy9mYXRoZXJzZGF5L2ZhdGhlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ourcakes/fathersday/fathers.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ourcakes/fathersday/fathers.component.ts ***!
  \**********************************************************/
/*! exports provided: FathersDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FathersDayComponent", function() { return FathersDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FathersDayComponent = class FathersDayComponent {
};
FathersDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./fathers.component.html */ "./node_modules/raw-loader/index.js!./src/app/ourcakes/fathersday/fathers.component.html"),
        styles: [__webpack_require__(/*! ./fathers.component.css */ "./src/app/ourcakes/fathersday/fathers.component.css")]
    })
], FathersDayComponent);



/***/ }),

/***/ "./src/app/ourcakes/mohersday/mothers.component.css":
/*!**********************************************************!*\
  !*** ./src/app/ourcakes/mohersday/mothers.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyY2FrZXMvbW9oZXJzZGF5L21vdGhlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL291cmNha2VzL21vaGVyc2RheS9tb3RoZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/ourcakes/mohersday/mothers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ourcakes/mohersday/mothers.component.ts ***!
  \*********************************************************/
/*! exports provided: MothersDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MothersDayComponent", function() { return MothersDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MothersDayComponent = class MothersDayComponent {
};
MothersDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./mothers.component.html */ "./node_modules/raw-loader/index.js!./src/app/ourcakes/mohersday/mothers.component.html"),
        styles: [__webpack_require__(/*! ./mothers.component.css */ "./src/app/ourcakes/mohersday/mothers.component.css")]
    })
], MothersDayComponent);



/***/ }),

/***/ "./src/app/ourcakes/newyear/newyear.component.css":
/*!********************************************************!*\
  !*** ./src/app/ourcakes/newyear/newyear.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyY2FrZXMvbmV3eWVhci9uZXd5ZWFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9vdXJjYWtlcy9uZXd5ZWFyL25ld3llYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ourcakes/newyear/newyear.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ourcakes/newyear/newyear.component.ts ***!
  \*******************************************************/
/*! exports provided: NewYearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewYearComponent", function() { return NewYearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewYearComponent = class NewYearComponent {
};
NewYearComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./newyear.component.html */ "./node_modules/raw-loader/index.js!./src/app/ourcakes/newyear/newyear.component.html"),
        styles: [__webpack_require__(/*! ./newyear.component.css */ "./src/app/ourcakes/newyear/newyear.component.css")]
    })
], NewYearComponent);



/***/ }),

/***/ "./src/app/ourcakes/ourcakes.component.css":
/*!*************************************************!*\
  !*** ./src/app/ourcakes/ourcakes.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\nh5 {\n    color: brown;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyY2FrZXMvb3VyY2FrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL291cmNha2VzL291cmNha2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuaDUge1xuICAgIGNvbG9yOiBicm93bjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/ourcakes/ourcakes.component.ts":
/*!************************************************!*\
  !*** ./src/app/ourcakes/ourcakes.component.ts ***!
  \************************************************/
/*! exports provided: OurcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurcakesComponent", function() { return OurcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurcakesComponent = class OurcakesComponent {
};
OurcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./ourcakes.component.html */ "./node_modules/raw-loader/index.js!./src/app/ourcakes/ourcakes.component.html"),
        styles: [__webpack_require__(/*! ./ourcakes.component.css */ "./src/app/ourcakes/ourcakes.component.css")]
    })
], OurcakesComponent);



/***/ }),

/***/ "./src/app/ourcakes/valentinesday/valentinesday.component.css":
/*!********************************************************************!*\
  !*** ./src/app/ourcakes/valentinesday/valentinesday.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyY2FrZXMvdmFsZW50aW5lc2RheS92YWxlbnRpbmVzZGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9vdXJjYWtlcy92YWxlbnRpbmVzZGF5L3ZhbGVudGluZXNkYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ourcakes/valentinesday/valentinesday.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ourcakes/valentinesday/valentinesday.component.ts ***!
  \*******************************************************************/
/*! exports provided: ValentinesDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValentinesDayComponent", function() { return ValentinesDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValentinesDayComponent = class ValentinesDayComponent {
};
ValentinesDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./valentinesday.component.html */ "./node_modules/raw-loader/index.js!./src/app/ourcakes/valentinesday/valentinesday.component.html"),
        styles: [__webpack_require__(/*! ./valentinesday.component.css */ "./src/app/ourcakes/valentinesday/valentinesday.component.css")]
    })
], ValentinesDayComponent);



/***/ }),

/***/ "./src/app/ourcakes/wedding/wedding.component.css":
/*!********************************************************!*\
  !*** ./src/app/ourcakes/wedding/wedding.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyY2FrZXMvd2VkZGluZy93ZWRkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9vdXJjYWtlcy93ZWRkaW5nL3dlZGRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ourcakes/wedding/wedding.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ourcakes/wedding/wedding.component.ts ***!
  \*******************************************************/
/*! exports provided: WeddingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeddingComponent", function() { return WeddingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeddingComponent = class WeddingComponent {
};
WeddingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./wedding.component.html */ "./node_modules/raw-loader/index.js!./src/app/ourcakes/wedding/wedding.component.html"),
        styles: [__webpack_require__(/*! ./wedding.component.css */ "./src/app/ourcakes/wedding/wedding.component.css")]
    })
], WeddingComponent);



/***/ }),

/***/ "./src/app/personalizedcakes/alcohol_theme/alcoholtheme.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/personalizedcakes/alcohol_theme/alcoholtheme.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWxpemVkY2FrZXMvYWxjb2hvbF90aGVtZS9hbGNvaG9sdGhlbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsaXplZGNha2VzL2FsY29ob2xfdGhlbWUvYWxjb2hvbHRoZW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/personalizedcakes/alcohol_theme/alcoholtheme.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/personalizedcakes/alcohol_theme/alcoholtheme.component.ts ***!
  \***************************************************************************/
/*! exports provided: AlcoholthemecakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlcoholthemecakesComponent", function() { return AlcoholthemecakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlcoholthemecakesComponent = class AlcoholthemecakesComponent {
};
AlcoholthemecakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./alcoholtheme.component.html */ "./node_modules/raw-loader/index.js!./src/app/personalizedcakes/alcohol_theme/alcoholtheme.component.html"),
        styles: [__webpack_require__(/*! ./alcoholtheme.component.css */ "./src/app/personalizedcakes/alcohol_theme/alcoholtheme.component.css")]
    })
], AlcoholthemecakesComponent);



/***/ }),

/***/ "./src/app/personalizedcakes/comic_theme/comictheme.component.css":
/*!************************************************************************!*\
  !*** ./src/app/personalizedcakes/comic_theme/comictheme.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWxpemVkY2FrZXMvY29taWNfdGhlbWUvY29taWN0aGVtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uYWxpemVkY2FrZXMvY29taWNfdGhlbWUvY29taWN0aGVtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/personalizedcakes/comic_theme/comictheme.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/personalizedcakes/comic_theme/comictheme.component.ts ***!
  \***********************************************************************/
/*! exports provided: ComicthemecakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicthemecakesComponent", function() { return ComicthemecakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComicthemecakesComponent = class ComicthemecakesComponent {
};
ComicthemecakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./comictheme.component.html */ "./node_modules/raw-loader/index.js!./src/app/personalizedcakes/comic_theme/comictheme.component.html"),
        styles: [__webpack_require__(/*! ./comictheme.component.css */ "./src/app/personalizedcakes/comic_theme/comictheme.component.css")]
    })
], ComicthemecakesComponent);



/***/ }),

/***/ "./src/app/personalizedcakes/dog_shaped/dogshaped.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/personalizedcakes/dog_shaped/dogshaped.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWxpemVkY2FrZXMvZG9nX3NoYXBlZC9kb2dzaGFwZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsaXplZGNha2VzL2RvZ19zaGFwZWQvZG9nc2hhcGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/personalizedcakes/dog_shaped/dogshaped.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/personalizedcakes/dog_shaped/dogshaped.component.ts ***!
  \*********************************************************************/
/*! exports provided: DogshapedcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogshapedcakesComponent", function() { return DogshapedcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DogshapedcakesComponent = class DogshapedcakesComponent {
};
DogshapedcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./dogshaped.component.html */ "./node_modules/raw-loader/index.js!./src/app/personalizedcakes/dog_shaped/dogshaped.component.html"),
        styles: [__webpack_require__(/*! ./dogshaped.component.css */ "./src/app/personalizedcakes/dog_shaped/dogshaped.component.css")]
    })
], DogshapedcakesComponent);



/***/ }),

/***/ "./src/app/personalizedcakes/number_shaped/numbershaped.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/personalizedcakes/number_shaped/numbershaped.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWxpemVkY2FrZXMvbnVtYmVyX3NoYXBlZC9udW1iZXJzaGFwZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsaXplZGNha2VzL251bWJlcl9zaGFwZWQvbnVtYmVyc2hhcGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/personalizedcakes/number_shaped/numbershaped.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/personalizedcakes/number_shaped/numbershaped.component.ts ***!
  \***************************************************************************/
/*! exports provided: NumbershapedcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbershapedcakesComponent", function() { return NumbershapedcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumbershapedcakesComponent = class NumbershapedcakesComponent {
};
NumbershapedcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./numbershaped.component.html */ "./node_modules/raw-loader/index.js!./src/app/personalizedcakes/number_shaped/numbershaped.component.html"),
        styles: [__webpack_require__(/*! ./numbershaped.component.css */ "./src/app/personalizedcakes/number_shaped/numbershaped.component.css")]
    })
], NumbershapedcakesComponent);



/***/ }),

/***/ "./src/app/personalizedcakes/personalizedcakes.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/personalizedcakes/personalizedcakes.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWxpemVkY2FrZXMvcGVyc29uYWxpemVkY2FrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsaXplZGNha2VzL3BlcnNvbmFsaXplZGNha2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/personalizedcakes/personalizedcakes.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/personalizedcakes/personalizedcakes.component.ts ***!
  \******************************************************************/
/*! exports provided: PersonalizedcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizedcakesComponent", function() { return PersonalizedcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonalizedcakesComponent = class PersonalizedcakesComponent {
};
PersonalizedcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./personalizedcakes.component.html */ "./node_modules/raw-loader/index.js!./src/app/personalizedcakes/personalizedcakes.component.html"),
        styles: [__webpack_require__(/*! ./personalizedcakes.component.css */ "./src/app/personalizedcakes/personalizedcakes.component.css")]
    })
], PersonalizedcakesComponent);



/***/ }),

/***/ "./src/app/specialcakes/all_sports/all_sports.component.css":
/*!******************************************************************!*\
  !*** ./src/app/specialcakes/all_sports/all_sports.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbGNha2VzL2FsbF9zcG9ydHMvYWxsX3Nwb3J0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvc3BlY2lhbGNha2VzL2FsbF9zcG9ydHMvYWxsX3Nwb3J0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/specialcakes/all_sports/all_sports.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/specialcakes/all_sports/all_sports.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllcakesComponent", function() { return AllcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AllcakesComponent = class AllcakesComponent {
};
AllcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./all_sports.component.html */ "./node_modules/raw-loader/index.js!./src/app/specialcakes/all_sports/all_sports.component.html"),
        styles: [__webpack_require__(/*! ./all_sports.component.css */ "./src/app/specialcakes/all_sports/all_sports.component.css")]
    })
], AllcakesComponent);



/***/ }),

/***/ "./src/app/specialcakes/baptism/baptism.component.css":
/*!************************************************************!*\
  !*** ./src/app/specialcakes/baptism/baptism.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbGNha2VzL2JhcHRpc20vYmFwdGlzbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvc3BlY2lhbGNha2VzL2JhcHRpc20vYmFwdGlzbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/specialcakes/baptism/baptism.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/specialcakes/baptism/baptism.component.ts ***!
  \***********************************************************/
/*! exports provided: BaptismcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaptismcakesComponent", function() { return BaptismcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BaptismcakesComponent = class BaptismcakesComponent {
};
BaptismcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./baptism.component.html */ "./node_modules/raw-loader/index.js!./src/app/specialcakes/baptism/baptism.component.html"),
        styles: [__webpack_require__(/*! ./baptism.component.css */ "./src/app/specialcakes/baptism/baptism.component.css")]
    })
], BaptismcakesComponent);



/***/ }),

/***/ "./src/app/specialcakes/christmas/christmas.component.css":
/*!****************************************************************!*\
  !*** ./src/app/specialcakes/christmas/christmas.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbGNha2VzL2NocmlzdG1hcy9jaHJpc3RtYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWxjYWtlcy9jaHJpc3RtYXMvY2hyaXN0bWFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/specialcakes/christmas/christmas.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/specialcakes/christmas/christmas.component.ts ***!
  \***************************************************************/
/*! exports provided: ChristmascakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChristmascakesComponent", function() { return ChristmascakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChristmascakesComponent = class ChristmascakesComponent {
};
ChristmascakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./christmas.component.html */ "./node_modules/raw-loader/index.js!./src/app/specialcakes/christmas/christmas.component.html"),
        styles: [__webpack_require__(/*! ./christmas.component.css */ "./src/app/specialcakes/christmas/christmas.component.css")]
    })
], ChristmascakesComponent);



/***/ }),

/***/ "./src/app/specialcakes/easter/easter.component.css":
/*!**********************************************************!*\
  !*** ./src/app/specialcakes/easter/easter.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbGNha2VzL2Vhc3Rlci9lYXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWxjYWtlcy9lYXN0ZXIvZWFzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/specialcakes/easter/easter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/specialcakes/easter/easter.component.ts ***!
  \*********************************************************/
/*! exports provided: EastercakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EastercakesComponent", function() { return EastercakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EastercakesComponent = class EastercakesComponent {
};
EastercakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./easter.component.html */ "./node_modules/raw-loader/index.js!./src/app/specialcakes/easter/easter.component.html"),
        styles: [__webpack_require__(/*! ./easter.component.css */ "./src/app/specialcakes/easter/easter.component.css")]
    })
], EastercakesComponent);



/***/ }),

/***/ "./src/app/specialcakes/gender_reveal/genderrev.component.css":
/*!********************************************************************!*\
  !*** ./src/app/specialcakes/gender_reveal/genderrev.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbGNha2VzL2dlbmRlcl9yZXZlYWwvZ2VuZGVycmV2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9zcGVjaWFsY2FrZXMvZ2VuZGVyX3JldmVhbC9nZW5kZXJyZXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/specialcakes/gender_reveal/genderrev.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/specialcakes/gender_reveal/genderrev.component.ts ***!
  \*******************************************************************/
/*! exports provided: GenderrevcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderrevcakesComponent", function() { return GenderrevcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GenderrevcakesComponent = class GenderrevcakesComponent {
};
GenderrevcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./genderrev.component.html */ "./node_modules/raw-loader/index.js!./src/app/specialcakes/gender_reveal/genderrev.component.html"),
        styles: [__webpack_require__(/*! ./genderrev.component.css */ "./src/app/specialcakes/gender_reveal/genderrev.component.css")]
    })
], GenderrevcakesComponent);



/***/ }),

/***/ "./src/app/specialcakes/graduation/graduation.component.css":
/*!******************************************************************!*\
  !*** ./src/app/specialcakes/graduation/graduation.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbGNha2VzL2dyYWR1YXRpb24vZ3JhZHVhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvc3BlY2lhbGNha2VzL2dyYWR1YXRpb24vZ3JhZHVhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/specialcakes/graduation/graduation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/specialcakes/graduation/graduation.component.ts ***!
  \*****************************************************************/
/*! exports provided: GraduationcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraduationcakesComponent", function() { return GraduationcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GraduationcakesComponent = class GraduationcakesComponent {
};
GraduationcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./graduation.component.html */ "./node_modules/raw-loader/index.js!./src/app/specialcakes/graduation/graduation.component.html"),
        styles: [__webpack_require__(/*! ./graduation.component.css */ "./src/app/specialcakes/graduation/graduation.component.css")]
    })
], GraduationcakesComponent);



/***/ }),

/***/ "./src/app/specialcakes/house_warming/house_warming.component.css":
/*!************************************************************************!*\
  !*** ./src/app/specialcakes/house_warming/house_warming.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbGNha2VzL2hvdXNlX3dhcm1pbmcvaG91c2Vfd2FybWluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvc3BlY2lhbGNha2VzL2hvdXNlX3dhcm1pbmcvaG91c2Vfd2FybWluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/specialcakes/house_warming/house_warming.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/specialcakes/house_warming/house_warming.component.ts ***!
  \***********************************************************************/
/*! exports provided: HousewarmingcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousewarmingcakesComponent", function() { return HousewarmingcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HousewarmingcakesComponent = class HousewarmingcakesComponent {
};
HousewarmingcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./house_warming.component.html */ "./node_modules/raw-loader/index.js!./src/app/specialcakes/house_warming/house_warming.component.html"),
        styles: [__webpack_require__(/*! ./house_warming.component.css */ "./src/app/specialcakes/house_warming/house_warming.component.css")]
    })
], HousewarmingcakesComponent);



/***/ }),

/***/ "./src/app/specialcakes/specialcakes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/specialcakes/specialcakes.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbGNha2VzL3NwZWNpYWxjYWtlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFSTtBQUNKLFlBQVk7SUFDUjtBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvc3BlY2lhbGNha2VzL3NwZWNpYWxjYWtlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jcmQgaDN7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG5cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufVxuLmRlc2N7XG4gICAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/specialcakes/specialcakes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/specialcakes/specialcakes.component.ts ***!
  \********************************************************/
/*! exports provided: SpecialcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialcakesComponent", function() { return SpecialcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpecialcakesComponent = class SpecialcakesComponent {
};
SpecialcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./specialcakes.component.html */ "./node_modules/raw-loader/index.js!./src/app/specialcakes/specialcakes.component.html"),
        styles: [__webpack_require__(/*! ./specialcakes.component.css */ "./src/app/specialcakes/specialcakes.component.css")]
    })
], SpecialcakesComponent);



/***/ }),

/***/ "./src/app/sportscakes/Jersey_shaped/jerseyshaped.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sportscakes/Jersey_shaped/jerseyshaped.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\n\ndiv.card-group.b{\nmargin: auto;\n    }\n\n.container{\n    width: 75%;\n    margin: auto;\n}\n\n.card-footer{\n    font-family: Alice-Regular;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzY2FrZXMvSmVyc2V5X3NoYXBlZC9qZXJzZXlzaGFwZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7O0FBQ0k7QUFDSixZQUFZO0lBQ1I7O0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3Nwb3J0c2Nha2VzL0plcnNleV9zaGFwZWQvamVyc2V5c2hhcGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cbiAgICBkaXYuY2FyZC1ncm91cC5ie1xubWFyZ2luOiBhdXRvO1xuICAgIH1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiBBbGljZS1SZWd1bGFyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sportscakes/Jersey_shaped/jerseyshaped.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sportscakes/Jersey_shaped/jerseyshaped.component.ts ***!
  \*********************************************************************/
/*! exports provided: JerseyshapedcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JerseyshapedcakesComponent", function() { return JerseyshapedcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JerseyshapedcakesComponent = class JerseyshapedcakesComponent {
};
JerseyshapedcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./jerseyshaped.component.html */ "./node_modules/raw-loader/index.js!./src/app/sportscakes/Jersey_shaped/jerseyshaped.component.html"),
        styles: [__webpack_require__(/*! ./jerseyshaped.component.css */ "./src/app/sportscakes/Jersey_shaped/jerseyshaped.component.css")]
    })
], JerseyshapedcakesComponent);



/***/ }),

/***/ "./src/app/sportscakes/Other_Sports_and_games/othersportsandgames.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/sportscakes/Other_Sports_and_games/othersportsandgames.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\n\ndiv.card-group.b{\nmargin: auto;\n    }\n\n.container{\n    width: 75%;\n    margin: auto;\n}\n\n.card-footer{\n    font-family: Alice-Regular;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzY2FrZXMvT3RoZXJfU3BvcnRzX2FuZF9nYW1lcy9vdGhlcnNwb3J0c2FuZGdhbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCOztBQUNJO0FBQ0osWUFBWTtJQUNSOztBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9zcG9ydHNjYWtlcy9PdGhlcl9TcG9ydHNfYW5kX2dhbWVzL290aGVyc3BvcnRzYW5kZ2FtZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/sportscakes/Other_Sports_and_games/othersportsandgames.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/sportscakes/Other_Sports_and_games/othersportsandgames.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OthersportsandgamescakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersportsandgamescakesComponent", function() { return OthersportsandgamescakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OthersportsandgamescakesComponent = class OthersportsandgamescakesComponent {
};
OthersportsandgamescakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./othersportsandgames.component.html */ "./node_modules/raw-loader/index.js!./src/app/sportscakes/Other_Sports_and_games/othersportsandgames.component.html"),
        styles: [__webpack_require__(/*! ./othersportsandgames.component.css */ "./src/app/sportscakes/Other_Sports_and_games/othersportsandgames.component.css")]
    })
], OthersportsandgamescakesComponent);



/***/ }),

/***/ "./src/app/sportscakes/footballcakes/footballcakes.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/sportscakes/footballcakes/footballcakes.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzY2FrZXMvZm9vdGJhbGxjYWtlcy9mb290YmFsbGNha2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUVJO0FBQ0osWUFBWTtJQUNSO0FBRUo7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9zcG9ydHNjYWtlcy9mb290YmFsbGNha2VzL2Zvb3RiYWxsY2FrZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uY3JkIGgze1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuXG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn1cbi5kZXNje1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sportscakes/footballcakes/footballcakes.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sportscakes/footballcakes/footballcakes.component.ts ***!
  \**********************************************************************/
/*! exports provided: FootballcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballcakesComponent", function() { return FootballcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FootballcakesComponent = class FootballcakesComponent {
};
FootballcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./footballcakes.component.html */ "./node_modules/raw-loader/index.js!./src/app/sportscakes/footballcakes/footballcakes.component.html"),
        styles: [__webpack_require__(/*! ./footballcakes.component.css */ "./src/app/sportscakes/footballcakes/footballcakes.component.css")]
    })
], FootballcakesComponent);



/***/ }),

/***/ "./src/app/sportscakes/formula_1/formula1.component.css":
/*!**************************************************************!*\
  !*** ./src/app/sportscakes/formula_1/formula1.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\n\ndiv.card-group.b{\nmargin: auto;\n    }\n\n.container{\n    width: 75%;\n    margin: auto;\n}\n\n.card-footer{\n    font-family: Alice-Regular;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzY2FrZXMvZm9ybXVsYV8xL2Zvcm11bGExLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCOztBQUNJO0FBQ0osWUFBWTtJQUNSOztBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9zcG9ydHNjYWtlcy9mb3JtdWxhXzEvZm9ybXVsYTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/sportscakes/formula_1/formula1.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/sportscakes/formula_1/formula1.component.ts ***!
  \*************************************************************/
/*! exports provided: Formula1cakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formula1cakesComponent", function() { return Formula1cakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Formula1cakesComponent = class Formula1cakesComponent {
};
Formula1cakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./formula1.component.html */ "./node_modules/raw-loader/index.js!./src/app/sportscakes/formula_1/formula1.component.html"),
        styles: [__webpack_require__(/*! ./formula1.component.css */ "./src/app/sportscakes/formula_1/formula1.component.css")]
    })
], Formula1cakesComponent);



/***/ }),

/***/ "./src/app/sportscakes/golf/golf.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sportscakes/golf/golf.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\n\ndiv.card-group.b{\nmargin: auto;\n    }\n\n.container{\n    width: 75%;\n    margin: auto;\n}\n\n.card-footer{\n    font-family: Alice-Regular;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzY2FrZXMvZ29sZi9nb2xmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCOztBQUNJO0FBQ0osWUFBWTtJQUNSOztBQUVKO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9zcG9ydHNjYWtlcy9nb2xmL2dvbGYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1yaWdodDoyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgIFxufVxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/sportscakes/golf/golf.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sportscakes/golf/golf.component.ts ***!
  \****************************************************/
/*! exports provided: GolfcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolfcakesComponent", function() { return GolfcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GolfcakesComponent = class GolfcakesComponent {
};
GolfcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./golf.component.html */ "./node_modules/raw-loader/index.js!./src/app/sportscakes/golf/golf.component.html"),
        styles: [__webpack_require__(/*! ./golf.component.css */ "./src/app/sportscakes/golf/golf.component.css")]
    })
], GolfcakesComponent);



/***/ }),

/***/ "./src/app/sportscakes/gymcakes/gymcakes.component.css":
/*!*************************************************************!*\
  !*** ./src/app/sportscakes/gymcakes/gymcakes.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzY2FrZXMvZ3ltY2FrZXMvZ3ltY2FrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3Nwb3J0c2Nha2VzL2d5bWNha2VzL2d5bWNha2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/sportscakes/gymcakes/gymcakes.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sportscakes/gymcakes/gymcakes.component.ts ***!
  \************************************************************/
/*! exports provided: GymcakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymcakesComponent", function() { return GymcakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GymcakesComponent = class GymcakesComponent {
};
GymcakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./gymcakes.component.html */ "./node_modules/raw-loader/index.js!./src/app/sportscakes/gymcakes/gymcakes.component.html"),
        styles: [__webpack_require__(/*! ./gymcakes.component.css */ "./src/app/sportscakes/gymcakes/gymcakes.component.css")]
    })
], GymcakesComponent);



/***/ }),

/***/ "./src/app/sportscakes/sportscakes.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sportscakes/sportscakes.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n.crd h3{\n    padding: 30px 20px 20px 20px;\n}\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\ndiv.card-group.b{\nmargin: auto;\n    }\n.container{\n    width: 75%;\n    margin: auto;\n}\n.card-footer{\n    font-family: Alice-Regular;\n}\n.desc{\n    padding: 10px 40px 40px 40px;\n    color: black;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzY2FrZXMvc3BvcnRzY2FrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCO0FBRUk7QUFDSixZQUFZO0lBQ1I7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3Nwb3J0c2Nha2VzL3Nwb3J0c2Nha2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNyZCBoM3tcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICBcbn1cblxuICAgIGRpdi5jYXJkLWdyb3VwLmJ7XG5tYXJnaW46IGF1dG87XG4gICAgfVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXJ7XG4gICAgZm9udC1mYW1pbHk6IEFsaWNlLVJlZ3VsYXI7XG59XG4uZGVzY3tcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggNDBweCA0MHB4O1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/sportscakes/sportscakes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sportscakes/sportscakes.component.ts ***!
  \******************************************************/
/*! exports provided: SportscakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportscakesComponent", function() { return SportscakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SportscakesComponent = class SportscakesComponent {
};
SportscakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./sportscakes.component.html */ "./node_modules/raw-loader/index.js!./src/app/sportscakes/sportscakes.component.html"),
        styles: [__webpack_require__(/*! ./sportscakes.component.css */ "./src/app/sportscakes/sportscakes.component.css")]
    })
], SportscakesComponent);



/***/ }),

/***/ "./src/app/sportscakes/tennis/tennis.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sportscakes/tennis/tennis.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crd{\n    background-color: aqua;\n    height: auto;\n    width: 75%;\n    margin: auto;\n}\n\n.card{\n    margin-left:2%;\n    margin-right:2%;\n    margin-bottom: 2%;\n   \n}\n\ndiv.card-group.b{\nmargin: auto;\n    }\n\n.container{\n    width: 75%;\n    margin: auto;\n}\n\n.card-footer{\n    font-family: Alice-Regular;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzY2FrZXMvdGVubmlzL3Rlbm5pcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjs7QUFDSTtBQUNKLFlBQVk7SUFDUjs7QUFFSjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvc3BvcnRzY2FrZXMvdGVubmlzL3Rlbm5pcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6MiU7XG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgXG59XG4gICAgZGl2LmNhcmQtZ3JvdXAuYntcbm1hcmdpbjogYXV0bztcbiAgICB9XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBmb250LWZhbWlseTogQWxpY2UtUmVndWxhcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sportscakes/tennis/tennis.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sportscakes/tennis/tennis.component.ts ***!
  \********************************************************/
/*! exports provided: TenniscakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenniscakesComponent", function() { return TenniscakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TenniscakesComponent = class TenniscakesComponent {
};
TenniscakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./tennis.component.html */ "./node_modules/raw-loader/index.js!./src/app/sportscakes/tennis/tennis.component.html"),
        styles: [__webpack_require__(/*! ./tennis.component.css */ "./src/app/sportscakes/tennis/tennis.component.css")]
    })
], TenniscakesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDGq2hmS9Dj8tnb6VUTnLum_hAqT0IHW_A',
        authDomain: 'koolcakesuk-a833c.firebaseapp.com',
        databaseURL: 'https://koolcakesuk-a833c.firebaseio.com',
        projectId: 'koolcakesuk-a833c',
        storageBucket: '',
        messagingSenderId: '935322037961',
        appId: '1:935322037961:web:d4bd008083cf55cae9e718',
        measurementId: 'G-8ZM6QTZXDF'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kajoo/Desktop/CAKE/cake-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map