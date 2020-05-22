import { error } from 'console';

type ControllerState = {
  focused_res_node: HTMLElement;
};

class Controller {
  private state: ControllerState;

  constructor(initial_res_node: HTMLElement) {
    this.state = {
      focused_res_node: null
    };

    if (initial_res_node) {
      this.update_state({ focused_res_node: initial_res_node });
    }
  }

  update_state(new_state: any) {
    this.state = {
      ...this.state,
      ...new_state
    };
  }

  get_state() {
    return this.state;
  }

  render() {
    if (this.state.focused_res_node) {
      this.state.focused_res_node.focus();
    } else {
      throw error('No focused result found');
    }
  }
}

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'focus-on-next-res') {
    console.log('focus-on-next-res happened!');
  } else if (command === 'focus-on-prev-res') {
    console.log('focus-on-prev-res happened!');
  }
});
