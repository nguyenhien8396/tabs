import { useState } from "react";
import "./Tabs.scss";
import { ic_close, ic_add, ic_dot } from "utils/images";

const listTabDefault = [
  {
    id: 1,
    title: "Untitled Request",
    method: "GET",
  },
  {
    id: 2,
    title: "Untitled Request",
    method: "POST",
  },
  {
    id: 3,
    title: "Untitled Request",
    method: "POST",
  },
  {
    id: 4,
    title: "Untitled Request",
    method: "GET",
  },
];
function Tabs() {
  const [listTabs, setListTabs] = useState(listTabDefault);
  const [tab, setTab] = useState(listTabs[0].id);

  const onCloseTab = (id) => {
    const newList = listTabs.filter((i) => i.id !== id);
    setListTabs(newList);
  };

  const openNewTab = () => {
    const newList = JSON.parse(JSON.stringify(listTabs));
    newList.push({
      id: listTabs[listTabs.length - 1].id + 1,
      title: "Untitled Request",
      method: "GET",
    });
    setListTabs(newList);
  };

  return (
    <div className="tabs">
      {listTabs.map((el) => (
        <div key={el.id} className={`tab ${tab === el.id ? "active" : ""}`}>
          <div className="tab-content">
            <div className="content-text">
              <div className="method">{el.method || "GET"}</div>
              <div className="title" onClick={() => setTab(el.id)}>
                {el.title}
              </div>
            </div>
            <button className="ic-close" onClick={() => onCloseTab(el.id)}>
              <img alt="" src={ic_close} />
            </button>
          </div>
        </div>
      ))}
      <div className="action-btn">
        <button className="ic-add" onClick={openNewTab}>
          <img alt="" src={ic_add} />
        </button>
      </div>
      <div className="action-btn">
        <button className="ic-dot">
          <img alt="" src={ic_dot} />
        </button>
      </div>
    </div>
  );
}

export default Tabs;
