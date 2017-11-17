import {IComponentOptions} from 'angular';

const AppComponent: IComponentOptions = {
    template: `
        <loader></loader>
        <navigation></navigation>
        <div class="app" ui-view></div>
        <copyright></copyright>
    `
};

export default AppComponent;