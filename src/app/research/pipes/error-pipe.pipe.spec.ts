import { ErrorPipePipe } from './error-pipe.pipe';

describe('ErrorPipePipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorPipePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms text', () => {
    const pipe = new ErrorPipePipe();
    expect(pipe.transform('sampleSizerequired')).toEqual('Sample Size is required');
  });

});
