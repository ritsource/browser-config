import { error } from 'console';

type ControllerState = {
  focused_res_node: HTMLElement;
};

export default class Controller {
  private state: ControllerState;

  constructor(initial_res_node: HTMLElement) {
    this.state = {
      focused_res_node: null
    };

    if (initial_res_node) {
      this.update_state({ focused_res_node: initial_res_node });
    }
  }

  update_state(new_state: any): void {
    this.state = {
      ...this.state,
      ...new_state
    };
  }

  get_state(): ControllerState {
    return this.state;
  }

  render(): void {
    if (this.state.focused_res_node) {
      this.state.focused_res_node.focus();
    } else {
      throw error('No focused result found');
    }
  }
}
