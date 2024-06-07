import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectOperatorRoutingModule } from './subject-operator-routing.module';
import { SubjectOperatorComponent } from './subject-operator.component';
import { FirstComponentComponent } from '../component/first-component/first-component.component';
import { SecondComponentComponent } from '../component/second-component/second-component.component';
import { ThirdComponentComponent } from '../component/third-component/third-component.component';


@NgModule({
  declarations: [
    SubjectOperatorComponent,FirstComponentComponent,SecondComponentComponent,ThirdComponentComponent
  ],
  imports: [
    CommonModule,
    SubjectOperatorRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SubjectOperatorModule { }
