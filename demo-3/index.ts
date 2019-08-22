export class StringComparator {
    compare(first: string, second: string) {
        return (first === second);
    }

    compareIgnoreCase(first: string, second: string) {
        return (first.toLowerCase() === second.toLowerCase());
    }
}
