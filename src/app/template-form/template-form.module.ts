import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from '../components/template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from '../components/form-debug/form-debug.component';
import { CampoControlErroComponent } from '../components/campo-control-erro/campo-control-erro.component';

@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlErroComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class TemplateFormModule {}
