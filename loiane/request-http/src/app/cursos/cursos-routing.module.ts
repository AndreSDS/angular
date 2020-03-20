import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CourseResolverGuard } from './course-resolver.guard';


const routes: Routes = [
  { path: '', component: CursosListaComponent },
  { path: 'novo', component: CursosFormComponent,
  resolve: {
    curso: CourseResolverGuard
  }},
  { path: 'editar/:id', component: CursosFormComponent,
  resolve: {
    curso: CourseResolverGuard
  }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
