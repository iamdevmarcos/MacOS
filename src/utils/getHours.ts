export const getHours = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const hoursFormated = hours < 10 ? `0${hours}` : hours;
  const minutesFormated = minutes < 10 ? `0${minutes}` : minutes;

  const txt = `${hoursFormated}:${minutesFormated} AM`;
  return txt;
};
