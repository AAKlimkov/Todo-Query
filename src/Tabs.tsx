import { useState } from "react";
import Tab from "./Tab";

interface TabProps {
  label: string;
  content: React.ReactNode;
}
interface TabsProps {
  tabs: TabProps[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={activeTabIndex === index}
            onClick={() => setActiveTabIndex(index)}
          />
        ))}
      </div>
      <div>{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
