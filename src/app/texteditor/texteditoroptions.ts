export class TextEditorOptions {
 
   public content : string;
   public outputFormat : string = "html"; 
   public inline : boolean = false;
   public disabled : boolean = false;
   public editorId : string;
   public height : string;
   public isPluginsRequired : boolean = false;
   public isToolbarRequired : boolean = false;
   public isMenuRequired : boolean = false;

   constructor(content : string,outputFormat : string,inline: boolean,disabled: boolean
    ,editorId: string,height:string,isPluginsRequired : boolean,isToolbarRequired : boolean,isMenuRequired : boolean ) {
        this.content = content;
        this.outputFormat = outputFormat; 
        this.inline = inline;
        this.disabled = disabled;
        this.editorId = editorId;
        this.height  = height;
        this.isPluginsRequired = isPluginsRequired;
        this.isToolbarRequired = isToolbarRequired;
        this.isMenuRequired = isMenuRequired;
   }
    

}
