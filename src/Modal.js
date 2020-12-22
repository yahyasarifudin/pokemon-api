import React, { Component } from "react";

class Modal extends Component {
    
      render() {
        return (
          <div className="App">
            <h1>Hello!! {this.state.name}</h1>
            <a href="javascript:;" onClick={e => this.modalOpen(e)}>
              Open Modal
            </a>
            <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
              <h2>Hello Modal</h2>
              <div className="form-group">
                <label>Enter Name:</label>
                <input
                  type="text"
                  value={this.state.modalInputName}
                  name="modalInputName"
                  onChange={e => this.handleChange(e)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <button onClick={e => this.handleSubmit(e)} type="button">
                  Save
                </button>
              </div>
            </Modal>
          </div>
        );
      }
};

export default Modal;
