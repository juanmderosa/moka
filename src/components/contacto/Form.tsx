import type { FormValues, FormValuesError } from "../../helpers/interfaces";
import "../../styles/form.css";
import { useState, useEffect } from "react";

export const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState<FormValuesError>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const resetForm = () => {
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setError({
      name: false,
      email: false,
      subject: false,
      message: false,
    });
  };

  const validateForm = () => {
    const newError = {
      name: formValues.name.trim().length === 0,
      email:
        formValues.email.trim().length === 0 ||
        !/\S+@\S+\.\S+/.test(formValues.email),
      subject: formValues.subject.trim().length === 0,
      message: formValues.message.trim().length === 0,
    };

    setError(newError);
    console.log(!Object.values(newError).includes(true));
    return !Object.values(newError).includes(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (validateForm()) {
        const response = await fetch(
          ` https://www.form-to-email.com/api/s/${
            import.meta.env.PUBLIC_EMAIL_SERVICE
          }`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
          }
        );
        if (!response.ok) {
          // in case of malformed form data
          setFailure(true);
          setTimeout(() => {
            setFailure(false);
          }, 5000);
          throw new Error("Error al enviar el formulario");
        } else {
          // in case of success
          setLoading(false);
          setSuccess(true);
          resetForm();
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
      }
    } catch (error) {
      // in case of form-to-email server not responding
      if (error instanceof Error) {
        throw new Error("Error al enviar el formulario", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("succes", success), console.log("failure", failure);
    console.log("loading", loading);
  }, [success, failure, loading]);

  return (
    <form
      className="form"
      onSubmit={handleSubmit}>
      <h2>Escribinos</h2>
      {success && (
        <div className="success-container">
          <h3 className="success-h3">Tu mensaje ha sido enviado</h3>
          <h4 className="success-h4">Pronto te estaremos respondiendo</h4>
        </div>
      )}

      {failure && (
        <div className="success-container">
          <h3 className="success-h3">No hemos podido procesar tu mensaje</h3>
          <h4 className="success-h4">
            Vuelve a intentar en unos minutos. Si el problema persiste
            contactate con nosotros a través de moka@moka.com
          </h4>
        </div>
      )}

      {!success && !failure && (
        <>
          <div className="labelandinput-container">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formValues.name}
              disabled={loading}
            />
            {error.name && <p className="error">El nombre es obligatorio</p>}
          </div>
          <div className="labelandinput-container">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={formValues.email}
              disabled={loading}
            />
            {error.email && (
              <p className="error">El email es obligatorio o inválido</p>
            )}
          </div>
          <div className="labelandinput-container">
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              value={formValues.subject}
              disabled={loading}
            />
            {error.subject && <p className="error">El asunto es obligatorio</p>}
          </div>
          <div className="labelandinput-container">
            <label htmlFor="message">Mensaje</label>
            <textarea
              name="message"
              onChange={handleChange}
              value={formValues.message}
              disabled={loading}
            />
            {error.message && (
              <p className="error">El mensaje es obligatorio</p>
            )}
          </div>

          {!loading && !success && (
            <button className="form-button">Enviar</button>
          )}
          {loading && (
            <button
              className="form-button"
              disabled>
              Enviando...
            </button>
          )}
        </>
      )}
    </form>
  );
};
