import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerPage } from './trainer.page';

describe('TrainerPage', () => {
  let component: TrainerPage;
  let fixture: ComponentFixture<TrainerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
