import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnadoDAWComponent } from './alumnado-daw.component';

describe('AlumnadoDAWComponent', () => {
  let component: AlumnadoDAWComponent;
  let fixture: ComponentFixture<AlumnadoDAWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnadoDAWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnadoDAWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
