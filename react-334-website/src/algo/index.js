export const TextMatching = (source, target, arr) => {
  return arr.reduce((cur, element) => {
    if (element[source] === target) cur.push(element);
    return cur;
  }, []);
}
