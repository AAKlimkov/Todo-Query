import "./App.css";
import Autocomplete from "./AutoComplete";
import DropDown from "./DropDown";
import ClickableWithPortal from "./Portal";
import Tabs from "./Tabs";

function App() {
  const tabsData = [
    { label: "Tab 1", content: <div>Content for Tab 1</div> },
    { label: "Tab 2", content: <div>Content for Tab 2</div> },
    { label: "Tab 3", content: <div>Content for Tab 3</div> },
  ];
  return (
    <div className="App">
      <h1>Autocomplete Example</h1>
      <Autocomplete suggestions={["apple", "peach", "milk"]} />
      <h1>Dropdown Example</h1>
      <DropDown summary="show dropdown" details="dropdown is open"></DropDown>

      <h1>Material-style Tabs</h1>
      <Tabs tabs={tabsData} />
      <h1>React Portal Example</h1>
      <ClickableWithPortal
        triggerContent={<div>Click me to open portal</div>}
        portalContent={<div>This is content inside the portal!</div>}
      />
    </div>
  );
}

export default App;
