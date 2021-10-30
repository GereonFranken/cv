import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { SetOnMobile } from "./cv.actions";

export interface CVStateModel {
  onMobile: boolean;
}

@State<CVStateModel>({
  name: "cvState",
  defaults: { onMobile: false },
})

@Injectable()
export class CVState {
  @Action(SetOnMobile)
  public setOrientation(ctx: StateContext<CVStateModel>, action: SetOnMobile) {
    // Assuming that if the height of the windows is bigger than the width, the user is on mobile/ tablet
    // TODO: Handle edge cases like users browsing on half screen width
    const state = ctx.getState();
    ctx.patchState({...state, onMobile: action.onMobile});
  }
}
