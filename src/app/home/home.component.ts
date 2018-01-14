import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';
declare var jQuery: any;

@Component({
    selector: 'home-page',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    constructor(private socket: Socket){
        this.socket.on('connection', (data)=>{
            console.log('hello',data);
        })
    }
     ngOnInit(){
        
     }
}