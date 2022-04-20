import styles from "./checkbox.module.css";

const Checkbox = ({ options, formik }) => {
  return (
    <>
      <div className={styles.checkContainer}>
        {options.map((option, index) => {
          return (
            <div key={index} className={styles.checkItem}>
              <input
                type="checkbox"
                onChange={formik.handleChange}
                checked={formik.values.favorites.includes(option.value)}
                name="favorites"
                onBlur={formik.handleBlur}
                value={option.value}
                id={option.value}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          );
        })}
      </div>
      {formik.errors.favorites && formik.touched.favorites && (
        <span className={styles.formError}>{formik.errors.favorites}</span>
      )}
    </>
  );
};

export default Checkbox;
