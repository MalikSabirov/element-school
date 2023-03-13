import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { LogoComponent } from './components/logo/logo.component';
import { IntroComponent } from './components/intro/intro.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { CardComponent } from './components/card/card.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    LogoComponent,
    IntroComponent,
    WhyUsComponent,
    CardComponent,
    TestimonialsComponent,
  ],
  imports: [BrowserModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
