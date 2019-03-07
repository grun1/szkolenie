import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Movie } from 'src/app/core/interfaces/movie.interface';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() movie: Movie = null;

  movieUrl = "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4";

  constructor(
    private $element: ElementRef
  ) { }

  ngOnInit() {
  }

  fullscreen(){
    if(!document['fullscreenElement']){
      this.$element.nativeElement.requestFullscreen();
    }else{
      document.exitFullscreen;
    }
    console.log("FullScreen");
  }


}
