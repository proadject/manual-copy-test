import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
  ) {

   }

  public ngOnInit(): void {
    
  }

  public OnActivate(evt: Event): void {

  }
}
