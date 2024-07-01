import { obrigatorio } from "../../util/index.js";

export function bindEvent(
    event = obrigatorio('event'),
    selector = obrigatorio('selector'),
    prevent = true ) {
    return function(target, propertKey, descriptor) {

        Reflect.defineMetadata(
            'bindEvent',
            { event, selector, prevent, propertKey},
            Object.getPrototypeOf(target), propertKey);

        return descriptor;
    }
}