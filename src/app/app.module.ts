import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { SideNav } from './side-nav.component';
import { ListView } from './list-view.component'
import { HttpModule }    from '@angular/http';

import { ModalComponent } from './modal.component';
import { AppComponent }  from './app.component';
import { MovieService }   from './movie.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations:[ 
    AppComponent,
    SideNav,
    ListView,
    ModalComponent,
  ],
  bootstrap: [ 
    AppComponent
  ],
  providers: [ MovieService ]
})

export class AppModule { }
