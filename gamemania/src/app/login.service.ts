import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostrarMenu = new Subject<boolean>()

  constructor() { }

  login(usuario:string, senha:string){
    if(usuario=="aluno" && senha=="1234"){
      localStorage.setItem('token','qwer1234');
      this.mostrarMenu.next(true);
      window.location.reload();
    }
  }

  setMostraMenu(valor: boolean) {
    this.mostrarMenu.next(valor)
  }

  getMostraMenu(){
    return this.mostrarMenu.asObservable();
  }

}
