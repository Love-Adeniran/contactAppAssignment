import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { KeyComponent } from './key/key.component'
import { DisplayContactComponent } from './display-contact/display-contact.component'

const routes: Routes = [
  { path: "", component: KeyComponent },
  { path: "contacts", component: DisplayContactComponent }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
