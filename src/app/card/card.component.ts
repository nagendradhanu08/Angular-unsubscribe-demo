import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { UpperCaseService } from '../upper-case.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  name = 'No unsubscribe component';
  message: string;
  subscription: Subscription;
  interval;

  constructor(private upperCaseService: UpperCaseService) { }

  ngOnInit() {
    this.subscription = this.upperCaseService.getUpperCaseMessage()
      .subscribe((message: string) => {
        this.message = message;
        //    this.interval = setInterval(() => {
        //   console.log('please unsubscribe me');
        // }, 1000)
        console.log(`${this.name} - ${message}`);
      });
  }
  ngOnDestroy() {
    console.log('Destoy Call from Card Component');
    // clearInterval(this.interval)
    // this.subscription.unsubscribe();
    

  }

}
