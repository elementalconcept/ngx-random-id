import { TestBed } from '@angular/core/testing';

import { RandomIdService } from './random-id.service';

describe('RandomIdService', () => {
  let service: RandomIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create uuid with timestamp', () => {
    // i.e.: 1410715640579
    const result = service.getRandomIdTimestamp();
    expect(result.length).toEqual(13);
  });

  it('should create uuid with n quadruplet', () => {
    // i.e.: as1f_qwe3r_rt5u
    const result1 = service.getRandomId(3, '_');

    expect(result1.split('_').length).toEqual(3);
    expect(result1.split('_')[ 0 ].length).toEqual(4);

    // i.e.: as1f-qwe3r-rt5u-fghj
    const result2 = service.getRandomId();

    expect(result2.split('-').length).toEqual(4);
    expect(result2.split('-')[ 0 ].length).toEqual(4);
  });

  it('should add prefix and/or suffix to uuid (timestamp)', () => {
    // i.e.: PREFIX-1410715640579-SUFFIX
    const result1 = service.getRandomIdTimestamp('-', 'PREFIX', 'SUFFIX');

    expect(result1.split('-').length).toEqual(3);
    expect(result1.split('-')[ 0 ]).toEqual('PREFIX');
    expect(result1.split('-')[ 2 ]).toEqual('SUFFIX');

    // i.e.: 1410715640579
    const result2 = service.getRandomIdTimestamp('-', '', '');

    expect(result2.split('-').length).toEqual(1);
  });

  it('should add prefix and/or suffix to uuid (quadruplet)', () => {
    // i.e.: PREFIX-as1f-qwe3r-rt5u-fghj-SUFFIX
    const result1 = service.getRandomId(4, '-', 'PREFIX', 'SUFFIX');

    expect(result1.split('-').length).toEqual(6);
    expect(result1.split('-')[ 0 ]).toEqual('PREFIX');
    expect(result1.split('-')[ 5 ]).toEqual('SUFFIX');

    // i.e.: as1f-qwe3r-rt5u-fghj
    const result2 = service.getRandomId(4, '-', '', '');

    expect(result2.split('-').length).toEqual(4);
  });
});
