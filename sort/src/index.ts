import { Sorter } from './Sorter';
import { NumberCollection } from './Numbercollection';
import { CharactersCollection } from './CharactersCollections';
import { LinkList } from './LinkedList';

// const numbersCollection = new NumberCollection([10, 3, -5, 0, 101]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection);

// const characterCollection = new CharactersCollection('Xaayb');
// const sorterCharacter = new Sorter(characterCollection);
// sorterCharacter.sort();
// console.log(characterCollection.data);

const linkedList = new LinkList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);

sorter.sort();
linkedList.print();
