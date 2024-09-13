import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: ${(props) => props.theme.typography.fontFamily.general};
       font-weight: ${(props) => props.theme.typography.fontWeight.normal};
       font-size: ${(props) => props.theme.typography.fontSize.medium};

   }
   #root{
    margin:0 auto;
    padding: 0;
   }
   body{
    background-color: ${(props) => props.theme.colors.fillBackground};
    color: ${(props) => props.theme.colors.generalFont};

   }
   img{
    height: 100%;
    width: auto;
   }
   a{
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.generalFont};
   }
   p,h1,h2,h3{
    margin: 0;
    padding: 0;
   }
`;
export default GlobalStyle;
