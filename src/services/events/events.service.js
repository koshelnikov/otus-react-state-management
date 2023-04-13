import {random} from "../../utils/rand";
import {asyncExecution} from "../../utils/promise";

export class EventsService {

    getEventsAmount(id) {
        console.log(`HTTP MOCK REQUEST: getEventsAmount user: ${id}`);
        return asyncExecution(() => random(1, id + 10))
    }
}
