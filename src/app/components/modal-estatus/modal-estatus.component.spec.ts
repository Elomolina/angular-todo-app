import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstatusComponent } from './modal-estatus.component';

describe('ModalEstatusComponent', () => {
  let component: ModalEstatusComponent;
  let fixture: ComponentFixture<ModalEstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEstatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
