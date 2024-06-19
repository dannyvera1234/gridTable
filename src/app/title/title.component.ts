import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  public filtersButtonName = input<string>();

  public createButtonName = input<string>();

  accionButton = input<boolean | undefined>(true);
}
