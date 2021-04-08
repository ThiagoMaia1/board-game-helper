class Improvements {
    constructor (
        public life = 0,
        public reach = 0,
    ) {};
}

export default class GameItem {

    constructor(
        public name : string,
        public label : string,
        public description : string,
        public imageRequired : any,
        public improvements : Improvements = new Improvements(),
    ) {
    }
}

export const items = {
    torpedo: new GameItem('torpedo', 'Míssil', 'Quebra parede (2 dados).', require('../assets/items/torpedo.png')),
    random: new GameItem('random', 'Aleatório', 'Sorteia um item (2 dados).', require('../assets/items/random.png')),
    bridge: new GameItem('bridge', 'Ponte', 'Tapa o precipício por 5 rodadas.', require('../assets/items/bridge.png')),
    life: new GameItem('life', 'Vida', 'Jogador ganha 2 vidas (Se for o Clínico pode manter 2 slots de vida adicional).', require('../assets/items/life.png'), new Improvements(2)),
    airplane: new GameItem('airplane', 'Avião', 'Avança 2 casas.', require('../assets/items/airplane.png')),
    medal: new GameItem('medal', 'Medalha', '2 casas a mais de alcance.', require('../assets/items/medal.png'), new Improvements(undefined, 2)),
    demerit: new GameItem('demerit', 'Demérito', '2 casas a menos de alcance.', require('../assets/items/demerit.png'), new Improvements(undefined, -2)),
    pliers: new GameItem('pliers', 'Alicate', 'Corta o arame por 1 rodada.', require('../assets/items/pliers.png')),
    harpoon: new GameItem('harpoon', 'Arpão', 'Puxa outro jogador 2 casas (2 dados).', require('../assets/items/harpoon.png')),
    shield: new GameItem('shield', 'Escudo', 'Anula o dano uma vez.', require('../assets/items/shield.png')),
    tank: new GameItem('tank', 'Tanque', 'Avança 1 casa.', require('../assets/items/tank.png')),
    portal: new GameItem('portal', 'Portal', 'Leva até o portal conectado.', require('../assets/items/portal.png')),
};
