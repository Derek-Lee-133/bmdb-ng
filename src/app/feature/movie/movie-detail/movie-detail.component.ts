import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title= "Movie Detail";
  movie: Movie = null;
  movieId: number = 0;
  constructor(private movieSvc: MovieService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id from url
    this.route.params.subscribe(
      parms => {this.movieId= parms['id'];
      console.log(this.movieId);
    }
    );
    // get movie by id
    this.movieSvc.getById(this.movieId).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie',this.movie);
      },
      err =>{
        console.log(err);
      }
    );
  }
  delete()  {
    // delete the movie to DB
    this.movieSvc.delete(this.movie.id).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie deleted' ,this.movie)
        // forward to the movie list component
          this.router.navigateByUrl("/movie-list");
      },
      err =>{
        console.log(err);
      }
    );
  }
}
