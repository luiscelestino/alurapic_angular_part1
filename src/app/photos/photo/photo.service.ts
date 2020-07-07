import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

// Gerado um provider para o nosso service, de modo que seja retornada a mesma instância para toda aplicação (providedIn: 'root').
@Injectable({ providedIn: 'root' })
export class PhotoService {
  // Quando usamos um modificador de acesso no parâmetro do construtor,
  // o TypeScript transforma ele em um atributo da classe.
  // Desta forma, conseguimos acessar 'http' dentro do método 'listFromUser'.
  constructor(private http: HttpClient) {}

  // Não se deve chamar o método 'subscribe' aqui, pois ele deve ser chamado na hora de for utilizar os dados.
  listFromUser(userName: string) {
    return this.http
        .get<Photo[]>(API + '/' + userName + '/photos');
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
        .append('page', page.toString());

    return this.http
        .get<Photo[]>(API + '/' + userName + '/photos', { params }); // { params: params } --> chave tem o mesmo nome do valor
  }

}
