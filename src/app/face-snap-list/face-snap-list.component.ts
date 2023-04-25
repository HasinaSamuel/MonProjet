import { Component, OnInit } from '@angular/core';
import { FaceSnapService } from '../services/face-snap.service';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnapListe!: FaceSnap[];

  constructor(private faceNapeService: FaceSnapService) { }

  ngOnInit(): void {
    this.faceSnapListe = this.faceNapeService.getAllFaceSnaps();
  }
}
