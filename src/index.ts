// import {Sorter} from './Sorter'
import {NumbersCollection} from './NumbersCollection'
import {CharectersCollection} from './CharectersCollection'
import {LinkedList} from './LinkedList'

const numbersCollection = new NumbersCollection([10,-2, -5, -3])
numbersCollection.sort()
console.log(numbersCollection.data);

const charactersCollection = new CharectersCollection('Xaayb');

charactersCollection.sort()
console.log(charactersCollection.data);

const linkedList = new LinkedList()
linkedList.add(3)
linkedList.add(4)
linkedList.add(2)
linkedList.add(20)

linkedList.sort()
linkedList.print();