import { FiltroArrayPipe } from './filtro-array.pipe';
import { Pipe } from '@angular/core';

// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({
  name: 'pipeImpura',
  pure: false
})
export class PipeImpuraPipe extends FiltroArrayPipe {

}
