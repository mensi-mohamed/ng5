import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {

    url: string
    constructor(private http : Http){
        this.url  = 'https://api.datamuse.com/words?ml='
        //https://www.flightradar24.com/v1/search/web/find?query=ay1577
        //https://data-live.flightradar24.com/clickhandler/?version=1.5&flight=10be20df
    }

    search_word(term){
        return this.http.get(this.url + term).map(res => {
            return res.json().map(item => {
                return item.word
            })
        })
    }
}
