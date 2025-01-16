export class Singleton {
    private constructor(public name: string) {
    }

    private static instance: Singleton;

    static getInstance() {
        if (Singleton.instance) return this.instance;
        this.instance = new Singleton("instance");
        return this.instance;
    }
}