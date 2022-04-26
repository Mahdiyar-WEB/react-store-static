import { useFormik } from "formik";
import * as Yup from "yup";
import Checkbox from "../../Common/Checkbox/Checkbox";
import Input from "../../Common/Input/Input";
import styles from "./signUp.module.css";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useNavigate,useLocation } from "react-router-dom";
import queryString from 'query-string';
import { useAuthAction } from "../../Providers/StoreProvider/StoreProvider";
import signup from "../../Providers/signup";

const initialValues = {
  name: "",
  password: "",
  confirmPassword: "",
  email: "",
  phoneNumber: "",
  favorites: [],
  terms: false,
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required("لطفا نام کاربری خودرا وارد کنید ")
    .min(3, "نام کاربری کوتاه است"),
  email: Yup.string()
    .required("لطفا ایمیل خودرا وارد کنید")
    .email("ایمیل معتبر نیست"),
  phoneNumber: Yup.string()
    .required("شماره همراه خودرا وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره همراه درست نیست"),
  password: Yup.string()
    .required("لطفا رمزعبور خودرا وارد کنید")
    .min(8, "رمزعبور کوتاه است"),
  confirmPassword: Yup.string()
    .required("رمز عبور خودرا تایید کنید")
    .oneOf([Yup.ref("password"), null], "تکرار پسورد هماهنگ نیست"),
  favorites: Yup.array()
    .min(1, "حداقل یک علاقه مندی را انتخاب کنید")
    .required(),
  terms: Yup.boolean().oneOf(
    [true],
    "برای ساخت حساب شما باید قوانین و شرایط را قبول کنید"
  ),
});

const options = [
  { label: "علم اطلاعات", value: "dataScience" },
  { label: "برنامه نویسی", value: "programing" },
  { label: "طراحی", value: "designer" },
  { label: "مهندسی", value: "employe" },
];
const SignUp = () => {
  const location = useLocation();
  const isRedirect = queryString.parse(location.search);

  const setAuth = useAuthAction();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const onSubmit = async (values) => {
        const { name, email, password, phoneNumber } = values;
        const data = signup(name,email,phoneNumber,password);
        if(data.error){
          addToast(data.info, { appearance: "error" });
        }
        else{          
          setAuth(data.info);
          localStorage.setItem("auth", JSON.stringify(data.info));
          addToast("ثبت نام با موفقیت انجام شد", { appearance: "success" });
          navigate(isRedirect.redirect ? "/cart" : "/");
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
        <Input formik={formik} name="name" label="نام کاربری" type="text" />
        <Input
          formik={formik}
          name="phoneNumber"
          label="شماره همراه"
          type="tel"
        />
        <Input
          formik={formik}
          name="password"
          label="رمز عبور"
          type="password"
        />
        <Input
          formik={formik}
          name="confirmPassword"
          label="تکرار رمز عبور"
          type="password"
        />
        <Input formik={formik} name="email" label="ایمیل" type="email" />
        <div className={styles.formDiv}>
          <label>علاقه مندی ها:</label>
          <Checkbox options={options} formik={formik} />
        </div>
        <div className={styles.formDiv}>
          <div>
            <input
              type="checkbox"
              {...formik.getFieldProps("terms")}
              name="terms"
              id="terms"
              value={true}
            />
            <label htmlFor="terms">من شرایط و قوانین را قبول دارم</label>
          </div>
          {formik.errors.terms && formik.touched.terms && (
            <span className={styles.formError}>{formik.errors.terms}</span>
          )}
        </div>
        <div className={styles.btnContainer}>
          <button type="submit" disabled={!formik.isValid}>
            ساخت حساب
          </button>
        </div>
        <Link
          to={isRedirect.redirect ? "/login?redirect=cart" : "/login"}
          style={{ marginTop: "1rem", display: "inline-block" }}
        >
          <p>حساب کاربری دارید؟</p>
        </Link>
      </form>
    </main>
  );
};

export default SignUp;
