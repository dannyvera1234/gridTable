import { CommonModule } from '@angular/common';
import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-table-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-grid.component.html',
  styleUrl: './table-grid.component.css'
})
export class TableGridComponent {

  public columns = input<any[]>();

  public dataTable = input<any[]>();
}
