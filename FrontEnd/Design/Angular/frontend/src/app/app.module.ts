import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { TitleComponent } from './components/partials/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    FoodPageComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent,
    TagsComponent,
    TitleComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, RatingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}