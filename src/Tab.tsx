interface SingleTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ label, isActive, onClick }: SingleTabProps) => {
  return (
    <button className={`${isActive ? "active" : ""}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Tab;
