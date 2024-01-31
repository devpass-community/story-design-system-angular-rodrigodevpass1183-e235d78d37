import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ImageComponent } from '../app/image/image.component';
import { TitleComponent } from '../app/title/title.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, ImageComponent, TitleComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'design-system-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('design-system-angular');
  });

  it('should display the TitleComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const component = compiled.querySelector('title-component');
    expect(component).toBeTruthy();
  });

  it('should display the ImageComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const component = compiled.querySelector('image-component');
    expect(component).toBeTruthy();
  });
});
