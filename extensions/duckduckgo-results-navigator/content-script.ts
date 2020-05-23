export function get_all_res_elements(): NodeListOf<HTMLElement> {
  return document.querySelectorAll('.result__a');
}

export function count_of_res_elements(): number {
  return get_all_res_elements().length;
}

export function get_res_element_by_index(index: number): HTMLElement {
  return get_all_res_elements()[index];
}

export function focus_on_next_res(current_res_index: number): number {
  let res_index = current_res_index;
  res_index = res_index === count_of_res_elements() - 1 ? 0 : res_index + 1;

  const res_elem = get_res_element_by_index(res_index);
  res_elem.focus();

  return res_index;
}

export function focus_on_prev_res(current_res_index: number): number {
  let res_index = current_res_index;
  res_index = res_index === 0 ? count_of_res_elements() - 1 : res_index - 1;

  const res_elem = get_res_element_by_index(res_index);
  res_elem.focus();

  return res_index;
}
