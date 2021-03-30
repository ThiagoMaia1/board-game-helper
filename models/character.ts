import {items} from "./item";

export default class GameCharacter {
    constructor (
        public name : string,
        public label : string,
        public exclusiveItemName : keyof typeof items,
        public description : string,
    ) {}

    get exclusiveItem() {return items[this.exclusiveItemName]};
}

export const characters : GameCharacter[] = [
    new GameCharacter('physician', 'Clínico', 'life', 'BLAALLALAL'),
    new GameCharacter('lucky', 'Sortudo', 'random', 'É um cachorro'),
    new GameCharacter('hooked', 'Fisgada', 'harpoon', 'Oi'),
    new GameCharacter('block', 'Bloque', 'shield', ''),
    new GameCharacter('torpedo', 'Torpedo', 'torpedo', ''),
    new GameCharacter('winged', 'Alada', 'airplane', ''),
];