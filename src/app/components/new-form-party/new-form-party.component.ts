import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PartyService } from '../../services/party.service';
import { PartyStore } from '../store/party.store';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-form-party',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-form-party.component.html',
  styleUrl: './new-form-party.component.scss',
})
export default class NewFormPartyComponent {
  newpartyForm!: FormGroup;
  partyService = inject(PartyService);
  fb = inject(FormBuilder);
  partyStore = inject(PartyStore);
  router = inject(Router);
  toastrService = inject(ToastrService);

  constructor() {}

  ngOnInit(): void {
    this.newpartyForm = this.fb.group({
      name: [],
      company_name: [, Validators.required],
      mobile_no: [
        ,
        [Validators.required, Validators.pattern(/^[0-9]{10,12}$/)],
      ],
      telephone_no: [],
      whatsapp_no: [],
      email: [, [Validators.required, Validators.email]],
      remark: [],
      login_access: [, Validators.required],
      date_of_birth: [],
      anniversary_date: [],
      gstin: [,],
      pan_no: [],
      apply_tds: [, Validators.required],
      credit_limit: [, Validators.required],
    });
  }

  addNewPartyRecord() {
    if (this.newpartyForm.valid) {
      this.partyStore.addNewParty(this.newpartyForm.value);
      this.toastrService.success('new Party added succesfully', 'Success');
      this.router.navigate(['party-list']);
      this.newpartyForm.reset();
    } else {
      this.toastrService.error('Form is invalid');
    }
  }
}
