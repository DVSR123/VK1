import { TestBed, inject } from '@angular/core/testing';
import { ApiService } from './api.service';
describe('ApiService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ApiService]
        });
    });
    it('should be created', inject([ApiService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=api.service.spec.js.map