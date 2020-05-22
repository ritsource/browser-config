import Controller from './src/controller';

const controller = new Controller();

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'focus-on-next-res') {
    console.log('focus-on-next-res happened!');
    controller.focus_on_next_res();
  } else if (command === 'focus-on-prev-res') {
    console.log('focus-on-prev-res happened!');
    controller.focus_on_prev_res();
  }
});
