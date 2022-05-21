import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorPipe'
})
export class ErrorPipePipe implements PipeTransform {

  values: Record<string,string> = {
    'sampleSizerequired': 'Sample Size is required',
    'sampleMeanrequired': 'Sample Mean is required',
    'standardDeviationrequired': 'Standard Deviation is required',
    'hypothesizedMeanrequired': 'Hypothesized Mean is required',
    'sampleSizemin': 'Sample Size value must be greater than 1',
    'standardDeviationmin': 'Standard Deviation value must be greater than 0',
    'sampleSizepattern': 'Sample Size must be whole number',
    'sampleMeanpattern': 'Sample Mean must be numeric',
    'standardDeviationpattern': 'Standard Deviation must be numeric',
    'hypothesizedMeanpattern': 'Hypothesized mean must be numeric',
  }

  transform(value: string): string {
    return this.values[value] || value;
  }

}
