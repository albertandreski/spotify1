import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCcO7-0cwz2ceBQ3uiPkWt6pmgjiuvsupExm_-ARujeNjAKh1wAiQmQmo1a5lIuq9jmdsey9RuB6eVrLTzV0ExJrgikU-ewOi20FyZfPmTspWKsU9b3iG8GCSEcHrq_osbp7Lf06riMN9fYF8mpHeEYuF0wZdU97xr_qSBzyUxCZpcqfhFm5_1i-YXzmxQ2zCWjlmQU9MBEc3s'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

