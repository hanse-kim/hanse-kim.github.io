const defaultThrottleDelay = 500;

export const optimizeUtils = {
  throttle: <TArgs extends Array<unknown>>(
    callback: (...args: TArgs) => void,
    delay = defaultThrottleDelay
  ) => {
    let lastCallAt: number | null = null;
    let timer: NodeJS.Timeout | null = null;

    return (...args: TArgs) => {
      const now = Date.now();

      if (timer !== null && lastCallAt !== null) {
        if (now - lastCallAt < delay) {
          clearTimeout(timer);
        }
      }

      lastCallAt = now;
      timer = setTimeout(() => callback(...args), delay);
    };
  },
};
