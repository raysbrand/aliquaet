class Country<T> {
  private name: string;
  private population: number;
  private capital: T;

  constructor(name: string, population: number, capital: T) {
    this.name = name;
    this.population = population;
    this.capital = capital;
  }

  getName(): string {
    return this.name;
  }

  getPopulation(): number {
    return this.population;
  }

  getCapital(): T {
    return this.capital;
  }

  setName(name: string): void {
    this.name = name;
  }

  setPopulation(population: number): void {
    this.population = population;
  }

  setCapital(capital: T): void {
    this.capital = capital;
  }
}
