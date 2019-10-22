import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRippleModule,
        MatStepperModule,
        MatMenuModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SportscakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/sportscakes.component';
import { OurcakesComponent } from './CAKES_CAT_AND_SUBCAT/OUR_CAKES/ourcakes.component';
import { SpecialcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/specialcakes.component';
import { GymcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/gym_cake/gymcakes.component';
import { HttpClientModule } from '@angular/common/http';
import { BabyshowerComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/baby_shower/baby_shower.component';
import { CakeformComponent } from './cakeform/cakeform.component';


// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import {AngularFireModule} from '@angular/fire';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
// import {AngularFireAuthModule} from 'angularfire2/auth';
// import { environment } from 'src/environments/environment';
import { AdminComponent } from './admin/admin.component';
import { NewsregComponent } from './admin/newspage/newsregister/newsreg.component';
import { CakescategoryregComponent } from './cakecategory/cakecategoryreg.component';
import { OffersregComponent } from './admin/offerspage/offersreg/offersreg.component';
import { CakesregComponent } from './cakereg/cakereg.component';
import { WeddingComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/wedding/wedding.component';
import { MothersDayComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/mothers_day/mothers.component';
import { FathersDayComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/fathers_day/fathers.component';
import { NewYearComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/new_year/newyear.component';
import { ValentinesDayComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/valentines_day/valentinesday.component';
import { AnniversaryComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/anniversary/anniversary.component';
import { JamesBondcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/james_bond/jamesbond.component';
import { Birthday1st25th50thComponent } from './CAKES_CAT_AND_SUBCAT/OUR_CAKES/1st_25th_50th_birthday/1st_25th_50th.component';
import { CameracakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/camera_cake/cameracake.component';
import { HarwaretoolcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/harware_tool/harwaretool.component';
import { VideogamecakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/all_video_games/videogames.component';
import { HousewarmingcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/house_warming/house_warming.component';
import { EastercakesComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/easter/easter.component';
import { ChristmascakesComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/xmas/christmas.component';
import { BaptismcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/baptism/baptism.component';
import { GenderrevcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/gender_reveal/genderrev.component';
import { GraduationcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/graduation/graduation.component';
import { CorporatecakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/corporatecakes.component';
import { WatchbrandscakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/watch_brands/watchbrands.component';
import { PokercasinocakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/poker_casino/pokercasino.component';
import { ReligiousthemecakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/religious_themed_cakes/religioustheme.component';
import { LawyercakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/lawyer/lawyer.component';
import { MusiceqcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/music_equipment_shaped_cake/musiceq.component';
import { FootballclubscakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/footlball_clubs/footballclubs.component';
import { AlcoholthemecakesComponent } from './CAKES_CAT_AND_SUBCAT/OUR_CAKES/alcohol_theme/alcoholtheme.component';
import { TenniscakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/tennis/tennis.component';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { CartComponent } from './cart/cart.component';
// import { CartService } from './cakeform/cakeform.service';
import { OffersPageComponent } from './admin/offerspage/offers.component';
import { AllOffersComponent } from './admin/offerspage/alloffers/alloffers.component';
import { AllNewsComponent } from './admin/newspage/allnews/allnews.component';
import { ProductService } from './cart/services/product.service';
import { BoatcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/boat/boat.component';
import { DoctorcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/doctor/doctor.component';
import { RocketcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/rocket/rocket.component';
import { AeroplanecakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/aeroplanes/aeroplanes.component';
import { CastlecakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/castle_cakes/castle_cakes.component';
import { DripcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/drip/drip.component';
import { FilmThemecakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/film_theme/film_theme.component';
import { GardeningcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/gardening/gardening.component';
import { IphoneApplecakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/iphone_or_apple_themed/iphone_apple.component';
import { LuxuryFashioncakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/luxury_fashion/luxury_fashion.component';
import { MakeupcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/make_up_cakes/make_up.component';
import { PerfumeThemedcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/perfume_themed/perfume_themed.component';
import { ScienceThemedcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/science_themed/science_themed.component';
import { UnicorncakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/unicorn/unicorn.component';
import { CrownTiaracakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/crown_tiara/crown_tiara.component';
import { SafariThemedcakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/safari_themed/safai_themed.component';
import { ComicThemedcakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/comic_themed/comic_themed.component';
import { PeppaPigcakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/peppa_pig/peppa_pig.component';
import { SharkThemedcakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/shark_themed/shark_themed.component';
import { PJMaskcakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/pj_mask/pj_mask.component';
import { LegocakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/lego/lego.component';
import { NumberShapedcakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/number_shaped/number_shaped.component';
import { MinionscakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/minions/minions.component';
import { PawPatrolcakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/paw_patrol/paw_patrol.component';
import { AvengercakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/avengers/avengers.component';
import { FeaturedcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/featured_cakes.component';
import { KidscakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/kids.component';
import { PetShapedcakesComponent } from './CAKES_CAT_AND_SUBCAT/OUR_CAKES/pet_shape/pet_shaped.component';
import { FreshCreamcakesComponent } from './CAKES_CAT_AND_SUBCAT/OUR_CAKES/fresh_cream/fresh_cream.component';
import { ButterCreamcakesComponent } from './CAKES_CAT_AND_SUBCAT/OUR_CAKES/butter_cream/butter_cream.component';
import { CricketcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/cricket/cricket.component';
import { BaseballcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/baseball/baseball.component';
import { AllConsolescakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/all_consoles/all_consoles.component';
import { CarcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/car_cakes/car_cakes.component';
import { CartService } from './cakeform/cakeform.service';
import { AllOrdersComponent } from './admin/order/order.component';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NewsComponent,
    OffersComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AllOrdersComponent,
    // BirthdaycakesComponent,
    // CartooncharcakesComponent,
    // JamesBondcakesComponent,
    // DisneyPrincesscakesComponent,
    // CameracakesComponent,
    // HarwaretoolcakesComponent,
    // VideogamecakesComponent,

    SportscakesComponent,
    FootballclubscakesComponent,
    TenniscakesComponent,
    CricketcakesComponent,
    BaseballcakesComponent,
    VideogamecakesComponent,
    AllConsolescakesComponent,
    CarcakesComponent,

    CorporatecakesComponent,
    GymcakesComponent,
    DoctorcakesComponent,
    LawyercakesComponent,
    MusiceqcakesComponent,
    CameracakesComponent,
    HarwaretoolcakesComponent,
    WatchbrandscakesComponent,
    BoatcakesComponent,
    PokercasinocakesComponent,
    RocketcakesComponent,
    JamesBondcakesComponent,

    FeaturedcakesComponent,
    AeroplanecakesComponent,
    CastlecakesComponent,
    DripcakesComponent,
    FilmThemecakesComponent,
    GardeningcakesComponent,
    IphoneApplecakesComponent,
    LuxuryFashioncakesComponent,
    MakeupcakesComponent,
    PerfumeThemedcakesComponent,
    ScienceThemedcakesComponent,
    UnicorncakesComponent,
    ReligiousthemecakesComponent,

    KidscakesComponent,
    CrownTiaracakesComponent,
    SafariThemedcakesComponent,
    ComicThemedcakesComponent,
    PeppaPigcakesComponent,
    SharkThemedcakesComponent,
    PJMaskcakesComponent,
    LegocakesComponent,
    NumberShapedcakesComponent,
    MinionscakesComponent,
    PawPatrolcakesComponent,
    AvengercakesComponent,

    // PersonalizedcakesComponent,
    // DogshapedcakesComponent,
    // AlcoholthemecakesComponent,

    // SportscakesComponent,
    // Formula1cakesComponent,
    // GolfcakesComponent,
    // JerseyshapedcakesComponent,
    // OthersportsandgamescakesComponent,
    // TenniscakesComponent,
    // GymcakesComponent,
    // FootballcakesComponent,

    OurcakesComponent,
    Birthday1st25th50thComponent,
    PetShapedcakesComponent,
    AlcoholthemecakesComponent,
    FreshCreamcakesComponent,
    ButterCreamcakesComponent,

    SpecialcakesComponent,
    HousewarmingcakesComponent,
    GraduationcakesComponent,
    ValentinesDayComponent,
    BabyshowerComponent,
    GenderrevcakesComponent,
    MothersDayComponent,
    FathersDayComponent,
    EastercakesComponent,
    ChristmascakesComponent,
    NewYearComponent,
    BaptismcakesComponent,
    AnniversaryComponent,
    WeddingComponent,


    // BabyshowerComponent,
    // WeddingComponent,
    // MothersDayComponent,
    // FathersDayComponent,
    // CorporateComponent,
    // AdultsComponent,
    // NewYearComponent,
    // ValentinesDayComponent,
    // AnniversaryComponent,

    // SpecialcakesComponent,
    //  AllcakesComponent,
    // HousewarmingcakesComponent,
    // EastercakesComponent,
    // ChristmascakesComponent,
    // BaptismcakesComponent,
    // GenderrevcakesComponent,
    // GraduationcakesComponent,

    CakeformComponent,
    // SuperheroescakesComponent,

    OffersregComponent,
    OffersPageComponent,
    AllOffersComponent,

    NewsregComponent,
    AllNewsComponent,

    CakescategoryregComponent,
    CakesregComponent,
     CartComponent,
     ProductComponent,
     CategoriesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRippleModule,
    MatStepperModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireDatabaseModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
