import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UpperCaseService } from '../upper-case.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe-card',
  templateUrl: './async-pipe-card.component.html',
  styleUrls: ['./async-pipe-card.component.scss']
})
export class AsyncPipeCardComponent implements OnInit {

  name = 'AsyncPipe component';

  messageSubscription: Observable<string>;

  constructor(private upperCaseService: UpperCaseService) { }

  ngOnInit() {

    this.messageSubscription = this.upperCaseService.getUpperCaseMessage()
    .pipe(map((message: string) => {
      console.log(`${this.name} - ${message}`);
      return message;
    }));
  }

  ngOnDestroy() {
    console.log('Destroy Call from Async Pipe Card component');
  }

}
