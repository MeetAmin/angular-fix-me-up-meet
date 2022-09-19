import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { Observable, of } from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent {
// constructor
// ngonit(method) getSingleaccount(id):
//call serivce method getSingleaccount pass id which is sent above
accounts$: Observable<Account[]> = of([]);
constructor(private accountService: AccountService,private route:ActivatedRoute) {}
accounts: Account[] = [];
accountsFilter = '';

ngOnInit(): void {
// 'id' is the name of the route parameter        
  const accountID = this.route.snapshot.params['id'];
  this.accountService.getSingleaccount(accountID).subscribe((accounts) => {
    this.accounts = accounts;
  });
}

filterAccounts(accounts: Account[]) {
  return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');
}

}
