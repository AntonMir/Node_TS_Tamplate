module.exports = {
  "env": {
      "es2021": true,
      "node": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
    "no-unused-vars": "warn",  // если переменная обозначена но не вызвана - выдать warn
    "no-console": "warn", // триггер на console.log()
    // "quotes": ["warn", "double"], // ошибка если будем использовать в коде одинарные кавычки
    "prefer-const": "warn", // переменная let без перезаписи будет выдавать warning
    // "indent": ["warn", 4], // кол-во пробелов в отступе
    "max-len": ["warn", {"code": 120}], // максимаьлная длинна строки
    // "comma-dangle": ["warn", "always"], // запятая последнего элемента объекта
    "semi": ["warn", "never"], // предупреждение на ;
  }
}
