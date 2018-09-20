import { async, TestBed } from '@angular/core/testing';
import { SearchUserProfileComponent } from './search-user-profile.component';
describe('SearchUserProfileComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SearchUserProfileComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SearchUserProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-user-profile.component.spec.js.map