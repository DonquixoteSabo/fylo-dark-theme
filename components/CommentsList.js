import styled from 'styled-components';

import Comment from './Comment';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5vw;
`;

export default function CommentsList() {
  return (
    <Wrapper>
      <Comment />
      <Comment />
      <Comment />
    </Wrapper>
  );
}
