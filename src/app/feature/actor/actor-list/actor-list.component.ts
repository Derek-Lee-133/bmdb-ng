import { Component, OnInit } from '@angular/core';
import {ActorService} from '../../../service/actor.service';
import {Actor} from '../../../model/actor.class';
import {SystemService} from '../../../service/system.service';


@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  title= 'Actor List';
  actors: Actor[] = [];

  constructor(private actorSvc:ActorService, private sysSvc:SystemService) { }

  ngOnInit(): void {
    console.log(" actor-list bloggedInUser?" ,this.sysSvc.loggedInUser);
    this.actorSvc.getAll().subscribe(
      resp => {
        this.actors = resp as Actor[];
        console.log('Actors,this.actors')
      },
      err =>{
        console.log(err);
      }
    );

  }

}
