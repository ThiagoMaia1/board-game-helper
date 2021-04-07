import {items} from "./item";

export default class GameCharacter {

    constructor (
        public name : string,
        public label : string,
        public exclusiveItemName : keyof typeof items,
        public description : string,
        public imageRequired : any,
        public imageEquippedRequired : any,
    ) {};

    get exclusiveItem() {return items[this.exclusiveItemName]};
}

export const characters : GameCharacter[] = [
    new GameCharacter('physician', 'Clínico', 'life', 'Um incansável robô médico enviado para a guerra. Clínico ativo no seu trabalho intenso, foi impossibilitado de fazer uma de suas recargas periódicas, e está perto de desativar.', require('../assets/characters/physician.png'), require('../assets/characters/physicianEquipped.png')),
    new GameCharacter('lucky', 'Sortudo', 'random', 'Um amigo leal que foi para o campo de batalha em busca de seu dono. Este cão prevenido nunca é pego de surpresa, sempre possuindo o item certo para resolver a situação.', require('../assets/characters/lucky.png'), require('../assets/characters/luckyEquipped.png')),
    new GameCharacter('hooked', 'Fisgada', 'harpoon', 'Uma resgatadora prestativa que retira civis do ambiente de fogo cruzado. Ela deve encontrar seu gancho para poder puxar vítimas de escombros e buracos.', require('../assets/characters/hooked.png'), require('../assets/characters/hookedEquipped.png')),
    new GameCharacter('block', 'Bloque', 'shield', 'Um receoso soldado antibomba limpando o terreno de minas escondidas. Porém, um explosivo o pegou de surpresa e causou sérios danos na sua armadura. Para continuar o trabalho, Bloque precisa restaurar a sua proteção.', require('../assets/characters/block.png'), require('../assets/characters/blockEquipped.png')),
    new GameCharacter('torpedo', 'Torpedo', 'torpedo', 'Um bravo soldado protegendo a sua cidade. Porém, sua munição está perto do fim. O combatente continuará lutando, mesmo que isso custe a sua própria vida.', require('../assets/characters/torpedo.png'), require('../assets/characters/torpedoEquipped.png')),
    new GameCharacter('winged', 'Alada', 'airplane', 'Uma pilota habilidosa que caiu no meio do campo de batalha. Ela busca por energia para o seu jetpack, para conseguir escapar do conflito.', require('../assets/characters/winged.png'), require('../assets/characters/wingedEquipped.png')),
];