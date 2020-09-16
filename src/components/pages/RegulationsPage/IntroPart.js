import React, { Component } from "react";
import {MDBTypography} from "mdbreact";


class IntroPart extends Component {
    render() {
        return(
            <React.Fragment>
            <h3 className="text-center font-weight-bold">Harcerska Liga Mistrzów</h3>

                <p className="font-italic text-center">1 Wrocławski Hufiec Harcerzy "Starodrzew"</p>


<p>Podstawą do przyznania punktów jest raport złożony drużynowemu bezpośrednio po zbiórce lub wykonaniu zadania. W przypadku kategorii, które można udokumentować potwierdzeniem, jest relacja z przebiegu zamieszczona na stronie internetowej zastępu. Drużynowy przekazuje punktację zastępów maksymalnie do ostatniego dnia miesiąca.</p>

<p>Wszystkie kwestie sporne rozstrzygane są przez komendę HLM:
    <ul>
        <li>pwd. Adam Garnecki HR - komendant </li>
        <li>pwd. Daniel Bombała HO - pomoc techniczna </li>
    </ul>
</p>
<p>
Obecnie rywalizacja toczy się między zastępami w Hufcu.
</p>
</React.Fragment>
        );
    }
}

export default IntroPart;