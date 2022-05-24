import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border-top: 3xp solid #168;
  font-size: 14px;
  text-align: center;
  margin: auto;
  width: 100%;

  th{
    color: white;
    background: #f0f6f9;
    padding: 10px;
    border: 1px solid #ddd;

    &:first-child{
      border-left: 0;
    }
    &:last-child{
      border-right: 0;
    }
  }
  th{
    background: #168;
    padding: 10px;
    border: 1px solid #ddd;

    &:first-child{
      border-left: 0;
    }
    &:last-child{
      border-right: 0;
    }
  }
`;
export default Table;