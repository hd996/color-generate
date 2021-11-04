import { generate } from './generate';

if (typeof window !== 'undefined' && window.ColorsGenerate) {
  window.ColorsGenerate = generate;
}

export { generate };
