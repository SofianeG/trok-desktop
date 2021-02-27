import React, {useState, useContext} from 'react';
import SignInForm from '../SignInFormScreen/SignInForm';
import Oval from '../../assets/Icon/Oval.svg';
import axios from 'axios';
import UploadImage from '../../components/Profil/UploadImage';
import style from './SignUpForm.module.css';
import {UidContext} from '../../Routes/AppContext';
import {useSelector} from 'react-redux';
import Filebase from 'react-file-base64';

const SignUpForm = () => {
  const uid = useContext(UidContext);

  const [formSubmit, setFormSubmit] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    controlPassword: '',
    selectedFile: '',
  });

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');
    const passwordConfirmError = document.querySelector(
      '.password-confirm.error',
    );

    if (formData.password !== formData.controlPassword) {
      passwordConfirmError.innerHTML =
        'Les mots de passe ne correspondent pas ';
    } else {
      console.log(typeof formData.selectedFile, 'selected file');
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          selectedFile: formData.selectedFile,
        },
      })
        .then((res) => {
          console.log(res, 'resultzt');
          if (res.data.errors) {
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <SignInForm />
          <span> </span>
          <h4 className="success">
            Enregistrement Reussi, veuillez vous connectez
          </h4>
        </>
      ) : (
        <>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={style.container}>
              <div>
                <h1>Créez un compte</h1>
                {/* <UploadImage /> */}
                <form onSubmit={handleRegister}>
                  <label htmlFor="file">Ajouter une photo</label>
                  <Filebase
                    type="file"
                    multiple={false}
                    onDone={({base64}) =>
                      setFormData({...formData, selectedFile: base64})
                    }
                  />
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({...formData, firstName: e.target.value})
                    }
                    className={style.input}
                    placeholder="prénom"
                  />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({...formData, lastName: e.target.value})
                    }
                    className={style.input}
                    placeholder="nom"
                  />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({...formData, email: e.target.value})
                    }
                    className={style.input}
                    placeholder="email"
                  />
                  <div className="email error"></div>
                  <br />
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({...formData, password: e.target.value})
                    }
                    className={style.input}
                    placeholder="mot de passe"
                  />
                  <div className="password error"></div>
                  <input
                    type="password"
                    name="password"
                    id="password-conf"
                    value={formData.controlPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        controlPassword: e.target.value,
                      })
                    }
                    className={style.input}
                    placeholder="Confirmer mot de passe"
                  />
                  <div className="password-confirm error"></div>
                  <br />
                  <button type="submit" className={style.button_terminer}>
                    Terminer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUpForm;
