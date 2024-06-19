import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableGridComponent } from '../table-grid/table-grid.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule,TableGridComponent,TitleComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  _columnBanks = [
    { field: 'name', header: 'Name' },
    { field: 'classification', header: 'Classification' },
    { field: 'country', header: 'Country' },
    { field: 'territories', header: 'Territories' },
    { field: 'status', header: 'Status' },
  ];

  _filtersButton = 'Filters';

  _createButton = 'Create';

  _dataBanks = [
    {
      name: [{ inicial: 'ap' }, { name: 'Apple Inc.' }, { subName: 'CEO' }],
      classification: 'A',
      country: 'United States',
      territories: [{ name: 'United States' }, { name: 'China' }, { name: 'Japan' }],
      status: 'Active',
    },
    {
      name: [{ inicial: 'fb' }, { name: 'Facebook' }, { subName: 'Manager' }],
      classification: 'A,B',
      country: 'United States',
      territories: [{ name: 'United States' }, { name: 'India' }, { name: 'Brazil' }],
      status: 'Active',
    },
    {
      name: [{ inicial: 'go' }, { name: 'Google LLC' }, { subName: 'Director' }],
      classification: 'A,B,C',
      country: 'United States',
      territories: [{ name: 'United States' }, { name: 'Europe' }],
      status: 'Active',
    },
    {
      name: [{ inicial: 'msf' }, { name: "McDonald's" }, { subName: 'Manager' }],
      classification: 'A,B',
      country: 'United States',
      territories: [{ name: 'United States' }, { name: 'Canada' }],
      status: 'Active',
    },
    {
      name: [{ inicial: 'am' }, { name: 'Adobe Systems' }, { subName: 'CEO' }],
      classification: 'A',
      country: 'United States',
      territories: [{ name: 'United States' }, { name: 'Australia' }],
      status: 'Active',
    },
    {
      name: [{ inicial: 'in' }, { name: 'Intel Corporation' }, { subName: 'Manager' }],
      classification: 'A,B',
      country: 'United States',
      territories: [{ name: 'United States' }, { name: 'China' }, { name: 'Vietnam' }],
      status: 'Active',
    },
    {
      name: [{ inicial: 'ne' }, { name: 'Netflix' }, { subName: 'Director' }],
      classification: 'A,B,C',
      country: 'United States',
      territories: [{ name: 'United States' }, { name: 'United Kingdom' }],
      status: 'Active',
    },
    {
      name: [{ inicial: 'tsl' }, { name: 'Twitter' }, { subName: 'Manager' }],
      classification: 'A,B',
      country: 'United States',
      territories: [{ name: 'United States' }, { name: 'Mexico' }, { name: 'Spain' }],
      status: 'Active',
    },
    {
      name: [{ inicial: 'hp' }, { name: 'HP Inc.' }, { subName: 'CEO' }],
      classification: 'A,B',
      country: 'United States',
      territories: [{ name: 'United States' }, { name: 'Germany' }],
      status: 'Active',
    },
    {
      name: [{ inicial: 'bmw' }, { name: 'BMW AG' }, { subName: 'Manager' }],
      classification: 'A,B,C',
      country: 'Germany',
      territories: [{ name: 'Germany' }, { name: 'United States' }],
      status: 'Active',
    },
  ];
}
