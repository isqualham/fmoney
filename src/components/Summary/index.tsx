import {useContext} from 'react';
import encomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary(){

    const {transactions} = useContext(TransactionsContext)

    return(
        <Container>
            
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={encomeImg} alt="Entradas" />

                </header>
                <strong>R$5000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />

                </header>
                <strong>R$300,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="Total" />

                </header>
                <strong>R$3000,00</strong>
            </div>

        </Container>
    )
}