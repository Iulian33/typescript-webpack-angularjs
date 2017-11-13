const template: string = require('./home.html');

export const HomeComponent = {
    template,
    controller: class Component {
        constructor() {
            'ngInject'; // Not actually needed but best practice to keep here in case dependencies needed in the future
        }
    }
};