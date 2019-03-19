import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { appRoutes } from './routes'

import { NavBarComponent } from './nav/navbar.component'

import { ToastrService } from './common/toastr.service'

import { Error404Component } from './errors/404.component'

import {
  EventsListComponent, 
  EventThumbnailComponent, 
  EventDetailsComponent, 
  CreateEventComponent, 
  EventRouterActivator, 
  EventListResolver, 
  EventService
} from './events/index'

import { EventsAppComponent      } from './events-app.component'
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    EventsAppComponent, 
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent, 
    CreateEventComponent,
    Error404Component,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, 
    ToastrService,
    EventRouterActivator,
    EventListResolver,
    AuthService,
    {
        provide: 'canDeactivateCreateEvent', 
        useValue: checkDirtyState
    }

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent ){
  if ( component.isDirty )
  {
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
}
