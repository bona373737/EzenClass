import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

const ContactContainer = styled.div`
  .contact-wrap {
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    max-width: 1500px;

    h1 {
      font-size: var(--font-size-large);
      margin: 30px;
    }
    p {
      font-size: 20px;
      line-height: 30px;
      margin: 20px;
      width: 100%;

      &:nth-child(2) {
        color: #607d8b;
        font-weight: bold;
        font-size: var(--font-size-small);
      }
    }

    form {
      display: flex;
      flex-direction: column;
      padding: 20px;

      input {
        border: none;
        border-bottom: 2px solid var(--color-gray);
        font-size: var(--font-size-small);
        height: 90px;

        &::placeholder {
          text-indent: 10px;
          color: var(--color-gray-dark);
        }
      }

      button {
        background-color: var(--color-gray);
        border: none;
        width: 250px;
        height: 60px;
        font-size: var(--font-size-small);
        margin: 20px 0;

        &:hover {
          border: none;
          background-color: var(--color-gray-dark);
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <div className="contact-wrap">
        <h1>Contact</h1>
        <div className="contact-text">
          <p>
            We offer full-service catering for any event, large or small. We
            understand your needs and we will cater the food to satisfy the
            biggerst criteria of them all, both look and taste. Do not hesitate
            to contact us.
          </p>
          <p>Catering Service, 42nd Living St, 43043 New York, NY</p>
          <p>
            You can also contact us by phone 00553123-2323 or email
            catering@catering.com, or you can send us a message here:
          </p>
        </div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="How many people" />
          <input type="date" />
          <input type="text" placeholder="Message\Special requirements" />
          <button>SEND MESSEGE</button>
        </form>
      </div>
    </ContactContainer>
  );
};
export default Contact;
