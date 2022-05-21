import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-research-form',
  templateUrl: './research-form.component.html',
  styleUrls: ['./research-form.component.css'],
})
export class ResearchFormComponent implements OnDestroy {
  public researchForm: FormGroup;
  private wholeNumber: RegExp = /^\d+$/;
  private numeric: RegExp = /^-?[0-9]\d*(\.\d+)?$/;
  public formErrors: object[] = [];
  public formValues: any = [];
  public isHypothesisTest: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.researchForm = this.generateForm();
    this.isHypothesisTest = this.getControlValue(
      this.researchForm.controls['hypothesisTest']
    ).subscribe((value) => this.enableHypothesizedMean(value));
  }

  ngOnDestroy(): void {
    this.isHypothesisTest.unsubscribe();
  }
  
  generateForm(): FormGroup {
    return this.formBuilder.group({
      sampleSize: [
        '',
        [
          Validators.min(2),
          Validators.pattern(this.wholeNumber),
          Validators.required,
        ],
      ],
      sampleMean: ['', [Validators.pattern(this.numeric), Validators.required]],
      standardDeviation: [
        '',
        [
          Validators.min(Number.MIN_VALUE),
          Validators.pattern(this.numeric),
          Validators.required,
        ],
      ],
      hypothesisTest: [false],
      hypothesizedMean: [
        {
          value: '',
          disabled: true,
        },
      ],
    });
  }

  submit() {
    this.errorCheck();

    if (this.researchForm.valid) {
      this.formValues.push(this.researchForm.value);
      this.resetForm();
    }
  }

  resetForm() {
    this.formErrors = [];
    this.researchForm.reset();
    this.researchForm = this.generateForm();
    this.isHypothesisTest.unsubscribe();
    this.isHypothesisTest = this.subscribeToCheckbox();
  }

  errorCheck() {
    this.formErrors = [];

    for (const el in this.researchForm.controls) {
      if (this.researchForm.controls[el].errors) {
        const controlName = el.toString();
        this.formErrors.push({
          [controlName]: Object.keys(
            this.researchForm.controls[el].errors as object
          )[0],
        });
      }
    }
  }

  getControlValue(control: AbstractControl): Observable<any> {
    return control.valueChanges;
  }

  enableHypothesizedMean(value: boolean) {
    const control = this.researchForm.controls['hypothesizedMean'];

    if (value) {
      control.enable();
      control.addValidators([
        Validators.required,
        Validators.pattern(this.numeric),
      ]);
    } else {
      control.patchValue('');
      control.clearValidators();
      control.disable();
    }

    control.updateValueAndValidity();
  }

  subscribeToCheckbox() {
    return this.getControlValue(
      this.researchForm.controls['hypothesisTest']
    ).subscribe((value) => this.enableHypothesizedMean(value));
  }
}
