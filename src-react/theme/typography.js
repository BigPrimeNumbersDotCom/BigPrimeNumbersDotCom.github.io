// @mixin _type($size,$weight,$color,$lineHeight){
//   font-size: $size;
//   line-height: $lineHeight;
//   color: $color;
//   weight: $weight;
// }
//
// @mixin generate-type-roboto($size,$weight,$color,$lineHeight) {
//   font-family: Robot, sans-serif;
//   @include _type($size,$weight,$color,$lineHeight);
// }
//
// @mixin generate-type-lato($size,$weight,$color,$lineHeight) {
//   font-family: Lato, sans-serif;
//   @include _type($size,$weight,$color,$lineHeight);
// }

'use strict';
const colors = {
  dark: { color: '#212121' },
  light: { color: ''}
};

function type(size=14,lineHeight=16,weight=400,color='dark'){
  return Object.assign({},colors[color]{
    fontSize:`${size}px`,
    fontWeight:weight,
    lineHeight:`${lineHeight}px`
  });
}

const typogrpahy = {
  display4:type(112,120,300),
  display3:type(56,60),
  display2:type(45,52),
  display1:type(34,38),
  headline:type(24,28),
  title:type(20,28,500),
  subheading:type(16,18),
  body2:type(14,500),
  body1:type(14,16),
  caption:type(12,14),
  button:type(14,16,500),
};

export default typogrpahy;
