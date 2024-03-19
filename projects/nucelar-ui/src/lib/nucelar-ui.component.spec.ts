import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NucelarUiComponent } from './nucelar-ui.component';

describe('NucelarUiComponent', () => {
  let component: NucelarUiComponent;
  let fixture: ComponentFixture<NucelarUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NucelarUiComponent]
    });
    fixture = TestBed.createComponent(NucelarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
