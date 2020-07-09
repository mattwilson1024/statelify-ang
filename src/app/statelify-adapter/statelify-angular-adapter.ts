import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdapterState, IAdapter } from 'statelify';

export class StatelifyAngularAdapter implements IAdapter {
  public stateChanged$: Observable<AdapterState>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.stateChanged$ = this.activatedRoute.queryParams;
  }
}