import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ListactorsComponent } from "./listactors/listactors.component";
import { ListmoviesComponent } from "./listmovies/listmovies.component";
import { AddactorComponent } from "./addactor/addactor.component";
import { AddmovieComponent } from "./addmovie/addmovie.component";
import { DeleteactorComponent } from "./deleteactor/deleteactor.component";
import { DeletemovieComponent } from "./deletemovie/deletemovie.component";
import { UpdateactorComponent } from "./updateactor/updateactor.component";
import { UpdatemovieComponent } from "./updatemovie/updatemovie.component";
import { RouterModule, Routes } from "@angular/router";
import { AddmovieToactorComponent } from './addmovie-toactor/addmovie-toactor.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';

const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "listmovies", component: ListmoviesComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "updatemovie", component: UpdatemovieComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  {path: "addmovie-toactor", component: AddmovieToactorComponent},
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  {path: "**", component: ViewnotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    ListmoviesComponent,
    AddactorComponent,
    AddmovieComponent,
    UpdateactorComponent,
    UpdatemovieComponent,
    DeleteactorComponent,
    DeletemovieComponent,
    AddmovieToactorComponent,
    ViewnotfoundComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),

    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}