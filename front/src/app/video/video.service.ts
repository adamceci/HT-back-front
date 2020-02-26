import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { VideoModel } from './video.model';

@Injectable()
export class VideoService
{
  private video: VideoModel = {
                    _id: '',
                    name: '',
                    summary: ''
                  };
  private videoUpdated = new Subject<VideoModel>();

  constructor(private http: HttpClient) {}

  getVideo()
  {
    this.http.get<VideoModel>('http://localhost:3000/api/video/read/5e569fe21c9d440000e65b00')
      .subscribe((responseData) =>
      {
        this.video = responseData;
        this.videoUpdated.next(this.video);
      });
  }

  getVideoUpdateListener()
  {
    return this.videoUpdated.asObservable();
  }
}
