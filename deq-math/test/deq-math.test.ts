import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { DeqMath } from '../src/DeqMath.js';
import '../src/deq-math.js';

describe('DeqMath', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<DeqMath>(html`<deq-math></deq-math>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<DeqMath>(html`<deq-math></deq-math>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<DeqMath>(html`<deq-math header="attribute header"></deq-math>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<DeqMath>(html`<deq-math></deq-math>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
