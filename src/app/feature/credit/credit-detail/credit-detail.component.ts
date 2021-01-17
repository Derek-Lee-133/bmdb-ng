import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  title= "Credit Detail";
  credit: Credit = null;
  creditId: number = 0;
  constructor(private movieSvc: CreditService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id from url
    this.route.params.subscribe(
      parms => {this.creditId= parms['id'];
      console.log(this.creditId);
    }
    );
    // get movie by id
    this.movieSvc.getById(this.creditId).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Credit',this.credit);
      },
      err =>{
        console.log(err);
      }
    );
  }
  delete()  {
    // delete the movie to DB
    this.movieSvc.delete(this.credit.id).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Credit deleted' ,this.credit)
        // forward to the movie list component
          this.router.navigateByUrl("/credit-list");
      },
      err =>{
        console.log(err);
      }
    );
  }
}