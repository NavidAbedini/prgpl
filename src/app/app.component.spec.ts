import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  
   it('click button',async(()=>{
       const fixture=TestBed.createComponent(AppComponent);
       fixture.detectChanges();
       expect(fixture.componentInstance.points).toBe(1);
       fixture.debugElement.nativeElement.querySelector('button').click();
       expect(fixture.componentInstance.points).toBe(2);
   }));

});
