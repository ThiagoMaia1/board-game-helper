class Improvements {
    constructor (
        public life = 0,
        public reach = 0,
    ) {};
}

export default class GameItem {
    constructor(
        public label : string,
        public description : string,
        public improvements : Improvements = new Improvements(),
    ) {}
}

export const items = {
    torpedo: new GameItem('Míssil', 'HAaHA'),
    random: new GameItem('Aleatório', 'HAaHA'),
    bridge: new GameItem('Ponte', 'HAaHA'),
    life: new GameItem('Vida', 'HAaHA', new Improvements(2)),
    airplane: new GameItem('Avião', 'HAaHA'),
    medal: new GameItem('Medalha', 'HAaHA', new Improvements(undefined, 2)),
    demerit: new GameItem('Demérito', 'HAaHA', new Improvements(undefined, -2)),
    pliers: new GameItem('Alicate', 'HAaHA'),
    harpoon: new GameItem('Arpão', 'HAaHA'),
    shield: new GameItem('Escudo', 'HAaHA'),
    tank: new GameItem('Tanque', 'HAaHA'),
    portal: new GameItem('Portal', 'HAaHA'),
};
