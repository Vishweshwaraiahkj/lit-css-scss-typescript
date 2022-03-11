import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import litPostCss from 'rollup-plugin-postcss-lit';
import litCss from 'rollup-plugin-lit-css';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve({
      browser: true,
    }),
    typescript(),
    postcss({
      minimize: false,
      inject: false
    }),
    litPostCss(),
    litCss({ include: ['**/*.css'] })
  ],
};
