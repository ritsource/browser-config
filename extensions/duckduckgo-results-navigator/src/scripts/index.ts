export const count_of_res_elements = (): number => {
  return document.querySelectorAll('.result__a').length;
};

export const focus_on_next_res = (
  current_res_index: number,
  count_of_res: number
): number => {
  let res_index = Number.isNaN(current_res_index) ? 0 : current_res_index;
  res_index = res_index === count_of_res - 1 ? 0 : res_index + 1;

  const res_elem: HTMLElement | any = document.querySelectorAll('.result__a')[
    res_index
  ];
  res_elem.focus();

  return res_index;
};

export const focus_on_prev_res = (
  current_res_index: number,
  count_of_res: number
): number => {
  let res_index = Number.isNaN(current_res_index) ? 0 : current_res_index;
  res_index = res_index === 0 ? count_of_res - 1 : res_index - 1;

  const res_elem: HTMLElement | any = document.querySelectorAll('.result__a')[
    res_index
  ];
  res_elem.focus();

  return res_index;
};
