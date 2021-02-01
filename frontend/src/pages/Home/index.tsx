import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import logo from '../../assets/lo.svg';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="locacao pp" width={200}/>
        </header>

        <main>
          <h1>Seus produtos bem vistos!!</h1>
          <p>
            Aqui você pode compatilhar seus produtos com outras pessoas.
          </p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre Sua Loja agora mesmo</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
