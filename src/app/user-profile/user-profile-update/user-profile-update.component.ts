import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile-update',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './user-profile-update.component.html',
  standalone: true,
})
export class UserProfileUpdateComponent {
  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    firstName: ['',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    lastName: ['',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    email: ['',
      [
        Validators.required,
        Validators.email]
    ],
  });

  onSubmit() {
    const formRaw = this.form.getRawValue()
    console.log('save on submit' + JSON.stringify(formRaw))
  }

  onCancel() {
    window.history.back();
  }

}
