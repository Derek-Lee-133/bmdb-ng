import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {
  title= 'Actor Create';
  actor:Actor = new Actor();
  submitBtnTitle = "Create";

  constructor(private actorSvc: ActorService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  save()  {
    // save the movie to DB
    this.actorSvc.create(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor created', this.actor)
         // forward to the actor list component
         this.router.navigateByUrl("/actor-list");
      },
      err =>{
        console.log(err);
      }
    );
  }}
