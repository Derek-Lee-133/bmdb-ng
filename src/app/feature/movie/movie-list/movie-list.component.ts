import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';
import {Movie} from '../../../model/movie.class';
import {MovieService} from '../../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = "Movie List";
 movies: Movie[] = [];

 constructor(private movieSvc:MovieService,
              private sysSvc:SystemService) { }

  ngOnInit(): void {
    console.log ('movie list - logged in User?', this.sysSvc.loggedInUser)
    // populate list of movies
    this.movieSvc.getAll().subscribe(
      resp => {
        this.movies = resp as Movie[];
        console.log('Movies,this.movies')
      },
      err =>{
        console.log(err);
      }
    );

  }

}
