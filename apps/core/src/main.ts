import { writeFileSync } from 'fs';
import { mdToPdf } from 'md-to-pdf';
import * as path from 'path';

const SRC = path.resolve(__dirname, './assets/agreement.md');
const DEST = path.resolve(__dirname, './assets/agreement.html');

(async () => {
	const pdf = await mdToPdf({path: SRC}, { as_html: true }).catch(console.error);
	pdf && writeFileSync(DEST, pdf.content);
})();
