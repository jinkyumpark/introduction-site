import React from 'react'
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = ({isLoginOpen, setIsLoginOpen}) => {
    const closeLogin = () => {
        setIsLoginOpen(false)
    }

  return (
        <Modal show={isLoginOpen}>
            <Modal.Header>
                    <Modal.Title>관리자 로그인</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form action="" method="POST">
                    <div className="form-group">
                        <label htmlFor="">아이디</label>
                        <input type="text" name="id" id="id" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">비밀번호</label>
                        <input type="password" name="pw" id="pw" className='form-control'/>
                    </div>

                    <div className="text-center row mt-3">
                        <div className="col-6">
                            <button className='btn btn-success w-100'  type='submit'>로그인</button>
                        </div>
                        <div className="col-6">
                            <button className='btn btn-danger w-100' onClick={closeLogin} type="reset">취소</button>
                        </div>
                    </div>
                </form>
            </Modal.Body>

            <Modal.Footer>
                이 로그인 페이지는 관리자를 위한 페이지에요.
                특정 서비스를 이용하실려면 각각의 페이지를 방문하셔서 로그인해 주세요
            </Modal.Footer>
        </Modal>
  )
}

export default Login