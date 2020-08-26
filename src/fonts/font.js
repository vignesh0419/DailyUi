import {createGlobalStyle} from 'styled-components';

import Ovo from './Ovo-Regular.woff';
import Gsans from './ProductSans-Regular.woff';
import Osans from './OpenSans-Regular.woff';

export default createGlobalStyle`
     @font-face {
        font-family: 'Google Sans';
        src: local('Google Sans'), local('ProductSans-Regular'),
        url(${Gsans}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Ovo';
        src: local('Ovo'), local('Ovo-Regular'),
        url(${Ovo}) format('woff'),
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family :'Open Sans';
        src: local('Open Sans'), local('OpenSans-Regular'),
        url(${Osans}) format('woff'),
        font-weight: 300;
        font-style: normal;
    }
`;
