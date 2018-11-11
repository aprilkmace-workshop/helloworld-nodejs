import { Selector } from 'testcafe';

fixture `Initial page`
   .page `localhost:8080`;

test('Check message header', async t => {
   const messageHeader = Selector('#message');

   await t
       .expect(messageHeader.innerText).contains('Free Donuts', 'message header contains text "Free Donuts"');
});
