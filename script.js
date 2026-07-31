'use strict';

const year = document.getElementById('year');
const quoteForm = document.getElementById('quote-form');
const formStatus = document.getElementById('form-status');

year.textContent = new Date().getFullYear();

quoteForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!quoteForm.reportValidity()) return;

  const submitButton = quoteForm.querySelector('[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';
  formStatus.replaceChildren();
  formStatus.className = 'form-status';

  try {
    const response = await fetch(quoteForm.action, {
      method: 'POST',
      body: new FormData(quoteForm),
      headers: { Accept: 'application/json' },
      mode: 'cors',
      credentials: 'omit',
      redirect: 'follow'
    });

    if (!response.ok) throw new Error('Submission failed');

    quoteForm.reset();
    formStatus.className = 'form-status form-success';
    formStatus.textContent = 'Thank you! Your catering request has been sent. We’ll be in touch.';
  } catch (error) {
    const phoneLink = document.createElement('a');
    phoneLink.href = 'tel:+16625165046';
    phoneLink.textContent = '662-516-5046';

    formStatus.className = 'form-status form-error';
    formStatus.append('We could not send your request. Please call or text ', phoneLink, '.');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Send Quote Request';
  }
});
