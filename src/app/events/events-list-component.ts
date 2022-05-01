import {Component} from '@angular/core'
@Component({
    selector:'events-list',
    template : `
    <h1>Upcoming Angular MeetUps</h1>
    <hr/>
    <event-thumbnail #thumbnail 
    [event]="eventParent" 
    (eventClicked)="handleClicked($event)"
    >
    </event-thumbnail>
    `
}) 

export class EventListComponent{

    eventParent : any = {
        id:1,
        name : "Angular MeetUp",
        date : "01 May 2022",
        time : "8:00 AM",
        location: "Whitefield , Bangalore"
    }
    handleClicked(data:any){
        console.log(data);
    }
}