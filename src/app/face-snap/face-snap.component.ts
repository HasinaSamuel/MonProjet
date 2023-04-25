import { Component, Input, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  ButtonText!:string
  @Input() faceSnap! : FaceSnap;

  constructor(private faceSnapService: FaceSnapService){}

  ngOnInit(): void {
    this.ButtonText = "Oh Snap!";
  }

  onSnap(){
    if(this.ButtonText === "Oh Snap!") {
      this.faceSnapService.snapFaceSnap(this.faceSnap.id, 'snap');
      this.ButtonText = "Oops, un Snap!"
    }else {
      this.faceSnapService.snapFaceSnap(this.faceSnap.id, 'unsnap');
      this.ButtonText = "Oh Snap!"
    }
  }
}
