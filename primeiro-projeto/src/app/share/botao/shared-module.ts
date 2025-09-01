import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BotaoComponent } from './botao/botao.component';



@NgModule({
  declarations: [BotaoComponent],
  imports: [CommonModule],
  exports: [BotaoComponent]
})
export class SharedModule { }
