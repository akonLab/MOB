import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export class Register extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Новичок здесь?</h4>
                <h6 className="font-weight-light">Зарегистрироваться очень просто. Для этого требуется всего несколько шагов.</h6>
                <form className="pt-3">
                <Form.Group className="d-flex search-field">
                    <Form.Control type="text" placeholder="Имя" size="lg" className="h-auto" />
                  </Form.Group> <Form.Group className="d-flex search-field">
                    <Form.Control type="text" placeholder="Фамилия" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" placeholder="Электронная почта" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Пароль" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Повторный пароль" size="lg" className="h-auto" />
                  </Form.Group>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Я согласен со всеми положениями и условиями
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">ЗАРЕГИСТРИРОВАТЬСЯ</Link>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    У вас уже есть аккаунт? <Link to="/user-pages/login" className="text-primary">Войти</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
