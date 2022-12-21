import { ChangeDetectionStrategy, Component  } from '@angular/core';

@Component({
  selector: 'lib-button-social',
  templateUrl: './button-social.component.html',
  styleUrls: ['./button-social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSocialComponent {}
