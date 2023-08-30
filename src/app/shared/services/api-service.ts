import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL: string;
  constructor(private http: HttpClient) {
    this.BASE_URL = environment.API_URL;
  }

  // post list
  getBlogPostList(data: any = ''): Observable<any> {
    return this.http.post(`${this.BASE_URL}/post/list`, data).pipe(
      tap(
        data => data,
        error => error
      )
    );
  }

  // post list
  getBlogPostByid(id: any = ''): Observable<any> {
    return this.http.post(`${this.BASE_URL}/post/detail`, id).pipe(
      tap(
        data => data,
        error => error
      )
    );
  }

  // registor new user
  registorUser(data: any = ''): Observable<any> {
    return this.http.post(`${this.BASE_URL}/user/register`, data).pipe(
      tap(
        data => data,
        error => error
      )
    );
  }

  // login user
  loginUser(data: any = ''): Observable<any> {
    return this.http.post(`${this.BASE_URL}/user/login`, data).pipe(
      tap(
        data => data,
        error => error
      )
    );
  }

  // all users 
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/user/users`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // user by id in body
  getUserById(id: any = ''): Observable<any> {
    return this.http.post(`${this.BASE_URL}/user/detail`, id).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  updateProfile(data: any = ''): Observable<any> {
    return this.http.put(`${this.BASE_URL}/user/edit_profile`, data).pipe(
      tap(
        data => data,
        error => error
      )
    );
  }

  updateBasicInfo(data: any = ''): Observable<any> {
    return this.http.put(`${this.BASE_URL}/user/edit_basic`, data).pipe(
      tap(
        data => data,
        error => error
      )
    );
  }

  updatePassswoard(data: any = ''): Observable<any> {
    return this.http.put(`${this.BASE_URL}/user/change_pass`, data).pipe(
      tap(
        data => data,
        error => error
      )
    );
  }


  // getDealDetails(id): Observable<any> {
  //   return this.http.get(this.BASE_URL + '/merchantcustomerlead/' + id).pipe(
  //     tap(
  //       data => data,
  //       error => error
  //     )
  //   );
  // }
  // updateReason(data: any = ''): Observable<any> {
  //   return this.http.put(`${this.BASE_URL}/merchantleadreason`, data).pipe(
  //     tap(
  //       data => data,
  //       error => error
  //     )
  //   );
  // }
  // deleteReason(id): Observable<any> {
  //   return this.http.delete(`${this.BASE_URL}/merchantleadreason/` + id).pipe(
  //     tap(
  //       data => data,
  //       error => error
  //     )
  //   );
  // }
  // updateLeadTags(data: any = ''): Observable<any> {
  //   return this.http.patch(`${this.BASE_URL}/update/tag/` + data?.id, data?.payLoadData).pipe(
  //     tap(
  //       data => data,
  //       error => error
  //     )
  //   );
  // }
  // //Download lead csv catalog 
  // getDownloadcvsCatalog(): Observable<any> {
  //   return this.http.get(`${this.BASE_URL}/convert/lead/csv`, {responseType: 'text'})
  // }


  // topics list
  getTopics(): Observable<any> {
    return this.http.get(`assets/json/topic.json`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // Country list
  getCountry(): Observable<any> {
    return this.http.get(`assets/json/country.json`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // Time zone list
  getTimeZone(): Observable<any> {
    return this.http.get(`assets/json/timezone.json`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // todo list
  getTodos(): Observable<any> {
    return this.http.get(`assets/json/todos.json`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // todo list
  getSideBar(): Observable<any> {
    return this.http.get(`assets/json/sidebar.json`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // ais list
  getAis(): Observable<any> {
    return this.http.get(`assets/json/ais.json`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // user list
  getUsers(): Observable<any> {
    return this.http.get(`assets/json/user.json`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

   // user list
   getQuestions(): Observable<any> {
    return this.http.get(`assets/json/questions.json`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }



}