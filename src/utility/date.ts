export const lastTimeUpdated = (time: string): Boolean => {
  const now = Date.now();
  const millis = now - parseInt(time);
  if (millis / 1000 > 43600) {
    return true;
  } else {
    return false;
  }
};
