import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/fonts.googleapis.com.css?family=Roboto:300,400,500,700,900?v=000.374';
import style from './css/Controls.module.css'

export function DbButton({label, onClick}) {
    return (
      <button onClick={onClick}>
        {label}
      </button>
    );
}
  
export function DbButtonSecondary({label, onClick}) {
    return (
      <button className={style.secondary} onClick={onClick}>
        {label}
      </button>
    );
}
  
export function DbTextField({label, name, id, placeholder}) {
    return (
      <div className="row">
      <div className="col">
      <label>
      {label}
      </label>
      </div>
      <div className="col">
      <input id={id} name={name} placeholder={placeholder}>
      </input>
      </div>
      </div>
    );
}
  