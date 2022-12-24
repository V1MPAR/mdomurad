import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from "./button/button.component";
import { ButtonSocialComponent } from "./button-social/button-social.component";

@NgModule({
  declarations: [ButtonComponent, ButtonSocialComponent],
  exports: [ButtonComponent, ButtonSocialComponent],
  imports: [
    CommonModule,
  ],
})
export class ButtonModule { }
