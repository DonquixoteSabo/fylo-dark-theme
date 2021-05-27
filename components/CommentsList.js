import styled from 'styled-components';

import Comment from './Comment';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5vw;
`;

const commentsData = [
  {
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    src: '/images/profile-1.jpg',
    name: 'Satish Patel',
    title: 'Founder & CEO, Huddle',
    id: 1,
  },
  {
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    src: '/images/profile-2.jpg',
    name: 'Bruce McKenzie',
    title: 'Founder & CEO, Huddle',
    id: 2,
  },
  {
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    src: '/images/profile-3.jpg',
    name: 'Iva Boyd',
    title: 'Founder & CEO, Huddle',
    id: 3,
  },
];

export default function CommentsList() {
  return (
    <Wrapper>
      {commentsData.map((item) => (
        <Comment key={item.id} {...item} />
      ))}
    </Wrapper>
  );
}
