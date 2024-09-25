import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatGridListModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  profileForm = new FormGroup({
    name: new FormControl(
      '', 
      [
        Validators.required,
        Validators.minLength(4),
      ]),
    email: new FormControl('', Validators.required),
    aliases: new FormArray([new FormControl('')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(new FormControl(''));
    // this.profileForm.value.aliases?.push('');
  }

  deleteAlias(index: number) {
    this.aliases.removeAt(index);
    // this.profileForm.value.aliases?.push('');
  }

  handleSubmit() {
    // alert(
    //   this.profileForm.value.name + ' | ' + this.profileForm.value.email
    // );
    console.warn(this.profileForm.value);
  }
}
