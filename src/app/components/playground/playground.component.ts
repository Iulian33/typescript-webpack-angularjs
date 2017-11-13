import {IComponentOptions} from "angular";
import PlaygroundController from "./playground.controller";

const template: string = require('./playground.html');
const PlaygroundComponent: IComponentOptions = {
    template,
    controller: PlaygroundController
};

export default PlaygroundComponent;