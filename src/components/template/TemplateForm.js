import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const style = {
  width: "92%",
  height: "5vh",
  fontSize: "23px",
  paddingLeft: "5%",
  border: "1px solid #3F51B5",
  borderRadius: "10px",
  outline: "none",
  color: "#3F51B5",
};

export const TemplateForm = (props) => {
  const [startDate, seStarttDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [state, setState] = useState({
    borderName: "",
    domain: "",
    source: "",
    category: "",
    country: "",
    fromDay: "",
    toDay: "",
  });
  const onChange = ({ target }) => {
    const value = target.value;
    setState((prevState) => ({
      ...prevState,
      [target.name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    console.log(startDate);
    console.log(endDate);
  };

  return (
    <div>
      <h1 className="modalHeader">Border Details</h1>
      <form onSubmit={onSubmit}>
        <input
          name="borderName"
          value={state.borderName}
          className="inputForm"
          placeholder="Хайлт нэр"
          onChange={onChange}
          required
        />
        <input
          value={state.domain}
          name="domain"
          className="inputForm"
          placeholder="Домайн"
          onChange={onChange}
        />
        <input
          value={state.source}
          name="source"
          className="inputForm"
          placeholder="Эх сурвалж"
          onChange={onChange}
        />
        <br />
        <div className="gridCont">
          <select
            value={state.category}
            name="category"
            onChange={onChange}
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
            value={state.country}
            name="country"
            onChange={onChange}
            className="selectModal"
          >
            <option value="">Улс</option>
            <option value="ua">UA</option>
            <option value="us">US</option>
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
            <option value="ve">VE</option>
            <option value="za">ZA</option>
          </select>
        </div>
        <div className="gridCont">
          <DayPickerInput
            onDayChange={(e) => seStarttDate(e)}
            inputProps={{ style }}
            placeholder="Эхлэх огноо"
            
          />
          <DayPickerInput
            onDayChange={(e) => setEndDate(e)}
            inputProps={{ style }}
            placeholder="Дуусах огноо"
          />
        </div>
        <button className="btn btn-primary modalBtn" type="submit">
          Нэмэх
        </button>
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
