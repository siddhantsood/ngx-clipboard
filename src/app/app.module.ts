import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ClipboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
