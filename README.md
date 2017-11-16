# TypeScript - Language Presentation + Webpack + AngularJS + Node.js
![alt text](https://github.com/steevehook/typescript-webpack-angularjs/blob/master/img/home/background.png)

#### Get Started:
Make sure you have node installed

If you are using yarn package manager:
1. `$ yarn install` - Install all necessary dependencies
2. `$ yarn run webpack` - Run project build
3. `$ yarn run webpack-dev-server` - Run project build (dev server)
4. `$ yarn run ntsc` - Run typescript compiler

If you are using npm package manager:
1. `$ npm install` - Install all necessary dependencies
2. `$ npm run webpack` - Run project build
3. `$ npm run webpack-dev-server` - Run project build (dev server)
4. `$ npm run ntsc` - Run typescript compiler

#### Up and Running:
open  `http://localhost:3000` to run the app in the browser

#### Project Structure
```
├── app/
│  ├── @types/
│  │    └── require.d.ts
│  ├── assets/
│  │    ├── _borders.scss
│  │    └── _images.scss
│  ├── components/
│  │    ├── home/
│  │    │     ├── home.module.ts
│  │    │     ├── home.component.ts
│  │    │     ├── home.controller.ts
│  │    │     ├── calendar.html
│  │    │     └── calendar.scss
│  │    ├── playground/
│  │    │     ├── playground.module.ts
│  │    │     ├── playground.component.ts
│  │    │     ├── playground.service.ts
│  │    │     ├── playground.html
│  │    │     ├── playground.scss
│  │    │     └── contracts/
│  │    │         └── ITopic.ts
│  │    │     └── topics/
│  │    │       ├── topics.module.ts
│  │    │       └── topics/
│  │    │           └── advanced-types/
│  │    │              ├── components.module.ts
│  │    │           └── basic-types/
│  │    │              ├── components.module.ts
│  │    │           └── classes/
│  │    │              ├── components.module.ts
│  │    │           └── declaration-files/
│  │    │              ├── components.module.ts
│  │    │           └── declaration-merging/
│  │    │              ├── components.module.ts
│  │    │           └── decorators/
│  │    │              ├── components.module.ts
│  │    │           └── enums/
│  │    │              ├── components.module.ts
│  │    │           └── functions/
│  │    │              ├── components.module.ts
│  │    │           └── generics/
│  │    │              ├── components.module.ts
│  │    │           └── interfaces/
│  │    │              ├── components.module.ts
│  │    │           └── iterators/
│  │    │              ├── components.module.ts
│  │    │           └── mixins/
│  │    │              ├── components.module.ts
│  │    │           └── module-resolution/
│  │    │              ├── components.module.ts
│  │    │           └── modules/
│  │    │              ├── components.module.ts
│  │    │           └── namespaces/
│  │    │              ├── components.module.ts
│  │    │           └── namespaces-and-modules/
│  │    │              ├── components.module.ts
│  │    │           └── symbols/
│  │    │              ├── components.module.ts
│  │    │           └── triple-slash-directives/
│  │    │              ├── components.module.ts
│  │    │           └── type-compatibility/
│  │    │              ├── components.module.ts
│  │    │           └── type-inference/
│  │    │              ├── components.module.ts
│  │    │           └── variable-declarations/
│  │    │              ├── components.module.ts
│  │    ├── components.module.ts
│  ├── common/
│  │    ├── nav/
│  │    │     ├── nav.module.ts
│  │    │     ├── nav.component.ts
│  │    │     ├── nav.controller.ts
│  │    │     ├── nav.html
│  │    │     └── nav.scss
│  │    ├── footer/
│  │    │     ├── footer.module.ts
│  │    │     ├── footer.component.ts
│  │    │     ├── footer.controller.ts
│  │    │     ├── footer.html
│  │    │     └── footer.scss
│  │    └── common.module.ts
│  ├── app.module.ts
│  ├── app.component.ts
│  └── app.scss
└─ index.html
```

> For more information on application structure and style guide, please check out this convention
[Angular 1.x style guide (TypeScript) - Todd Motto](https://github.com/toddmotto/angularjs-styleguide/tree/master/typescript).