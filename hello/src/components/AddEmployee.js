import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const[role, setRole] = useState('');
  const[img, setImage] = useState('');
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button
          onClick={handleShow}
          className="mx-auto block mt-6 px-4 py-1 text-white text-sm bg-purple-600 font-semibold rounded border ring-purple-600 border-purple-600 hover:text-white hover:bg-purple-700 hover:border-transparent">
          + Add Employee
        </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="w-full max-w-xs">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(name, role);
                setName = ''
                setRole = ''
                setImage = ''
                props.newEmployee(name, role, img);
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
                    placeholder='Tom Gray'
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
                    placeholder='manager'
                    type="text"
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value)
                    }}
                    />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="img">
                    Image URL
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="img"
                    placeholder='https://google.com'
                    type="text"
                    value={img}
                    onChange={(e) => {
                      setImage(e.target.value)
                    }}
                    />
                </div>
              </div>
            </form>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}>
              Cancel
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
            form="addmodal">
                + Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;