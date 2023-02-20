import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionContainer, TransactionTable } from "./styles";


export function Transactions() {
    return (
        <div>
            <Header />

            <Summary />


            <TransactionContainer>

                <SearchForm />

                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Des1</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Des2</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 44,88
                                </PriceHighLight>
                            </td>
                            <td>Campra</td>
                            <td>30/05/2022</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>
    )
}