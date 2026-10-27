'use strict';

const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('[data-request-form]').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const submitButton = form.querySelector('[type="submit"]');
    const formStatus = form.querySelector('.form-status');
    const buttonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
    formStatus.replaceChildren();
    formStatus.className = 'form-status';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
        mode: 'cors',
        credentials: 'omit',
        redirect: 'follow'
      });

      if (!response.ok) throw new Error('Submission failed');

      form.reset();
      formStatus.className = 'form-status form-success';
      formStatus.textContent = form.dataset.success;
    } catch (error) {
      const phoneLink = document.createElement('a');
      phoneLink.href = 'tel:+16625165046';
      phoneLink.textContent = '662-516-5046';

      formStatus.className = 'form-status form-error';
      const textLink = document.createElement('a');
      textLink.href = 'sms:+16625165046';
      textLink.textContent = 'text us';
      formStatus.append('We could not send your request. Your details are still here. Please call ', phoneLink, ' or ', textLink, '.');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = buttonText;
    }
  });
});
