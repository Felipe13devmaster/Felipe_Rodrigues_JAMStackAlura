/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Box from '../layout/Box';
import Modal from '../commons/Modal';
import FormContato from '../commons/FormContato';
import Capa from '../commons/Capa';
import Cabecalho from '../commons/Cabecalho';
import Footer from '../commons/Footer';
import theme from '../../theme';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

const WebsitePageWrapper = ({ children, capaProps }) => {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <Box
        backgroundColor={theme.colors.dark}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalState(false)}
        >
          {(propsDoModal) => (
            <FormContato propsDoModal={propsDoModal} />
          )}
        </Modal>
        {capaProps.display && (<Capa />)}
        <Cabecalho />
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
};

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  capaProps: {
    display: true,
  },
};

export default WebsitePageWrapper;
