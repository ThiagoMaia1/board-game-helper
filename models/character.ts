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
    new GameCharacter('physician', 'Clínico', 'life', 'Um robô médico.', require('../assets/characters/physician.png')),
    new GameCharacter('lucky', 'Sortudo', 'random', 'Um cachorro muito leal.', require('../assets/characters/lucky.png')),
    new GameCharacter('hooked', 'Fisgada', 'harpoon', 'Maneja um arpão', require('../assets/characters/hooked.png')),
    new GameCharacter('block', 'Bloque', 'shield', 'Um protetor com armadura anti-bomba', require('../assets/characters/block.png')),
    new GameCharacter('torpedo', 'Torpedo', 'torpedo', 'Um lançador de mísseis', require('../assets/characters/torpedo.png')),
    new GameCharacter('winged', 'Alada', 'airplane', 'Uma piloto muito sagaz', require('../assets/characters/winged.png')),
];