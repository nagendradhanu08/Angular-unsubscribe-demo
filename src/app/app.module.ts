import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPipeCardComponent } from './async-pipe-card/async-pipe-card.component';
import { CardComponent } from './card/card.component';
import { TakeUntilCardComponent } from './take-until-card/take-until-card.component';
import { UnsubcribeCardComponent } from './unsubcribe-card/unsubcribe-card.component';
import { UpperCaseService } from './upper-case.service';
import { TakeWhileCardComponent } from './take-while-card/take-while-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeCardComponent,
    CardComponent,
    TakeUntilCardComponent,
    UnsubcribeCardComponent,
    TakeWhileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UpperCaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
