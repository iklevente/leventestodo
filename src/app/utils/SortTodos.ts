export function sortItemsByCompletion(arr: any[]) {
  return arr.sort((a, b) => {
    if (a.isCompleted && !b.isCompleted) {
      return 1;
    } else if (!a.isCompleted && b.isCompleted) {
      return -1;
    } else {
      return 0;
    }
  });
}
