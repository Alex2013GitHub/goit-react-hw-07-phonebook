import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  width: 500px;
  flex-grow: 1;
  margin-right: 10px;
  background-color: #aab8ac;
`;

export const DeleteButton = styled.button`
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  background-color: #696969;
  color: white;
  cursor: pointer;
  margin-left: 15px;

  &:hover {
    background-color: #c82333;
  }
`;
