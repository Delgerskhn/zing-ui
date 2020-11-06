import React from "react";

export const TemplateForm = (props) => {
  const handleChange = (e) => {};
  return (
    <div>
      <h1 className="modalHeader">Border Details</h1>
      <form>
        <input name="borderName" className="inputForm" placeholder="Хайлт нэр"/>
        <input name="domain" className="inputForm" placeholder="Домайн"/>
        <input name="source" className="inputForm" placeholder="Эх сурвалж"/>
        <br />
        <div className="gridCont">
          <select
            // value="category"
            name="category"
            onChange={handleChange}
            className="selectModal"
          >
            <option value="">Ангилал</option>
            <option value="business">business</option>
            <option value="entertainment">entertainment</option>
            <option value="general">general</option>
            <option value="health">health</option>
            <option value="science">science</option>
            <option value="technology">technology</option>
            <option value="sports">sports</option>
          </select>
          <select
            // value="country"
            name="country"
            onChange={handleChange}
            className="selectModal"
          >
            <option value="">Улс</option>
            <option value="ae">AE</option>
            <option value="ar">AR</option>
            <option value="at">AT</option>
            <option value="au">AU</option>
            <option value="be">BE</option>
            <option value="bg">BG</option>
            <option value="br">BR</option>
            <option value="KO">KO</option>
            <option value="ca">CA</option>
            <option value="ch">CH</option>
            <option value="cn">CN</option>
            <option value="co">CO</option>
            <option value="cu">CU</option>
            <option value="cz">CZ</option>
            <option value="de">DE</option>
            <option value="eg">EG</option>
            <option value="fr">FR</option>
            <option value="gb">GB</option>
            <option value="gr">GR</option>
            <option value="hk">HK</option>
            <option value="hu">HU</option>
            <option value="id">KO</option>
            <option value="ie">IE</option>
            <option value="il">IL</option>
            <option value="in">IN</option>
            <option value="it">IT</option>
            <option value="jp">JP</option>
            <option value="kr">KR</option>
            <option value="lt">LT</option>
            <option value="lv">LV</option>
            <option value="ma">MA</option>
            <option value="mx">MX</option>
            <option value="my">MY</option>
            <option value="ng">NG</option>
            <option value="nl">NL</option>
            <option value="no">NO</option>
            <option value="nz">NZ</option>
            <option value="ph">PH</option>
            <option value="pl">PL</option>
            <option value="pt">PT</option>
            <option value="ro">RO</option>
            <option value="rs">RS</option>
            <option value="ru">RU</option>
            <option value="sa">SA</option>
            <option value="se">SE</option>
            <option value="sg">SG</option>
            <option value="si">SI</option>
            <option value="sk">SK</option>
            <option value="th">TH</option>
            <option value="tr">TR</option>
            <option value="tw">TW</option>
            <option value="ua">UA</option>
            <option value="us">US</option>
            <option value="ve">VE</option>
            <option value="za">ZA</option>
          </select>
        </div>

        <button className="btn btn-primary modalBtn">Нэмэх</button>
        <button
          className="btn btn-secondary modalBtn"
          onClick={() => props.handleCloseModal()}
        >
          Буцах
        </button>
      </form>
    </div>
  );
};
