import {IComponentOptions} from 'angular';

const AppComponent: IComponentOptions = {
    template: `
        <loader></loader>
        <div class="app app--animate" loader-directive ui-view></div>
        <copyright></copyright>
    `
};

export default AppComponent;