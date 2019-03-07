import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListItemComponent implements OnInit {

  @Input() movie =  null;

  constructor(
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setTimeout(() =>
    {
      this.movie.rate=10;
      this.changeDetector.markForCheck();
    })
  }

  redirectMovieProfile(){
    this.router.navigateByUrl('/movies/' + this.movie.id);
  }

  buildRate(){
    console.log(new Date);
   return this.movie.rate*10 + '%'
  }

}
