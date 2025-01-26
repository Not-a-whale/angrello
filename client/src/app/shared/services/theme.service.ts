import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private overlayContainer: OverlayContainer) {}

  setTheme(themeName: string): void {
    const overlayContainerClasses = (this.overlayContainer.getContainerElement() as any).parentElement.classList;

    overlayContainerClasses.add(themeName);
    overlayContainerClasses.remove(themeName === 'light-theme' ? 'dark-theme' : 'light-theme');
    console.log(overlayContainerClasses);
    localStorage.setItem('theme', themeName);
  }

  getTheme(): string {
    return localStorage.getItem('theme') || 'light-theme';
  }
}
