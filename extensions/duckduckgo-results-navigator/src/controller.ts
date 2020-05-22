import { error } from 'console';

const ResultsSelector = '.result__a';

class ResultElement extends HTMLElement {
  private focused: boolean;

  constructor() {
    super();
    this.focused = false;
  }

  public is_focused(): boolean {
    return this.focused;
  }

  public focus(): void {
    super.focus();
    this.focused = true;
  }

  public unfocus(): void {
    if (!this.focused) {
      return;
    }

    super.blur();
    this.focused = false;
  }
}

function count_of_res_elements(): number {
  try {
    return document.querySelectorAll(ResultsSelector).length;
  } catch {
    return -1;
  }
}

function get_res_element_by_index(index: number): ResultElement {
  return get_all_res_elements()[index];
}

function get_all_res_elements(): NodeListOf<ResultElement> {
  return document.querySelectorAll(ResultsSelector);
}

export default class Controller {
  private focused_res_index: number;

  constructor() {
    this.focused_res_index = 0;
  }

  private render(): void {
    get_all_res_elements().forEach((elem) => {
      elem.unfocus();
    });

    const res_elem = get_res_element_by_index(this.focused_res_index);
    res_elem.focus();
  }

  public focus_on_next_res(): void {
    const num_res = count_of_res_elements();
    if (num_res === -1) {
      throw error('No results found');
    }

    if (this.focused_res_index === num_res) {
      this.focused_res_index = 0;
    } else {
      this.focused_res_index++;
    }
    this.render();
  }

  public focus_on_prev_res(): void {
    const num_res = count_of_res_elements();
    if (num_res === -1) {
      throw error('No results found');
    }

    if (this.focused_res_index === 0) {
      this.focused_res_index = num_res;
    } else {
      this.focused_res_index--;
    }
    this.render();
  }
}
