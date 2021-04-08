import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  id: any;
  url: any;
  public urlSafe: SafeResourceUrl | undefined;
  // urlSafe: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.id});
      console.log(this.id);
      
      this.url = 'https://www.youtube.com/embed/' + this.id;
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
