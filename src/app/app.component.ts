import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface Producto {
  price: string
  name: string
  id: string
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'demo-front';
  lisproductos: Producto[] = [];
  private  url = 'http://localhost:8080/demo/api/v1/products'
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Producto[]>(this.url).subscribe((data) => {
      this.lisproductos = data;
    }
    );
  }
}
