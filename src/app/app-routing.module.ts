import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ImageComponent } from "./image/image.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "event/:id",
    component: ImageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
