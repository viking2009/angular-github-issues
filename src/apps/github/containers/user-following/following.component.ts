import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ActionsSubject, Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { User } from '@app/github/shared/models';

@Component({
  selector: 'app-user-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFollowingComponent implements OnInit {

    public userCollection: any;

    constructor(
      private store: Store<fromRoot.AppState>,
      private actionsSubject: ActionsSubject,
      public snackBar: MatSnackBar) {

  }

    ngOnInit() {
        this.store.select(fromRoot.getFollowing).subscribe( data => {
            if (data) {
                this.userCollection = data;
            }
      });
    }

}
