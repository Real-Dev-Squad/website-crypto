import { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const [name, setName] = useState();
  return (
    <div className="modal-container">
      <label>
        Please select the user
        <select value={name} onChange={(e) => setName(e.target.value)}>
          <option value="kratika">Kratika</option>
          <option value="john">John</option>
          <option value="jake">Jake</option>
        </select>
      </label>
      <input type="text" placeholder="please enter the amount" />
      <input
        type="submit"
        value="Submit"
        onClick={() => console.log('sending data')}
      />
    </div>
  );
};

Modal.propTypes = {
  name: PropTypes.string
};

export default Modal;
