# Random Id

Use this library if you need to `create UUIDs` in your application.
The main purpose is to remove all the randomId other lis and related tests from the main application.

## Installation

With npm:

```Shell
npm i @elemental/random-id
```

With Yarn:

```Shell
yarn add @elemental/random-id
```

## Usage

Simply use the service into your component/service:

```typescript
@Component({
  selector: 'app-random-dd-page',
  templateUrl: './random-id-page.component.html',
  styleUrls: [ './random-id-page.component.scss' ]
})
export class UuidPageComponent implements OnInit {
  result: string;
  
  constructor(private readonly randomIdService: RandomIdService) {
  }

  ngOnInit() {
    // i.e.: 1410715640579
    this.result = this.randomIdService.getRandomIdTimestamp();
    
    // i.e.: as1f-qwe3r-rt5u-fghj
    this.result = this.randomIdService.getRandomId();
    
    // i.e.: as1f-qwe3r-rt5u
    this.result = this.randomIdService.getRandomId(3, '_');
    
    // i.e.: PREFIX-1410715640579-SUFFIX
    this.result = this.randomIdService.getRandomIdTimestamp('-', 'PREFIX', 'SUFFIX');
    
    // i.e.: PREFIX-as1f-qwe3r-rt5u-fghj-SUFFIX
    this.result = this.randomIdService.getRandomId(4, '-', 'PREFIX', 'SUFFIX');
  }
}
```

- By default `getRandomId` will create `4 segment on 4 chars/digits` separated by `-`.
- By default `prefix` and `suffix` are `null`;
- By default `getRandomIdTimestamp` will use the separator (`-` by default) only if `prefix` and/or `suffix` are not null `null`;
