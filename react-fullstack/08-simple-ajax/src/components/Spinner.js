/**
 * @filename Spinner.js
 * @description react-loader-spinner라이브러리 활용 로딩바 구현
 * @reference https://mhnpd.github.io/react-loader-spinner/
 * @install yarn add react-loader-spinner
 */

import { Grid } from "react-loader-spinner";

const Spinner = () => {
  return (
    <Grid height={100} width={100} color="red" ariaLabel="loading-indicator" />
  );
};
export default Spinner;
