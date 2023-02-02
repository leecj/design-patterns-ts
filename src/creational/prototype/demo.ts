import Document from './document.js';

export function show(): void {
  const originalDocument = new Document('Original', [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ]);
  console.log(originalDocument);

  const shallowCloneDocument = originalDocument.clone(1);
  shallowCloneDocument.name = 'shallowCloneDocument';
  shallowCloneDocument.array[1][2] = 233;
  console.log('===浅拷贝===');
  console.log(originalDocument);
  console.log(shallowCloneDocument);

  const deepCloneDocument = originalDocument.clone(2);
  console.log(deepCloneDocument);
  deepCloneDocument.name = 'deepCloneDocument';
  deepCloneDocument.array[1][0] = 111;
  console.log('===深拷贝===');
  console.log(originalDocument);
  console.log(deepCloneDocument);
}
