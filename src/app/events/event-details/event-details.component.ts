import { Component, OnInit } from '@angular/core'
import { EventService } from '../../events/shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/index';

@Component ({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { passing-lef:20px; padding-rigth: 20px;}
        .event-image { height: 100px;}
    `]

})

export class EventDetailsComponent implements OnInit {

    event:IEvent
    constructor(private eventService:EventService, private route:ActivatedRoute) {

    }

    ngOnInit(){
        this.event=this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}