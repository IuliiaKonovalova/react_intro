import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const[role, setRole] = useState('');
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button
          onClick={handleShow}
          className="mx-auto block px-4 py-1 text-white text-sm bg-purple-600 font-semibold rounded border ring-purple-600 border-purple-600 hover:text-white hover:bg-purple-700 hover:border-transparent">
          + Add Employee
        </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="w-full max-w-xs">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(props.id, name, role);
                props.updateEmployee(props.id, name, role);
              }}
              className="w-full max-w-small"
              id="addmodal">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Full Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="role">
                    Role
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="role"
                    type="text"
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value)
                    }}
                    />
                </div>
              </div>
            </form>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={handleClose}>Cancel</button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            form="addmodal">
                + Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;