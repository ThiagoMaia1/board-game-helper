import {items} from "./item";

export default class GameCharacter {

    constructor (
        public name : string,
        public label : string,
        public exclusiveItemName : keyof typeof items,
        public description : string,
        public imageRequired : any
    ) {};

    get exclusiveItem() {return items[this.exclusiveItemName]};
}

export const characters : GameCharacter[] = [
    new GameCharacter('physician', 'Clínico', 'life', 'BLAALLALAL', require('../assets/characters/physician.png')),
    new GameCharacter('lucky', 'Sortudo', 'random', 'É um cachorro', require('../assets/characters/lucky.png')),
    new GameCharacter('hooked', 'Fisgada', 'harpoon', 'Oi', require('../assets/characters/hooked.png')),
    new GameCharacter('block', 'Bloque', 'shield', '', require('../assets/characters/block.png')),
    new GameCharacter('torpedo', 'Torpedo', 'torpedo', '', require('../assets/characters/torpedo.png')),
    new GameCharacter('winged', 'Alada', 'airplane', '', require('../assets/characters/winged.png')),
];