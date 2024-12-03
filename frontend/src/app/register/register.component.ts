import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Input() isModalOpen = false;

    closeModal(event?: Event): void {
        this.isModalOpen = false;
    }

}
