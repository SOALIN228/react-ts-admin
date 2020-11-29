export const doCustomTimes = (times: number, callback: () => void) => {
  let i = -1;
  while (++i < times) {
    callback();
  }
};
