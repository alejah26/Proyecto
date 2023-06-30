import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
 /* url: string = '';
  resultado: any = null;

  constructor(private http: HttpClient) {}

  verificarCertificado() {
    // Realizar una petición HTTPS con HttpClient
    this.http.get(this.url, {observe: 'response'})
      .subscribe(response => {
        // Comprobar si hay algún error de certificado
        if (response.headers.has('Strict-Transport-Security') ||
            response.headers.has('Public-Key-Pins') ||
            response.headers.has('Expect-CT') ||
            response.headers.has('X-Content-Type-Options') ||
            response.headers.has('X-Frame-Options') ||
            response.headers.has('X-XSS-Protection')) {
          // El sitio tiene certificados de seguridad
          const certificados = response.headers.getAll('X-509-Self-Signed-Certificate');
          this.resultado = {
            titulo: 'Es seguro',
            mensaje: 'El sitio tiene certificados de seguridad',
            certificados: certificados
          };
        } else {
          // El sitio no tiene certificados de seguridad
          this.resultado = {
            titulo: 'Es inseguro',
            mensaje: 'El sitio no tiene certificados de seguridad'
          };
        }
      }, error => {
        // Hubo un error en la petición
        this.resultado = {
          titulo: 'Error',
          mensaje: 'Hubo un error al verificar el certificado'
        };
      });
  }*/
}
