# Random Id

Create UUIDs for your application.
The single purpose of this library is to test this simple code once and for all

| Last version | Angular Versions       | Node | Typescript |
|--------------|------------------------|------|------------|
| `1.0.0`      | 9+ up to 15 (included) | 14   | 4.6        |

## 🛠 Installation

- With **npm**: `npm i --save @elemental-concept/random-id`

## 📖 Usage

Simply use the service into your component:

```typescript
@Component({
  selector: 'app-random-id-page',
  templateUrl: './random-id-page.component.html',
  styleUrls: [ './random-id-page.component.scss' ]
})
export class RandomIdPageComponent implements OnInit {
  result: string;

  constructor(private readonly randomIdService: RandomIdService) {
  }

  ngOnInit() {
    // i.e.: 1410715640579
    this.result = this.randomIdService.getRandomIdTimestamp();

    // i.e.: as1f-qwe3r-rt5u-fghj
    this.result = this.randomIdService.getRandomId();

    // i.e.: as1f_qwe3r_rt5u
    this.result = this.randomIdService.getRandomId(3, '_');

    // i.e.: PREFIX-1410715640579-SUFFIX
    this.result = this.randomIdService.getRandomIdTimestamp('-', 'PREFIX', 'SUFFIX');

    // i.e.: PREFIX_as1f_qwe3r_rt5u_fghj_SUFFIX
    this.result = this.randomIdService.getRandomId(4, '_', 'PREFIX', 'SUFFIX');
  }
}
```

- By default `getRandomId` will create `4 segment on 4 chars/digits` separated by `-`.
- By default `prefix` and `suffix` are `null`;
- By default `getRandomIdTimestamp` will use the separator (`-` by default) only if `prefix` and/or `suffix` are not null `null`;
