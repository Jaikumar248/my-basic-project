import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-basic-project';

  // serverElements = [{type: 'server', name: 'Testserver', content: 'just a test'}];
 regForm = new FormGroup({
    uname: new FormControl("John",[Validators.required, Validators.minLength(8)] ),
    email: new FormControl("abc@gmail.com", [Validators.email, Validators.required])
  })
}
