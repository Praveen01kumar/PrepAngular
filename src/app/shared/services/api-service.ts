import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL: string;
  constructor(
    private http: HttpClient,
    private authservice: AuthService
  ) {
    this.BASE_URL = environment.API_URL;
  }

  get getheader() {
    const getToken: any = localStorage.getItem('token');
    const token = this.authservice.decrypt(getToken);
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return { headers }
  }



  // post list
  getBlogPostList(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/posts`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // post by id
  getBlogPostByid(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/posts/${id}`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // registor new user
  registorUser(data: any = ''): Observable<any> {
    return this.http.post(`${this.BASE_URL}/auth/signup`, data).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // login user
  loginUser(data: any = ''): Observable<any> {
    return this.http.post(`${this.BASE_URL}/auth/login`, data).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // login user otp
  loginOTP(data: any = ''): Observable<any> {
    return this.http.post(`${this.BASE_URL}/auth/mail-login-otp`, data).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // log out user 
  logout(data: any = ''): Observable<any> {
    return this.http.post(`${this.BASE_URL}/auth/logout`, data).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // rend reset password link on mail 
  resetMail(data: any = ''): Observable<any> {
    return this.http.post(`${this.BASE_URL}/auth/mailtoresetpass`, data).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // verify me  
  verifyMe(data: any = ''): Observable<any> {
    const getToken: any = localStorage.getItem('token');
    const token = this.authservice.decrypt(getToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.BASE_URL}/auth/verify-account-mail`, data, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
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

  // // user by id in body
  // getUserById(id: any = ''): Observable<any> {
  //   return this.http.post(`${this.BASE_URL}/user/detail`, id).pipe(
  //     map((response: any) => {
  //       return response;
  //     }),
  //     catchError((err: any) => {
  //       return err;
  //     })
  //   );
  // }

  updateProfile(data: any = ''): Observable<any> {
    const getToken: any = localStorage.getItem('token');
    const token = this.authservice.decrypt(getToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.patch(`${this.BASE_URL}/auth/update_pf_img`, data, { headers }).pipe(tap(
      data => data,
      error => error
    )
    );
  }

  updateBasicInfo(data: any = ''): Observable<any> {
    const getToken: any = localStorage.getItem('token');
    const token = this.authservice.decrypt(getToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.patch(`${this.BASE_URL}/auth/update_self`, data, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  updatePassswoard(data: any = ''): Observable<any> {
    const getToken: any = localStorage.getItem('token');
    const token = this.authservice.decrypt(getToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.patch(`${this.BASE_URL}/auth/change_pass_self`, data, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
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


  // all post Categories 
  getAllCategory(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/postctg`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // create new post
  createNewPost(data: any): Observable<any> {
    const getToken: any = localStorage.getItem('token');
    const token = this.authservice.decrypt(getToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.BASE_URL}/posts/create`, data, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // post comments
  leavePostComment(data: any = ''): Observable<any> {
    const getToken: any = localStorage.getItem('token');
    const token = this.authservice.decrypt(getToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.BASE_URL}/comment/create`, data, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }

  // post comments list
  getCommnetsList(data: any = ''): Observable<any> {
    const getToken: any = localStorage.getItem('token');
    const token = this.authservice.decrypt(getToken);
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.post(`${this.BASE_URL}/comment/comment_list`, data, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }


  // connect-mail 
  connectmail(data: any = ''): Observable<any> {
    return this.http.post(`${this.BASE_URL}/auth/connect-mail`, data, this.getheader).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: any) => {
        return err;
      })
    );
  }



}