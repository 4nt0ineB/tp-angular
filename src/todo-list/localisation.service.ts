import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalisationService {
  private cities: Set<string> = new Set([
    'Paris',
    'Toulouse',
    'Marseille',
    'Bordeaux',
  ]);
  constructor() {}

  searchCity(prefix: string): String[] {
    if (!prefix) {
      return [...this.cities];
    }
    return [...this.cities].filter((c) => c.startsWith(prefix));
  }

  addCity(city: string): void {
    if (city) {
      this.cities.add(city);
    }
  }
}
