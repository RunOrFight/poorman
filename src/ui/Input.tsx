import { InputHTMLAttributes, forwardRef } from 'react';
import st from './Input.module.pcss';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return (
    <div className={st.container}>
      <svg className={st.left_triangle} viewBox="0 0 18 82">
        <line x1="18" y1="0" x2="0" y2="20.5" stroke="#2BBAD9" strokeWidth={3} />
        <line x1="0" y1="19.5" x2="5" y2="42" stroke="#2BBAD9" strokeWidth={3} />
        <line x1="5" y1="41" x2="0" y2="61.5" stroke="#2BBAD9" strokeWidth={3} />
        <line x1="0" y1="60.5" x2="18" y2="82" stroke="#2BBAD9" strokeWidth={3} />
        <polygon points="18,3 2,20.5 6,41 18,41 18,79 2,61.5 6,41 18,41" fill="#0F539E" />
      </svg>
      <div className={st.input_container}>
        <input {...props} ref={ref} className={st.test} placeholder={props.name} />
      </div>
      <svg className={st.right_triangle} viewBox="0 0 18 82">
        <line x1="0" y1="0" x2="18" y2="20.5" stroke="#5156B6" strokeWidth={3} />
        <line x1="18" y1="19.5" x2="13" y2="42" stroke="#5156B6" strokeWidth={3} />
        <line x1="13" y1="41" x2="18" y2="61.5" stroke="#5156B6" strokeWidth={3} />
        <line x1="18" y1="60.5" x2="0" y2="82" stroke="#5156B6" strokeWidth={3} />
        <polygon points="0,3 16,20.5 11,41 0,41 0,79 16,61.5 11,41 0,41" fill="#062055" />
      </svg>
    </div>
  );
});

export default Input;
