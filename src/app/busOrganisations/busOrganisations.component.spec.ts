import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusOrganisationsComponent } from './busOrganisations.component';

describe('BusOrganisationsComponent', () => {
  let component: BusOrganisationsComponent;
  let fixture: ComponentFixture<BusOrganisationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusOrganisationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusOrganisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
