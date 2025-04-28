import { useNavigate } from 'react-router-dom';

function ActionButton({ label, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path); // Only navigate if a path is given
    }
    // Otherwise do nothing (for Coming Soon)
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '1rem 2rem',
        margin: '1rem',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: "'Playfair Display', serif",
        fontSize: '1rem',
        letterSpacing: '1px',
      }}
    >
      {label}
    </button>
  );
}

export default ActionButton;
