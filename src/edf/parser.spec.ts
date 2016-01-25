'use strict';
/// <reference path="../typings/tsd.d.ts" />

var jBinary = require('../../lib/jbinary/jbinary');
import * as fs from 'fs';

import { Parser } from './parser';
import { EDFHeader, EDFData } from './edf';


xdescribe('ResMed machine data parsing', () => {
	it('should parse the edf header from the STR file', (done: Function) => {
		let filename = 'data/resmed/airsense10/STR.edf';

		Parser.parse(filename).subscribe(
			(data: EDFData) => {
				expect(data).toBeDefined();
				expect(data.header).toBeDefined();

				done();

			}, (error: any) => {
				fail(error);
			}
		);

	}, 120000);
});
