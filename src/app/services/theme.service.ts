import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  colorTheme: any;

  initColorTheme() {

    if (localStorage.getItem('user-theme') === null) {
      this.colorTheme = "dark-mode"
    } else {
      this.colorTheme = localStorage.getItem('user-theme');
      console.log("init"+this.colorTheme)
    };
  }

  updateColorTheme(){
    //console.log("before "+this.colorTheme)
    //console.log("LS "+localStorage.getItem('user-theme'))
    if (localStorage.getItem('user-theme') === null) {
      this.colorTheme = "dark-mode"
      localStorage.setItem('user-theme', this.colorTheme)
    } else {
      this.colorTheme = localStorage.getItem('user-theme');
      if (this.colorTheme === 'dark-mode') {
        this.colorTheme = 'light-mode'
      } else {this.colorTheme = 'dark-mode'};
      //console.log("changed "+this.colorTheme);
      localStorage.setItem('user-theme', this.colorTheme)

    };
    //console.log("update after"+this.colorTheme)
    return this.colorTheme;
  }

  /* updateColorTheme(){
    console.log("update before"+this.colorTheme)
    console.log(localStorage.getItem('user-theme'))
    if (localStorage.getItem('user-theme') === null) {
      this.colorTheme = "dark-mode"
      localStorage.setItem('user-theme', "dark-mode")
    } else {
      this.colorTheme = localStorage.getItem('user-theme');
      this.colorTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
      localStorage.setItem('user-theme', this.colorTheme)

    };
    //console.log("update after"+this.colorTheme)
    return this.colorTheme;
  } */

}
