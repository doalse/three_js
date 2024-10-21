import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js', // Вказати ваш вхідний файл
  output: {
    file: 'dist/bundle.js', // Вихідний файл
    format: 'iife', // Формат виходу (може бути 'umd', 'esm' тощо)
    name: 'BUNDLE', // Ім'я глобальної змінної
  },
  plugins: [
    resolve(), // Для знаходження модулів
    commonjs() // Для конвертації CommonJS в ES6
  ],
};
