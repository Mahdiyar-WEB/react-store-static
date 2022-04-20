import styles from "./input.module.css";

const Input = ({label,name,formik,type="text"}) => {
    return ( 
      <div className={styles.formDiv}>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        {...formik.getFieldProps(name)}
        name={name}
        id={name}
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className={styles.formError}>{formik.errors[name]}</span>
      )}
    </div>
     );
}
 
export default Input;
