import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'FerremasWeb';
  usuarios: any;

  constructor(private http: HttpClient) {}
    
  ngOnInit(): void {
    this.http.get('http://localhost:5162/api/Usuario').subscribe({
    next: response => this.usuarios = response,
    error: error => console.log(error),
    complete: () => console.log('Completado')
  
  })
  
 
}

}
