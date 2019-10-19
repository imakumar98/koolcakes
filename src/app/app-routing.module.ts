import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { PageNotFoundComponent} from './pages/404.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SportscakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/sportscakes.component';
import { OurcakesComponent } from './CAKES_CAT_AND_SUBCAT/OUR_CAKES/ourcakes.component';
import { SpecialcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/specialcakes.component';
import { GymcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/gym_cake/gymcakes.component';
import { BabyshowerComponent } from './CAKES_CAT_AND_SUBCAT/SPECIAL_OCCASION_CAKES/baby_shower/baby_shower.component';
import { CakeformComponent } from './cakeform/cakeform.component';
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
import { FootballclubscakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/footlball_clubs/footballclubs.component';
import { LawyercakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/lawyer/lawyer.component';
import { MusiceqcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/music_equipment_shaped_cake/musiceq.component';
import { PokercasinocakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/poker_casino/pokercasino.component';
import { ReligiousthemecakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/religious_themed_cakes/religioustheme.component';
import { WatchbrandscakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/watch_brands/watchbrands.component';
import { AlcoholthemecakesComponent } from './CAKES_CAT_AND_SUBCAT/OUR_CAKES/alcohol_theme/alcoholtheme.component';
import { TenniscakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/tennis/tennis.component';
import { CartComponent } from './cart/cart.component';
import { OffersPageComponent } from './admin/offerspage/offers.component';
import { AllOffersComponent } from './admin/offerspage/alloffers/alloffers.component';
import { AllNewsComponent } from './admin/newspage/allnews/allnews.component';
import { BoatcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/boat/boat.component';
import { DoctorcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/doctor/doctor.component';
import { RocketcakesComponent } from './CAKES_CAT_AND_SUBCAT/CORPORATE_CAKES/rocket/rocket.component';
import { DripcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/drip/drip.component';
import { CastlecakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/castle_cakes/castle_cakes.component';
import { FilmThemecakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/film_theme/film_theme.component';
import { GardeningcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/gardening/gardening.component';
import { IphoneApplecakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/iphone_or_apple_themed/iphone_apple.component';
import { MakeupcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/make_up_cakes/make_up.component';
import { PerfumeThemedcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/perfume_themed/perfume_themed.component';
import { ScienceThemedcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/science_themed/science_themed.component';
import { UnicorncakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/unicorn/unicorn.component';
import { LuxuryFashioncakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/luxury_fashion/luxury_fashion.component';
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
import { KidscakesComponent } from './CAKES_CAT_AND_SUBCAT/KIDS/kids.component';
import { FeaturedcakesComponent } from './CAKES_CAT_AND_SUBCAT/FEATURED_CAKES/featured_cakes.component';
import { PetShapedcakesComponent } from './CAKES_CAT_AND_SUBCAT/OUR_CAKES/pet_shape/pet_shaped.component';
import { FreshCreamcakesComponent } from './CAKES_CAT_AND_SUBCAT/OUR_CAKES/fresh_cream/fresh_cream.component';
import { ButterCreamcakesComponent } from './CAKES_CAT_AND_SUBCAT/OUR_CAKES/butter_cream/butter_cream.component';
import { CricketcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/cricket/cricket.component';
import { BaseballcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/baseball/baseball.component';
import { AllConsolescakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/all_consoles/all_consoles.component';
import { CarcakesComponent } from './CAKES_CAT_AND_SUBCAT/SPORTS_AND_GAMES/car_cakes/car_cakes.component';
import { HeaderComponent } from './header/header.component';
import { AllOrdersComponent } from './admin/order/order.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'news', component: NewsComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent},
  {path: 'header', component: HeaderComponent},
  // {path: 'cakeform', component: CakeformComponent},
  {path: 'cakeform/:category/:subcategory/:name/:price', component: CakeformComponent},
  {path: 'page-not-found',component: ContactComponent},

  {path: 'admin', component: AdminComponent},
  {path: 'admin/cakecatreg', component: CakescategoryregComponent},
  {path: 'admin/newsregform', component: NewsregComponent},
  {path: 'admin/allnews', component: AllNewsComponent},
  {path: 'admin/offerspage', component: OffersPageComponent},
  {path: 'admin/offersreg', component: OffersregComponent},
  {path: 'admin/alloffers', component: AllOffersComponent},
  {path: 'admin/cakereg', component: CakesregComponent},
  {path: 'admin/orders', component: AllOrdersComponent},

  {path: 'corporatecakes', component: CorporatecakesComponent},
  {path: 'corporatecakes/boat' , component: BoatcakesComponent},
  {path: 'corporatecakes/doctor', component: DoctorcakesComponent},
  {path: 'corporatecakes/lawyer', component: LawyercakesComponent},
  {path: 'corporatecakes/music_equipment', component: MusiceqcakesComponent},
  {path: 'corporatecakes/poker_casino', component: PokercasinocakesComponent},
  {path: 'corporatecakes/watch_brands', component: WatchbrandscakesComponent},
  {path: 'corporatecakes/rocket', component: RocketcakesComponent},
  {path: 'corporatecakes/gymcakes', component: GymcakesComponent},
  {path: 'corporatecakes/cameracake', component: CameracakesComponent},
  {path: 'corporatecakes/james_bond', component: JamesBondcakesComponent},
  {path: 'corporatecakes/hardware_tool', component: HarwaretoolcakesComponent},

  {path: 'featuredcakes', component: FeaturedcakesComponent},
  {path: 'featuredcakes/drip', component: DripcakesComponent},
  {path: 'featuredcakes/castle_cakes', component: CastlecakesComponent},
  {path: 'featuredcakes/film_theme', component: FilmThemecakesComponent},
  {path: 'featuredcakes/gardening', component: GardeningcakesComponent},
  {path: 'featuredcakes/iphone_apple', component: IphoneApplecakesComponent},
  {path: 'featuredcakes/make_up', component: MakeupcakesComponent},
  {path: 'featuredcakes/perfume_themed', component: PerfumeThemedcakesComponent},
  {path: 'featuredcakes/science_themed', component: ScienceThemedcakesComponent},
  {path: 'featuredcakes/unicorn', component: UnicorncakesComponent},
  {path: 'featuredcakes/luxury_fashion', component: LuxuryFashioncakesComponent},
  {path: 'featuredcakes/religious_themed', component: ReligiousthemecakesComponent},

  {path: 'kids', component: KidscakesComponent},
  {path: 'kids/crown_tiara', component: CrownTiaracakesComponent},
  {path: 'kids/safari_themed', component: SafariThemedcakesComponent},
  {path: 'kids/comic_themed', component: ComicThemedcakesComponent},
  {path: 'kids/peppa_pig', component: PeppaPigcakesComponent},
  {path: 'kids/shark_themed', component: SharkThemedcakesComponent},
  {path: 'kids/pj_mask', component: PJMaskcakesComponent},
  {path: 'kids/lego', component: LegocakesComponent},
  {path: 'kids/number_shaped', component: NumberShapedcakesComponent},
  {path: 'kids/minions', component: MinionscakesComponent},
  {path: 'kids/paw_patrol', component: PawPatrolcakesComponent},
  {path: 'kids/avengers', component: AvengercakesComponent},

  {path: 'ourcakes', component: OurcakesComponent},
  {path: 'ourcakes/1st25th50thbday', component: Birthday1st25th50thComponent},
  {path: 'ourcakes/pet_shape', component: PetShapedcakesComponent},
  {path: 'ourcakes/alcohol_theme', component: AlcoholthemecakesComponent},
  {path: 'ourcakes/fresh_cream', component: FreshCreamcakesComponent},
  {path: 'ourcakes/butter_cream', component: ButterCreamcakesComponent},


  {path: 'sportscakes', component: SportscakesComponent},
  {path: 'sportscakes/football_clubs', component: FootballclubscakesComponent},
  {path: 'sportscakes/tennis', component: TenniscakesComponent},
  {path: 'sportscakes/cricket', component: CricketcakesComponent},
  {path: 'sportscakes/baseball', component: BaseballcakesComponent},
  {path: 'sportscakes/all_video_games', component: VideogamecakesComponent},
  {path: 'sportscakes/all_consoles', component: AllConsolescakesComponent},
  {path: 'sportscakes/car_cakes', component: CarcakesComponent},


  {path: 'specialcakes', component: SpecialcakesComponent},
  {path: 'specialcakes/house_warming', component: HousewarmingcakesComponent},
  {path: 'specialcakes/graduation', component: GraduationcakesComponent},
  {path: 'specialcakes/valentinesday', component: ValentinesDayComponent},
  {path: 'specialcakes/baby_shower', component: BabyshowerComponent},
  {path: 'specialcakes/gender_reveal', component: GenderrevcakesComponent},
  {path: 'specialcakes/mothersday', component: MothersDayComponent},
  {path: 'specialcakes/fathersday', component: FathersDayComponent},
  {path: 'specialcakes/easter', component: EastercakesComponent},
  {path: 'specialcakes/christmas', component: ChristmascakesComponent},
  {path: 'specialcakes/newyear', component: NewYearComponent},
  {path: 'specialcakes/baptism', component: BaptismcakesComponent},
  {path: 'specialcakes/anniversary', component: AnniversaryComponent},
  {path: 'specialcakes/wedding', component: WeddingComponent},

  {path: 'cart', component:  CartComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
