import styled from 'styled-components';
import Table from './Table';

const TableEx = styled(Table)`
  margin-bottom : 15px;

  .inputWrapper{
    padding: 0;
    position: relative;
    text-align : left;

    .field{
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: 1px solid #06f2;
      font-size:14px;
    }
  }
`;
export default TableEx;