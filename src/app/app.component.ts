import {IComponentOptions} from "angular";

const AppComponent: IComponentOptions = {
    template: `
        <navigation></navigation>
        <div ui-view></div>
        <copyright></copyright>
  `
};

export default AppComponent;