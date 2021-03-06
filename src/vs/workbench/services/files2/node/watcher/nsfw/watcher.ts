/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Event } from 'vs/base/common/event';
import { IDiskFileChange } from 'vs/workbench/services/files2/node/watcher/watcher';

export interface IWatcherRequest {
	path: string;
	excludes: string[];
}

export interface IWatcherOptions {
	verboseLogging: boolean;
}

export interface IWatchError {
	message: string;
}

export interface IWatcherService {
	watch(options: IWatcherOptions): Event<IDiskFileChange[] | IWatchError>;
	setRoots(roots: IWatcherRequest[]): Promise<void>;
	setVerboseLogging(enabled: boolean): Promise<void>;
	stop(): Promise<void>;
}