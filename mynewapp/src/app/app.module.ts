import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplypolicyComponent } from './applypolicy/applypolicy.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'applypolicy', component: ApplypolicyComponent},
  {path: 'history', component: HistoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ApplypolicyComponent,
    HistoryComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
