import React, { Component } from "react";
import {MDBTypography, MDBBtn, MDBCollapse} from "mdbreact";
import IntroPart from "./IntroPart.js";
import RegElem from "./RegElem.js";

class RegulationsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <div style={{ marginTop: '30px' }}>
            
            <IntroPart/>
                


<h3>Punktacja</h3>
<br/>
<ol>
    <li>
        <RegElem title="Obecność na zbiórce"
                    description="1pkt. / harcerz (max. 7 pkt.)"
                    confirmation="Zdjęcie ze zbiórki wysłane tego samego dnia do drużynowego."
                    terms="Harcerz musi posiadać pełne umundurowanie. Zastępy mogą być liczniejsze niż 7 osób."
        />
    </li>

    <li>
        <RegElem title="Obrzędowość zastępu"
                    description="1 pkt. / zbiórka: proporzec <br/> 1 pkt. / zbiórka : oznaczenie na mundurze <br/> 1 pkt. / zbiórka: dodatkowa obrzędowość <br/><br/>"
                    confirmation="Zdjęcie"
                    terms="Dodatkowa obrzędowość musi być uzgodniona z komendą HLM."
        />
        
    </li>

    <li>   
        <RegElem title="Sprawności"
                    description="2 pkt. / zdobyta sprawność jednogwiazdkowa<br/>
                    3 pkt. / zdobyta sprawność dwugwiazdkowa<br/>
                    4 pkt. / zdobyta sprawność trzygwiazdkowa<br/><br/>"
                    confirmation="Rozkaz drużynowego."
                    terms=" Zdobywana przez harcerza sprawność musi być adekwatna do wieku i stopnia"
        />

    </li>
    <li>
        <RegElem title="Obecność na zbiórce ZZ"
                    description="Obecność zastępowego na zbiórce ZZ: 7 pkt. do punktacji zastępu<br/><br/>"
                    confirmation="Raport drużynowego. "
                    terms="Przyznawane maksymalnie raz w miesiącu. Spotkania ZZ mogą oczywiście odbywać się częściej."
        />

    </li>
    <li>
        <RegElem title="Wyjazdy, biwaki"
                    description="Wyjazd zastępu (samodzielny lub z drużyną): 3 pkt. / harcerz. Maksymalnie 21 pkt.<br/>
                    Zimowisko - 7 pkt. / harcerz. Maksymalnie 49pkt.<br/>
                    Obóz - 7 pkt. / harcerz. Maksymalnie 49pkt.<br/><br/>"
                    confirmation="Przesłana przez drużynowego karta zgłoszeniowa biwaku zatwierdzona w Okręgu."
                    terms="Zatwierdzony u drużynowego plan biwaku realizujący indywidualną pracę harcerzy. Biwak z noclegiem. Maksymalnie jeden w miesiącu.<br/>
                    Zimowisko musi trwać minimum 3 pełne doby. Harcerze, którzy wyjechali z obozu/zimowiska w trakcie na własne życzenie nie zdobywają punktów."
        />

    </li>
    <li>
    <RegElem title="Harc miesiąca"
                    description="10 pkt. / harc<br/>"
                    confirmation="Zdjęcie i opis w sieci."
                    terms="Komenda HLM na początku każdego miesiąca będzie publikowała harc do wykonania. Zastęp otrzymuje punkty, jeśli go wykona i udokumentuje np. zdjęciem"
        />
    
    </li>
    <li>
    <RegElem title="Zastęp w sieci"
                    description=" 2 pkt. / wpis i zdjęcie<br/>
                    3 pkt. / jeśli w miesiącu są cztery wpisy<br/><br/>"
                    terms="Maksymalnie do zdobycia 11 punktów. Nie będą punktowane dwa wpisy z jednego tygodnia."
        />

    </li>
    <li>
    <RegElem title="Stopnie"
                    description="20 pkt. / zdobyty stopień młodzika przez harcerza.<br/>
                    25 pkt. / zdobyty stopień wywiadowcy przez harcerza.<br/>
                    30 pkt. / zdobyty stopień ćwika przez harcerza.<br/><br/>"
                    confirmation="Rozkaz drużynowego."
        
        />
    
    </li>
    <li>
    <RegElem title="Wydarzenia Dodatkowe"
                    description="10 pkt. / harc<br/>WSZELKIE SPOTKANIA ŚRÓDROCZNE HUFCA TAKIE JAK: ZBIÓRKA HUFCA, ZBIÓRKA ZZ-TÓW HUFCA, ZBIÓRKI SPECJALNE BĘDĄ PUNKTOWANE DODATKOWO. ABY PUNKTACJA BYŁA WIĄŻĄCA, ORGANIZATORZY WYDARZENIA NAJPÓŹNIEJ 3 TYGODNIE PRZED WYDARZENIEM MUSZĄ PODAĆ KONKRETNE PUNKTY DO ZDOBYCIA. PUNKTOWANA BĘDZIE ZARÓWNO OBECNOŚĆ, JAK I NP. ZWYCIĘSTWO W GRZE W TRAKCIE WYDARZENIA.<br/><br/>"
                    confirmation="Rozkaz drużynowego."
        />
    </li>
    </ol>
            </div>
        );
    }
}

export default RegulationsPage;