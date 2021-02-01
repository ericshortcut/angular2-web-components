import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule, Type } from '@angular/core';
import  { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ContentBoxComponent } from './content-box/content-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    ContentBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector:Injector){
    const [modules] = getDecorators(AppModule);
    modules.declarations.forEach((component)=>{
      const [{ selector }] = getDecorators(component);
       const customElement = createCustomElement(component,{injector});
       customElements.define(selector,customElement);
    });
  }
}

function getDecorators(myClass: Type<any>): any[]|null {
  const decorators = (<any>myClass)?.decorators ?? [];
    return decorators.map(decoratorInvocation => {
      const decoratorType = decoratorInvocation.type;
      const annotationArgs = decoratorInvocation.args ?? [];
      const annotationCls = decoratorType.annotationCls;
      return new annotationCls(...annotationArgs);
    });
}
 
