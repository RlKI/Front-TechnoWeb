import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-artista',
  templateUrl: './add-artista.component.html',
  styleUrls: ['./add-artista.component.css']
})
export class AddArtistaComponent implements OnInit {

  artDescription: string;
  artImg: string;
  artName: string;
  artCathegory: any;

  constructor() { }

  ngOnInit() {
  }

}
