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
import { FooterComponent } from './components/footer/footer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { FooterSocialComponent } from './components/footer-social/footer-social.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';

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
    FooterComponent,
    CopyrightComponent,
    FooterSocialComponent,
    FooterMenuComponent,
  ],
  imports: [BrowserModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
