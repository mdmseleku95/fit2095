import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-addmovie-toactor',
  templateUrl: './addmovie-toactor.component.html',
  styleUrls: ['./addmovie-toactor.component.css']
})
export class AddmovieToactorComponent implements OnInit {
  ngOnInit(): void {
    this.onGetMovies();
    this.onGetActors();
    throw new Error("Method not implemented.");
  }
  actorsDB: any[] = [];
  moviesDB: any[] = [];
  section = 1;
  movietitle: string = "";
  year: number = 0;
  movieId: string = "";
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";
  constructor(private dbService: DatabaseService) {}
  //Get all Movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  onGetActors() {
    console.log("From on GetActors");

    return this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }
  //Create a new Movie POST request
  onSaveMovie() {
    let obj = { title: this.movietitle, year: this.year };
    this.dbService.createMovie(obj).subscribe(result => {
      this.onGetMovies();
    });
  }
  // Update a Movie
  onSelectUpdate(item) {
    this.movietitle = item.title;
    this.year = item.year;
    this.movieId = item._id;
  }

  onSelectActor(itemA) {
    this.fullName = itemA.name;
    this.bYear = itemA.bYear;
    this.actorId = itemA._id;
  }
  onUpdateMovie() {
    let obj = { "id":this.movieId };
    this.dbService.addMovie(this.actorId, obj).subscribe(result => {
      this.onGetMovies();
    });
  }

}
