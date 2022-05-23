export const TextMatching = (source, target, arr) => {
  return arr.find(element => element[source] === target);
}

export const TokenMatch = (token, arr) => {
  return arr.find(element => {
    console.log(element);
    return element.token === token;
  });
}