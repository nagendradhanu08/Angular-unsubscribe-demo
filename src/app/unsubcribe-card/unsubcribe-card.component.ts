import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UpperCaseService } from '../upper-case.service';

@Component({
  selector: 'app-unsubcribe-card',
  templateUrl: './unsubcribe-card.component.html',
  styleUrls: ['./unsubcribe-card.component.scss']
})
export class UnsubcribeCardComponent implements OnInit {
  name = 'Unsubscribe component';
  message: string;

  subscription: Subscription;

  constructor(private upperCaseService: UpperCaseService) {
  }

  ngOnInit() {
    this.subscription = this.upperCaseService.getUpperCaseMessage()
      .subscribe((message: string) => {
      this.message = message;
      console.log(`${this.name} - ${message}`);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('destoy call from unsubcribe component');
  }

}
