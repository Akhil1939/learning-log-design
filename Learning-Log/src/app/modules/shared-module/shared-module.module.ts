import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from 'src/app/components/controls/form/text-field/text-field.component';



@NgModule({
  declarations: [
    TextFieldComponent
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  exports: [
    TextFieldComponent
  ]
})
export class SharedModule { }
