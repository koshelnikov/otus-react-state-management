import {random} from "./rand";

export const asyncExecution = (getResult) => {
    const timeout = random(0, 500);
    return new Promise(res =>
        setTimeout(() => res(getResult()), timeout));
}