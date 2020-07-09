import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IntMapper, Statelify } from 'statelify';
import { StatelifyAngularAdapter } from '../statelify-adapter/statelify-angular-adapter';

interface CharactersParams {
  page: number;
  pageSize: number;
  search?: string;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public statelify: Statelify<CharactersParams>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.statelify = new Statelify<CharactersParams>({
      adapter: new StatelifyAngularAdapter(this.router, this.activatedRoute),
      itemDefinitions: {
        page: {
          mapper: IntMapper
        },
        pageSize: {
          mapper: IntMapper
        },
        search: {
        }
      }
    });
  }

}
