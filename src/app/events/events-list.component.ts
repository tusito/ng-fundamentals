import { Component, OnInit } from '@angular/core'
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
        
    </div>
    `
})

export class EventsListComponent implements OnInit {
  events:IEvent[]

  constructor(  private toastr: ToastrService, private route:ActivatedRoute) {
    
  }

  ngOnInit(){
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName){
    console.log('is working the handleThumbnailClick')
    this.toastr.success(eventName)
  }
}
