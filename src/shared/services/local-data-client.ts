export async function readLocalCollection<T>(collection: T[]): Promise<T[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 250);
  });

  return collection;
}
