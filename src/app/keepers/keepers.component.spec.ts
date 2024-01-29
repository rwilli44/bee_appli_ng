import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepersComponent } from './keepers.component';

describe('KeepersComponent', () => {
  let component: KeepersComponent;
  let fixture: ComponentFixture<KeepersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeepersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
