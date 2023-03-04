import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { RandomIdService } from '@elemental-concept/random-id';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  result: string;

  formGroup: FormGroup;

  constructor(private readonly randomIdService: RandomIdService) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      parts: new FormControl(4),
      separator: new FormControl('-'),
      prefix: new FormControl(''),
      suffix: new FormControl('')
    });
  }

  getRandomIdTimestamp = () => {
    const formValue = this.formGroup.value;
    this.result = this.randomIdService.getRandomIdTimestamp(formValue.separator, formValue.prefix, formValue.suffix);
  };

  getRandomId = () => {
    const formValue = this.formGroup.value;
    this.result = this.randomIdService.getRandomId(formValue.parts, formValue.separator, formValue.prefix, formValue.suffix);
  };
}
