import styled from 'styled-components';

const Wrapper = styled.h2`
  background-color: #f8f9fa;
  display: flex;
  font-size: 13px;
  font-weight: 400;
  padding: 5px;

  a {
    color: rgba(40, 167, 69, 0.75);
    text-decoration: underline;

    &:hover {
      color: #28a745;
    }
  }
`;

export default Wrapper;