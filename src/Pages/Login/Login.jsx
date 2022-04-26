import Input from "../../Common/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";
import { useToasts } from "react-toast-notifications";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuthAction } from "../../Providers/StoreProvider/StoreProvider";
import queryString from "query-string";
import login from '../../Providers/login';

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("فرمت ایمیل درست نیست")
    .required("لطفا نام کاربری خودرا وارد کنید "),
  password: Yup.string()
    .required("لطفا رمزعبور خودرا وارد کنید")
    .min(8, "رمزعبور کوتاه است"),
});

const Login = () => {
  const location = useLocation();
  const isRedirect = queryString.parse(location.search);
  const setAuth = useAuthAction();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const onSubmit =  (values) => {
    const data = login(values.email,values.password);
    if (data.error === true) {
      addToast(data.info, { appearance: "error" });
    } else {
      setAuth(data.info);
      localStorage.setItem("auth", JSON.stringify(data.info));
      navigate(isRedirect.redirect ? "/cart" : "/");
      addToast(`${data.info.name} خوش آمدید`, { appearance: "success" });
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Input formik={formik} type="email" label="ایمیل" name="email" />
        <Input
          formik={formik}
          label="رمز عبور"
          type="password"
          name="password"
        />
        <div className={styles.btnContainer}>
          <button type="submit" disabled={!formik.isValid}>
            ورود
          </button>
        </div>
        <Link
          to={isRedirect.redirect ? "/sign-up?redirect=cart" : "/sign-up"}
          style={{ marginTop: "1rem", display: "inline-block" }}
        >
          <p>حساب کاربری ندارید؟</p>
        </Link>
      </form>
    </main>
  );
};

export default Login;
