import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpErrorResponse, HttpClientJsonpModule } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { throwError, EmptyError } from 'rxjs';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  public static settings: any;
  private defaultSettings = { App: 'My shop', Ver: '1.0' };

  constructor(
    // Почему эти зависимости публичные?
    public localStorageService: LocalStorageService,
    public constantsService: ConstantsService,

    private http: HttpClient) { }

    getSettings() {
      let result = this.getSettingsFromLS();
      if (!result) {
        this.getSettingsFromFile().subscribe(
          data => {
            result = data ? data : JSON.stringify(this.defaultSettings);
            return result;
          });
      }
      return this.defaultSettings;
    }

  getSettingsFromFile() {
    const jsonFile = `assets/app-settings.json`;
    return this.http.get<string>(jsonFile)
    .pipe(
      map(data => data),
      retry(2),
      catchError(this.handleError)
    );
  }

  getSettingsFromLS() {
    return this.localStorageService.getItem('appSettings');
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
        console.error('An error occurred:', err.error.message);
    } else {
        console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
}
}
