import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Card from '../Card';
import CardDestaque from '../CardDestaque';

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxCards = styled.div`
  display: flex;
  align-items: center;

  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
      order: 1;
    `,
    md: css`
      flex-direction: row;
      justify-content: center;
      order: 0;
    `,
  })}
`;

const BoxCardDestaque = styled.div`
  display: flex;
  justify-content: center;

  ${breakpointsMedia({
    xs: css`
      order: 0;
      margin-bottom: 16px;
    `,
    md: css`
      margin-top: 21px;
      order: 1;
    `,
  })}
`;

const WrapperProjetos = () => {
  const cards = [
    {
      srcImage: 'images/img1.jpg',
      title: 'Title 1',
      url: '/projeto',
    },
    {
      srcImage: 'images/img1.jpg',
      title: 'Title 2',
      url: '/projeto',
    },
    {
      srcImage: 'images/img1.jpg',
      title: 'Title 3',
      url: '/projeto',
    },
  ];

  const cardsDestaque = [
    {
      srcImage: 'images/win-form-bank.png',
      title: 'Fubank',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates accusamus eum odio earum eligendi. Tempore ducimus quam voluptatem voluptates culpa impedit maiores? Incidunt nisi dicta quasi, quaerat temporibus facere!Tempore ducimus quam voluptatem odio earum eligendi ipsum dolor sit amet consectetur.',
      url: '/projeto',
    },
  ];

  return (
    <BoxWrapper>
      <BoxCards>
        {cards.map((card) => (<Card key={card.title}>{card}</Card>))}
      </BoxCards>
      <BoxCardDestaque>
        {cardsDestaque.map((cardDestaque) => (
          <CardDestaque key={cardDestaque.title}>
            {cardDestaque}
          </CardDestaque>
        ))}
      </BoxCardDestaque>
    </BoxWrapper>
  );
};

export default WrapperProjetos;
