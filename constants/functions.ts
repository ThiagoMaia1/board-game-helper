export function mapFixedNumberArray<T>(
        numberOfItems : number, callback : (index : number) => T
    ) : T[] {
    return Array(numberOfItems).fill(0).map((_, i) => callback(i));
};