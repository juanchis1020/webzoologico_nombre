import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeiComponent } from './homei-component';

describe('HomeiComponent', () => {
  let component: HomeiComponent;
  let fixture: ComponentFixture<HomeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
