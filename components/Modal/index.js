import { useState } from '@components/modal/node_modules/react';
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

export default Modal;
