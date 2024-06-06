import { Component, inject } from '@angular/core';
import { PartyStore } from '../store/party.store';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-party-list-table',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './party-list-table.component.html',
  styleUrl: './party-list-table.component.scss'
})
export class PartyListTableComponent {
  partyStore = inject(PartyStore);
  parties$ = this.partyStore.loadPartyListAll();
  router = inject(Router);
  toastrService = inject(ToastrService);


  ngOnInit(): void {
    this.parties$ = this.partyStore.loadPartyListAll();
  }

  redirectToEditPArtyForm(id: any) {
    this.router.navigate(['party-list', id]);
  }

  deleteParty(id: number) {
    this.partyStore.deletePartyList(id);
    this.toastrService.success('deleted completed successfully!', 'Success');

  }
}
