import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClipComponent } from './clip.component';

describe('ClipComponent', () => {
  let component: ClipComponent;
  let fixture: ComponentFixture<ClipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
