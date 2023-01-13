import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-vjs-player',
  template: `
    <video
      #target
      class="video-js"
      controls
      muted
      playsinline
      preload="none"
    ></video>
  `,
  styleUrls: [
    './vjs-player.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target: ElementRef = {} as ElementRef;

  // See options: https://videojs.com/guides/options
  @Input() options: {
    fluid: boolean;
    controls: boolean;
    // aspectRatio: string;
    autoplay: boolean;
    sources: {
      src: string;
      type: string;
    }[];
  } = {
    fluid: true,
    controls: true,
    // aspectRatio: '',
    autoplay: false,
    sources: [],
  };

  player: videojs.Player = {} as videojs.Player;

  constructor(private elementRef: ElementRef) {}

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(
      this.target.nativeElement,
      this.options,
      function onPlayerReady() {
        // console.log('onPlayerReady', this);
        console.log('onPlayerLoad')
      }
    );
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
