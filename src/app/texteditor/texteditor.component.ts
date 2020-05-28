import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { TextEditorOptions } from './texteditoroptions';


@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.css']
})
export class TexteditorComponent implements OnInit {

  /** Editor Layput Options  */
  @Input() options: TextEditorOptions;

   /** Editor content change event capture  */
  @Output() onContentChanged: EventEmitter<string> = new EventEmitter<string>();
 
  /** Editor Data Variables  */
  _editor : any;
  content : string;
  outputFormat : string;
  inline : boolean;
  disabled : boolean;
  editorId : string;
  init : {};

  constructor() { }

  ngOnInit(): void {
        
        /** Intilialize variable with user options  */
        this.content = this.options.content;
        this.outputFormat = this.options.outputFormat;
        this.inline = this.options.inline;
        this.disabled = this.options.disabled;
        this.editorId = this.options.editorId;
        this.init = {
          base_url: '/tinymce', 
          suffix: '.min',
          height : this.options.height,
          branding: false,
          toolbar :  'bold italic underline strikethrough | fullscreen',
          plugins : ['lists fullscreen'],
        };
        
        /** append menu bar if required  */
        if (this.options.isMenuBarRequired) {
              this.init["menu"] = {
                                    file: { title: 'File', items: 'newdocument restoredraft | preview | print' },
                                    edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
                                    view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen' },
                                    insert: { title: 'Insert', items: 'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime' },
                                    format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat' },
                                    tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
                                    table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
                                    help: { title: 'Help', items: 'help' }
                                  };
        } else {
            this.init["menubar"] = false;
        }
        
        /** append status bar if required  */
        if (this.options.isStatusBarRequired) {
            this.init["statusbar"] = true;
        } else {
            this.init["statusbar"] = false;
        }

         /** append toolbar if required  */
        if (this.options.isToolbarRequired) {
              this.init["toolbar"] = 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor emoticons casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment | help';
        }

         /** associate plugins with editor for advance options */
        if (this.options.isPluginsRequired) {
            this.init["plugins"] = [ 'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template paste help'];
        }
  }
 
  onActivate($event) {
  } 
  
  onAddUndo($event) {
  } 

  onBeforeAddUndo($event) {
  } 
  
  onBeforeExecCommand($event) {
  } 

  onBeforeGetContent($event) {
  } 

  onBeforeRenderUI($event) {
  } 

  onBeforeSetContent($event) {
  } 

  onBeforePaste($event) {
  } 

  onBlur($event) {
  } 

  onChange($event) {
    this.onContentChanged.emit($event.editor.getContent());
  }
 
  onClearUndos($event) {
  } 

  onClick($event) {
  } 

  onContextMenu($event) {
  } 

  onCopy($event) {
  } 

  onCut($event) {
  } 

  onDblclick($event) {
  } 

  onDeactivate($event) {
  } 

  onDirty($event) {
  } 

  onDrag($event) {
  } 

  onDragDrop($event) {
  } 

  onDragEnd($event) {
  } 

  onDragGesture($event) {
  } 

  onDragOver($event) {
  } 

  onDrop($event) {
  } 

  onExecCommand($event) {
  } 

  onFocus($event) {
  } 

  onFocusIn($event) {
  } 

  onFocusOut($event) {
  } 

  onGetContent($event) {
  } 

  onHide($event) {
  } 

  onInit($event) {
    this._editor =  $event.editor;
  } 

  onKeyDown($event) {
  } 
  
  onKeyPress($event) {
  } 

  onKeyUp($event) {
  } 

  onLoadContent($event) {
  } 

  onMouseDown($event) {
  } 

  onMouseEnter($event) {
  } 

  onMouseLeave($event) {
  } 

  onMouseMove($event) {
  } 

  onMouseOut($event) {
  } 

  onMouseOver($event) {
  } 

  onMouseUp($event) {
  } 

  onNodeChange($event) {
  } 

  onObjectResizeStart($event) {
  } 

  onObjectResized($event) {
  } 

  onObjectSelected($event) {
  } 

  onPaste($event) {
  } 

  onPostProcess($event) {
  } 

  onPostRender($event) {
  } 

  onPreProcess($event) {
  } 

  onProgressState($event) {
  } 

  onRedo($event) {
  } 

  onRemove($event) {
  } 

  onReset($event) {
  } 

  onSaveContent($event) {
  } 

  onSelectionChange($event) {
  } 

  onSetAttrib($event) {
  } 

  onSetContent($event) {
  } 

  onShow($event) {
  } 

  onSubmit($event) {
  } 

  onUndo($event) {
  } 

  onVisualAid($event) {
  }

}
