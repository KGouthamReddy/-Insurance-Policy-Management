import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplypolicyComponent } from './applypolicy/applypolicy.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PolicycrudComponent } from './policycrud/policycrud.component';
import { UpdatepolicyComponent } from './updatepolicy/updatepolicy.component';
import { DeletepolicyComponent } from './deletepolicy/deletepolicy.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'applypolicy', component: ApplypolicyComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'policycrud', component: PolicycrudComponent},
  {path: 'deletepolicy', component: DeletepolicyComponent},
  {path: 'updatepolicy', component: UpdatepolicyComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ApplypolicyComponent,
    HistoryComponent,
    HomeComponent,
    PolicycrudComponent,
    UpdatepolicyComponent,
    DeletepolicyComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
