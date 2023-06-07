import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuizComponent } from './quiz.component';

@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [QuizComponent]
})
export class QuizModule { }
