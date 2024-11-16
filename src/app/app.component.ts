import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule , LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'ABWebSolutions';
}
