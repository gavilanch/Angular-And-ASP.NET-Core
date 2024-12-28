import { TestBed } from "@angular/core/testing";
import { DisplayErrorsComponent } from "./display-errors.component";

describe('DisplayErrorsComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DisplayErrorsComponent]
        }).compileComponents();
    });

    it('should render the component', () => {
        const fixture = TestBed.createComponent(DisplayErrorsComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should display a single list-item when theres a single error', () => {
        const fixture = TestBed.createComponent(DisplayErrorsComponent);
        const component = fixture.componentInstance;

        component.errors = ['Error'];
        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelectorAll('li').length).toBe(1);
    });
});