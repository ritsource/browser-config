import {
  //   get_all_res_elements,
  count_of_res_elements,
  //   get_res_element_by_index,
  focus_on_next_res,
  focus_on_prev_res
} from './src/scripts';

const tabId: number = (() => {
  let id: number;

  chrome.tabs.query({ currentWindow: true, active: true }, function (tabArray) {
    const tab = tabArray[0];
    id = tab.id;
  });

  return id;
})();

// let PresetsDone = true;

chrome.commands.onCommand.addListener(function (command) {
  //   if (!PresetsDone) {
  //     chrome.tabs.executeScript(tabId, {
  //       code: `
  //         const get_all_res_elements = ${get_all_res_elements},
  //         const count_of_res_elements = ${count_of_res_elements},
  //         const get_res_element_by_index = ${get_res_element_by_index},
  //         const focus_on_next_res = ${focus_on_next_res},
  //         const focus_on_prev_res = ${focus_on_prev_res},
  //         `
  //     });
  //     PresetsDone = true;
  //   }

  if (command === 'focus-on-next-res') {
    console.log('focus-on-next-res happened!');

    // chrome.tabs.query({ currentWindow: true, active: true }, function (
    //   tabArray
    // ) {
    //   const tab = tabArray[0];

    chrome.tabs.executeScript(tabId, {
      code: `
      (${focus_on_next_res})(1, ${count_of_res_elements}())`
    });
    // });

    // chrome.tabs.getCurrent((tab) => {
    // });

    // chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
  } else if (command === 'focus-on-prev-res') {
    console.log('focus-on-prev-res happened!');
    // controller.focus_on_prev_res();
  }
});
