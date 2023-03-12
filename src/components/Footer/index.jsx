import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const index = () => {
    return (
        <footer className="text-center text-white bg-success">
            <div className="container pt-4">
                <section>
                    <a className="btn btn-link btn-floating btn-lg text-white m-1" href="https://www.facebook.com/shahzod.yuldashev.3158" role="buthrefn" data-mdb-ripple-color="white">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-white m-1" href="https://t.me/Shahzod_webDeveloper" role="buthrefn" data-mdb-ripple-color="white">
                        <i className="fab fa-telegram"></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-white m-1" href="https://www.instagram.com/shahzod.yuldashev.99/" role="buthrefn" data-mdb-ripple-color="white">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-white m-1" href="https://github.com/shahzod1120" role="buthrefn" data-mdb-ripple-color="white">
                        <i className="fab fa-github"></i>
                    </a>
                </section>
                <span className='color d-block mb-3'>Email: shahzodbek4018ax@gmail.com</span>
            </div>
            <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © {new Date().getFullYear()} Copyright: <Link className='text-white tel' >+99891175580</Link>
            </div>
        </footer>
    );
};

export default index;