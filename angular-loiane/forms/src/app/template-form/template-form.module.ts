import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form.component';
import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './../form-debug/form-debug.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TemplateFormComponent, FormDebugComponent, CampoControlErroComponent],
  exports: [TemplateFormComponent]
})
export class TemplateFormModule { }
