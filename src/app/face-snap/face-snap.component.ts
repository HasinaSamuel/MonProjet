import { Component, Input, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  ButtonText!:string
  @Input() faceSnap! : FaceSnap;

  ngOnInit(): void {
    this.ButtonText = "Oh Snap!";
  }

  onSnap(){
    if(this.ButtonText === "Oh Snap!") {
      this.faceSnap.snaps++;
      this.ButtonText = "Oops, un Snap!"
    }else {
      this.faceSnap.snaps--;
      this.ButtonText = "Oh Snap!"
    }
  }
}
