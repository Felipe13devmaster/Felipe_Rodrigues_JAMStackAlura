import React from 'react';
import Button from '../src/components/commons/Button';
import ButtonGroup from '../src/components/commons/ButtonGroup';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import Footer from '../src/components/commons/Footer';
import FormContato from '../src/components/commons/FormContato';
import Modal from '../src/components/commons/Modal';
import SectionTitle from '../src/components/commons/SectionTitle';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import Box from '../src/components/layout/Box';
import theme from '../src/theme';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
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
      <Capa>
        FELIPE RODRIGUES
      </Capa>
      <Cabecalho />
      <SectionTitle>Meus Projetos</SectionTitle>
      <WrapperProjetos />
      <ButtonGroup>
        <Button
          onClick={() => {
            setModalState(!isModalOpen);
          }}
        >
          Entre em contato
        </Button>
      </ButtonGroup>
      <Footer />
    </Box>
  );
}
