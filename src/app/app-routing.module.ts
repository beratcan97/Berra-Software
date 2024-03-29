import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  }, {
    path: "berra-software",
    component: AppComponent
  }, {
    path: 'test',
    component: AppComponent
  }, {
    path: '**',
    component: AppComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  // Tested but did not work
  exports: [RouterModule]
})
export class AppRoutingModule { }
