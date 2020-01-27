import { Sorter } from './Sorter';
import { NumberCollection } from './Numbercollection';
import { CharactersCollection } from './CharactersCollections';
import { LinkList } from './LinkedList';

// const numbersCollection = new NumberCollection([10, 3, -5, 0, 101]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const characterCollection = new CharactersCollection('Xaayb');
// characterCollection.sort();
// console.log(characterCollection.data);

const linkedList = new LinkList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
