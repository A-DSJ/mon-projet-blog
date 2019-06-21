import { Component, OnInit, Input } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
 
  @Input() postTitre: string;
  @Input() postContenu: string;
  @Input() likeCount: number;
  @Input() postDate: Date;

  constructor() { }

  ngOnInit() {
  }

  evolutionCompteur(isGood: boolean)
  {   
    this.likeCount = isGood ? ++this.likeCount : --this.likeCount ;
  }
}
