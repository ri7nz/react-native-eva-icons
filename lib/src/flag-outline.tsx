import * as React from 'react';
import * as Svg from 'react-native-svg';

export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <Svg.G data-name='Layer 2'>
      <Svg.G data-name='flag'>
        <Svg.Polyline points='24 24 0 24 0 0' opacity='0'/>
        <Svg.Path
          d='M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43zM18 14.59a6.32 6.32 0 0 1-2.5.41 8.36 8.36 0 0 1-3.13-.79 10.34 10.34 0 0 0-3.87-.92 9.51 9.51 0 0 0-2.5.29V5.42A6.13 6.13 0 0 1 8.5 5a8.36 8.36 0 0 1 3.13.79 10.34 10.34 0 0 0 3.87.92 9.41 9.41 0 0 0 2.5-.3z'/>
      </Svg.G>
    </Svg.G>
  </Svg.Svg>
);