import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  width: 90%;
  margin: 50px auto;

  h1 {
    font-size: var(--font-size-middle);
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-gray-light);
  }
  p {
    font-size: var(--font-size-small);
    margin: 20px 0;
  }

  .contact-form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 30px;
      height: 50px;
      font-size: var(--font-size-small);
      border: 1px solid var(--color-gray-light);
      &::placeholder {
        text-indent: 10px;
      }
    }
    button {
      border: none;
      padding: 10px 0;
      width: 250px;
      background-color: black;
      color: white;
      font-size: var(--font-size-small);
      &:hover {
        background-color: var(--color-gray-dark);
        color: black;
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact</h1>
      <p>Lets get in touch and talk about your next project.</p>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Comment" />
        <button>SEND MESSAGE</button>
      </form>
    </ContactContainer>
  );
};
export default Contact;
