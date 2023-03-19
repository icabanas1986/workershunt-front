import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaGeneroComponent } from './edita-genero.component';

describe('EditaGeneroComponent', () => {
  let component: EditaGeneroComponent;
  let fixture: ComponentFixture<EditaGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
