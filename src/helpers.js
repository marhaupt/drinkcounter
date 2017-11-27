export const prettyPrintTime = miliseconds => {
  let rest = miliseconds;

  const hours = Math.floor(miliseconds / (1000 * 60 * 60));
  rest = miliseconds % (1000 * 60 * 60);

  let minutes = Math.floor(rest / (1000 * 60));
  rest = rest % (1000 * 60);

  let seconds = Math.floor(rest / 1000);

  let result = '';

  if (hours > 0) {
    result = `${hours} h ${minutes} min ${seconds} s`;
  } else if (minutes > 0) {
    result = `${minutes} min ${seconds} s`;
  } else {
    result = `${seconds} s`;
  }

  return miliseconds ?  result : false
}
