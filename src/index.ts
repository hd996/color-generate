import { generate } from './generate';

if (typeof window !== 'undefined' && window.ColorGenerate) {
  window.ColorGenerate = generate;
}

export { generate };
