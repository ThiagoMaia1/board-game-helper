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
    torpedo: new GameItem('torpedo', 'Míssil', 'HAaHA', require('../assets/items/torpedo.png')),
    random: new GameItem('random', 'Aleatório', 'HAaHA', require('../assets/items/random.png')),
    bridge: new GameItem('bridge', 'Ponte', 'HAaHA', require('../assets/items/bridge.png')),
    life: new GameItem('life', 'Vida', 'HAaHA', require('../assets/items/life.png'), new Improvements(2)),
    airplane: new GameItem('airplane', 'Avião', 'HAaHA', require('../assets/items/airplane.png')),
    medal: new GameItem('medal', 'Medalha', 'HAaHA', require('../assets/items/medal.png'), new Improvements(undefined, 2)),
    demerit: new GameItem('demerit', 'Demérito', 'HAaHA', require('../assets/items/demerit.png'), new Improvements(undefined, -2)),
    pliers: new GameItem('pliers', 'Alicate', 'HAaHA', require('../assets/items/pliers.png')),
    harpoon: new GameItem('harpoon', 'Arpão', 'HAaHA', require('../assets/items/harpoon.png')),
    shield: new GameItem('shield', 'Escudo', 'HAaHA', require('../assets/items/shield.png')),
    tank: new GameItem('tank', 'Tanque', 'HAaHA', require('../assets/items/tank.png')),
    portal: new GameItem('portal', 'Portal', 'HAaHA', require('../assets/items/portal.png')),
};
