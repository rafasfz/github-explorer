import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/31613570?s=460&u=7950591eef72a3b750128968929487d5c17cf43e&v=4"
            alt="Rafael"
          />

          <div>
            <strong>rafasfz/proshop</strong>
            <p>
              TraversyMedia project. An e-commerce made with Node.js, React,
              Express and MongoDB.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/31613570?s=460&u=7950591eef72a3b750128968929487d5c17cf43e&v=4"
            alt="Rafael"
          />

          <div>
            <strong>rafasfz/proshop</strong>
            <p>
              TraversyMedia project. An e-commerce made with Node.js, React,
              Express and MongoDB.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/31613570?s=460&u=7950591eef72a3b750128968929487d5c17cf43e&v=4"
            alt="Rafael"
          />

          <div>
            <strong>rafasfz/proshop</strong>
            <p>
              TraversyMedia project. An e-commerce made with Node.js, React,
              Express and MongoDB.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
