import { Component, Input } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent {
@Input() parentForm:FormGroup = new FormGroup({});
@Input() controlName: string =''
@Input() label: string ='';
@Input() placeholder: string ='';
@Input() type: string ='text';
@Input() id:string ='';

}
