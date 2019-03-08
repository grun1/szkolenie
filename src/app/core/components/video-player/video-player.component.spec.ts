import { async, ComponentFixture, TestBed, flush } from '@angular/core/testing';

import { VideoPlayerComponent } from './video-player.component';
import { Movie } from '../../interfaces/movie.interface';
import { EventEmitter } from '@angular/core';

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent;
  let fixture: ComponentFixture<VideoPlayerComponent>;
  let $element: HTMLHtmlElement = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerComponent);
    component = fixture.componentInstance;
    $element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
    const movie: Movie = {
      id: 'string',
      title: 'string',
      description: 'string',
      thumb_url: 'string',
      movie_url: 'https://www.youtube.com/embed/FHzgsiNO6AY',
      year: 1995,
      duration: 41,
      rate: 5
    }

    component.movie = movie;
    component.status = new EventEmitter();
    component.player = {
      nativeElement: {
        play: () => {},
        pause: () => {}
      }
    };
    //Call
    fixture.detectChanges();

  });
  afterEach (()=> {
    fixture.debugElement.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should video playing after click play button', () => {
    fixture.detectChanges();
    // const spy = spyOn(component, 'play');

    fixture.detectChanges();

    component.status.subscribe(evt => {
      expect(evt.status).toEqual('playing');
    });

    const $play = $element.querySelectorAll('button')[0];
    $play.click();

    // expect(spy).toHaveBeenCalled();
  });

  it('should video pause after click to pause button', () => {

    fixture.detectChanges();
    // const spy = spyOn(component, 'pause');
    fixture.detectChanges();

    component.status.subscribe(evt => {
      expect(evt.status).toEqual('pause');
    });

    const $pause = $element.querySelectorAll('button')[1];
    $pause.click();
    // expect(spy).toHaveBeenCalled();

  });


});
