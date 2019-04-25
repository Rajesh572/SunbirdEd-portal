import { ResourceService } from '../../services/index';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICard } from '../../interfaces';
import { IImpressionEventInput, IInteractEventObject } from '@sunbird/telemetry';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage-card',
  templateUrl: './landingpage-card.component.html',
  styleUrls: ['./landingpage-card.component.css']
})
export class LandingpageCardComponent implements OnInit {
  /**
* content is used to render IContents value on the view
*/
  @Input() data: ICard;
  @Input() customClass: string;
  @Output() clickEvent = new EventEmitter<any>();

  Userrating = 3;

  constructor(public resourceService: ResourceService,
    public router: Router
    ) {
    this.resourceService = resourceService;
  }

  ngOnInit(): void {
    console.log('recieved data in the card is ', this.data);
  }

  public onAction(data, action) {

    action = {
      eventName: 'onImage'
    };
    console.log(action);
    data.action = action;
    console.log(data);
    this.clickEvent.emit({ 'action': action, 'data': data });
    this.router.navigate(['/play/collection', data.identifier]);
  }
}