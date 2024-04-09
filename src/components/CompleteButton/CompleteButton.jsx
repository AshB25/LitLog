import { useState } from 'react';

function CompButton() {
  const [compBtn, setCompBtn] = useState(false);

  function handleClick() {
    setCompBtn((compBtn) => !compBtn);
  }

  let toggleColor = compBtn ? 'active' : null;

  return (
    <button className={`${toggleColor}`} onClick={handleClick}>
      Complete
    </button>
  );
}

export default CompButton;
