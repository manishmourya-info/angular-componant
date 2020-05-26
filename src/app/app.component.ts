import { Component } from '@angular/core';
import { TextEditorOptions } from './texteditor/texteditoroptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  content = '<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>';
  options =  new TextEditorOptions(this.content,"html", false,false, "text-editor", "500px", true,true,true);

  onContentChanged($event) {
    console.log($event);
  }
}
