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
      srcImage: 'https://i.pinimg.com/originals/9a/ab/b3/9aabb35835e6230b502ad25532da8ff6.jpg',
      title: 'Title 1',
    },
    {
      srcImage: 'https://i0.wp.com/www.pkclsoft.com/wp/wp-content/uploads/2016/03/playereditor.jpg?resize=300%2C400',
      title: 'Title 2',
    },
    {
      srcImage: 'https://fdr-cover-images.imgix.net/2019/12/n0dOE8Hm-Free_Web_Dashboard_UI_Kit_Cr8tiv_Yemmy_021219_Thumbnail.jpg?auto=format&fit=crop&h=400&ixlib=php-3.3.0&w=600&wpsize=grid-image&s=25d534296095c3cb31edfbadfa8e2071',
      title: 'Title 3',
    },
  ];

  const cardsDestaque = [
    {
      srcImage: 'https://mariaeunicesousa.com/wp-content/uploads/2019/03/ecli-partial-solar-eclipse_20180810_600x320.jpg',
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates accusamus eum odio earum eligendi. Tempore ducimus quam voluptatem voluptates culpa impedit maiores? Incidunt nisi dicta quasi, quaerat temporibus facere!Tempore ducimus quam voluptatem odio earum eligendi ipsum dolor sit amet consectetur.',
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
