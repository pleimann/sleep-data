'use strict';

import { EDFData, EDFHeader, EDFSignal } from './edf';
import { Session } from '../../session';

import * as fs from 'fs';

export class Parser{
	private fileBuffer: Buffer;

	constructor(private fileName: string){ }

	public parse(): Promise<Session>{
		Promise<Session> prom = new Promise<Session>();

		fs.readFile(fileName, (error: NodeJS.ErrnoException, data: Buffer): any => {
			if (error) {
				console.log(error.message);

				return;
			}

			let session = new Session(0);

			let header = this.parseHeader(data);
			session.

			prom. session;
		});

		return prom;
	}

	private parseHeader(fileBuffer: Buffer): EDFHeader{
		let header = new EDFHeader();

		header.formatVersion = fileBuffer.toString('binary', 0, 8);
		header.startDate = fileBuffer.toString('binary', 168, 16);

		return header;
	}
}

export default Parser;