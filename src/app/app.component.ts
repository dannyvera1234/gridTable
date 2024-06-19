import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListProductComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Input_Output';

  // @Output() decorador para crear un evento personalizado que el componente padre puede escuchar.
  @Output() onIncrement = new EventEmitter<number>();
  //@input() decorador para permitir que los datos fluyan desde el componente padre al componente hijo.
  @Input() count = 0;






  // Angular 18: Nueva forma de crear eventos personalizados
  public onIncrements = output<number>();
  // Angular 18: Nueva forma de crear eventos personalizados
  public prooduc = input<number>();










}
