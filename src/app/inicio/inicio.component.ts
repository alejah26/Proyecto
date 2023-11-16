import { Component } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  url: string = '';
  resultado: any = null;
  error: boolean = false;
  msjeError:string = '';
  diagnostico: any;

  URL_API_ARTISAN = 'http://localhost:8000/api/';

  URL_API_APACHE = 'http://localhost/proyecto-u/backend/public/api/';

  URL_API_PROD = 'https://api.mipyme-cibersegura-fusa.com/api/';

  constructor(private _http: HttpClient) {}

  verifyUrl(){
    this.error = false;
    
    if(this.url=== ''){
      this.error = true;
      this.msjeError = 'Ingrese la url para verificarla en nuestro sistema. Ej: http://dominio.com';
      return;
    }
    
    let regexUrl = new RegExp(
        // valida protocolo
        '^(https?:\\/\\/)?'+
        // valida nombre de dominio
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
        // valida OR direccion ip (v4)
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
        // valida puerto y path
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
        // valida queries
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
        // valida fragment locator
    '(\\#[-a-z\\d_]*)?$','i'
    );
    
    const urlValidate: boolean = regexUrl.test(this.url);

    if(!urlValidate){
      this.error = true;
      this.resultado = null;
      this.msjeError = 'El texto ingresado NO corresponde a un Localizador de Recursos Uniforme(URL) válido.';
      return
    }
    
    const params = new HttpParams().append('url', this.url);
    
   return this._http.get<any>(this.URL_API_PROD+ 'secure/get', {params})
      .subscribe(res => {
        this.error = res.error;
        this.resultado = res.data;
         if(this.error){
            this.msjeError = res.message;
         }else{
          this.diagnostico = this.resultado.dias_expira > 0 && this.resultado.tiene_ssl;
         }
      });
    
      
    
  }

  nuevaConsulta(){
    this.url = '';
    this.resultado = null;
  }

}
