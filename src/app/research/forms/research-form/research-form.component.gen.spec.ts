import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ResearchFormComponent } from './research-form.component';

describe('ResearchFormComponent', () => {
  let component: ResearchFormComponent;
  let fixture: ComponentFixture<ResearchFormComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: () => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ResearchFormComponent],
      providers: [FormBuilder]
    });
    fixture = TestBed.createComponent(ResearchFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`formErrors has default value`, () => {
    expect(component.formErrors).toEqual([]);
  });

  it(`formValues has default value`, () => {
    expect(component.formValues).toEqual([]);
  });

  it(`built a form`, () => {
    expect(component.researchForm).toBeDefined()

  });

  it('makes expected submit calls', () => {
    spyOn(component, 'errorCheck').and.callThrough();
    spyOn(component, 'resetForm').and.callThrough();
    component.submit();
    expect(component.errorCheck).toHaveBeenCalled();
    component.researchForm.controls['sampleSize'].patchValue(2);
    component.researchForm.controls['sampleMean'].patchValue(2);
    component.researchForm.controls['standardDeviation'].patchValue(2);
    component.submit();
    expect(component.resetForm).toHaveBeenCalled();
  });

  it('makes expected calls', () => {
    spyOn(component, 'getControlValue').and.callThrough(); 
     component.subscribeToCheckbox();
    expect(component.getControlValue).toHaveBeenCalled();
  });

});
