import {
  useAuth,
  useAuthAction,
} from "../../Providers/StoreProvider/StoreProvider";
import styles from "./profile.module.css";
import { AiOutlineUser } from "react-icons/ai";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const MySwal = Swal;
  const userDetails = useAuth();
  const setAuth = useAuthAction();

  const clickHandler = () => {
    MySwal.fire({
      title: "<p>از خروج خود مطمعن هستید؟</p>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    }).then((res) => {
      if (res.isConfirmed) {
        setAuth("");
        localStorage.removeItem("auth");
        navigate("/");
      }
    });
  };
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.profileContainer}>
          <div className={styles.imageContainer}>
            <AiOutlineUser />
          </div>
          <div className={styles.formDiv}>
            <span>{userDetails.name}</span>
            <span>:نام کاربری</span>
          </div>
          <div className={styles.formDiv}>
            <span>{userDetails.email}</span>
            <span>:ایمیل</span>
          </div>
          <div className={styles.formDiv}>
            <span>{userDetails.phoneNumber}</span>
            <span>:شماره همراه</span>
          </div>
          <button onClick={() => clickHandler()}>خروج از حساب</button>
        </div>
      </section>
    </main>
  );
};

export default Profile;
