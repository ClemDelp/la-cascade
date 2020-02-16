// FROM https://formspree.io/
// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import { PHONE_CONTACT, CONTACT_FORM_SUBJECT_PREFIX } from "../config";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mknraeek"
        method="POST"
      >
        <div className='bold'>Sujet:</div>
        <select name="_subject" className='mb2'>
          <option value={`${CONTACT_FORM_SUBJECT_PREFIX} information`}>Information</option>
          <option value={`${CONTACT_FORM_SUBJECT_PREFIX} adhesion`}>Demandes d'adhésion</option>
          <option value={`${CONTACT_FORM_SUBJECT_PREFIX} reservation`}>Réservation</option>
          <option value={`${CONTACT_FORM_SUBJECT_PREFIX} annulation`}>Annulation de réservation</option>
        </select>
        
        <div className='bold'>Votre email:</div>
        <input type="text" name="email" />
        
        <div className='bold'>Message:</div>
        <textarea name="message" />

        {status === "SUCCESS" ? <p>Message envoyé, merci!</p> : <button>Envoyer</button>}
        {status === "ERROR" && <p>Ooops! Nous avons rencontré une erreur merci de nous contacter directement au {PHONE_CONTACT}.</p>}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}