import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonSocialComponent } from "./button-social/button-social.component";

@NgModule({
  declarations: [ButtonSocialComponent],
  exports: [ButtonSocialComponent],
  imports: [
    CommonModule,
  ],
})
export class ButtonModule { }
