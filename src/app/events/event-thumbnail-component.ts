import {Component, Input,Output, EventEmitter } from '@angular/core'

@Component({
    selector  : 'event-thumbnail',
    template : `
    <div class="card">
    <div><h2> {{event.name}} </h2></div>
    <div>Date : {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Location: {{event.location}}</div>
    <button (click)="handleClick()" style='marginTop:1rem'>Book</button>
    </div>
    `,
    styleUrls: ["./event-thumbnail.css"]
})
export class EventThumbnailComponent {
    @Input() event : any ;

    publicProp : String = "I am Public Property"

    @Output() eventClicked  = new EventEmitter();

    handleClick(){
        this.eventClicked.emit(this.event.name);
    }
}