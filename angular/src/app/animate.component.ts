import {
  trigger,
  state,
  style,
  query,
  group,
  animate,
  transition,
  // ...
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition('* => *', slideTo('right') ),
    // transition('* => isRight', slideTo('right') ),
    // transition('* => isLeft', slideTo('left') ),
    // transition('isRight => isRight', slideTo('right') ),
    // transition('isRight => *', slideTo('left') ),
  ]);

function slideTo(direction) {
  const optional = { optional: true };

  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 159,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ transform: 'translateX(-100%)'})
    ],optional),
    group([
      query(':leave', [
        animate('600ms ease', style({ transform: 'translateX(100%)'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ transform: 'translateX(0%)'}))
      ],optional)
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
