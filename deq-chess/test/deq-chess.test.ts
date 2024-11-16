import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { DeqChess } from '../src/DeqChess.js';
import '../src/deq-chess.js';

describe('DeqChess', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<DeqChess>(html`<deq-chess></deq-chess>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<DeqChess>(html`<deq-chess></deq-chess>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<DeqChess>(html`<deq-chess header="attribute header"></deq-chess>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<DeqChess>(html`<deq-chess></deq-chess>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
