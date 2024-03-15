import contactPage from "@/data/contactPage";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Title from "../Reuseable/Title";

const { title, tagline, inputs } = contactPage;

const textarea = inputs[inputs.length - 1];

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const url = "/api/contact"; // URL to the API endpoint
      console.log("Sending request to:", url);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("here is response:", response);
      setFormSubmitted(true)

      // Rest of your code to handle the response...
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <section className="contact-page">
      <Container>
        <Title title={title} tagline={tagline} className="text-center" />
        <Row>
          <Col xl={12}>
            <div className="contact-page__form">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="comment-one__form contact-form-validated"
              >
                <Row>
                  {inputs
                    .slice(0, -1)
                    .map(({ name, type, placeholder, required }) => (
                      <Col xl={6} key={name}>
                        <div className="comment-form__input-box">
                          <input
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            {...register(name, { required })}
                          />
                          {errors[name] && (
                            <span className="error">
                              This field is required
                            </span>
                          )}
                        </div>
                      </Col>
                    ))}
                </Row>
                <Row>
                  <Col xl={12}>
                    <div className="comment-form__input-box">
                      <textarea
                        name={textarea.name}
                        placeholder={textarea.placeholder}
                        {...register(textarea.name, {
                          required: textarea.required,
                        })}
                      ></textarea>
                      {errors[textarea.name] && (
                        <span className="error">This field is required</span>
                      )}
                    </div>
                   { !formSubmitted ? <button type="submit" className="thm-btn comment-form__btn">
                      send a message
                    </button>: <h3>We have received your message and will get back to you as soon as possible. Thank you!</h3>}
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
