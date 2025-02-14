import * as test from "blue-tape";
import { applyMiddleware, createStore } from "redux";
import { advanceAlphabeticLetter, turnRobotOn } from "../actions/RobotAction";
import { robotStatusReducer } from "../reducer/RobotReducer";
import { activityFilter } from "./RobotMiddleware";

test("The middleware should throw an error when attempting to make alphabetic advancements when the robot is still turned off", (t) => {
    const store = createStore(robotStatusReducer, applyMiddleware(activityFilter));

    t.throws(() => store.dispatch(advanceAlphabeticLetter));
    t.end();
});
