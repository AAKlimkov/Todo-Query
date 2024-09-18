interface drowdownProps {
  details: string;
  summary: string;
}

const DropDown = ({ details, summary }: drowdownProps) => {
  return (
    <details>
      <summary>{summary}</summary>
      {details}

    </details>
  );
};

export default DropDown;
