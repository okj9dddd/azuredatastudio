/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the Source EULA. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { ProviderProperties } from './propertiesWidget.component';
import * as nls from 'vs/nls';

const azureEditionDisplayName = nls.localize('azureEdition', 'Edition');
const azureType = nls.localize('azureType', 'Type');

export const properties: Array<ProviderProperties> = [
	{
		provider: 'MSSQL',
		flavors: [
			{
				flavor: 'on_prem',
				condition: {
					field: 'isCloud',
					operator: '!=',
					value: true
				},
				databaseProperties: [
					{
						displayName: nls.localize('recoveryModel', 'Recovery Model'),
						value: 'recoveryModel'
					},
					{
						displayName: nls.localize('lastDatabaseBackup', 'Last Database Backup'),
						value: 'lastBackupDate',
						ignore: [
							'1/1/0001 12:00:00 AM'
						]
					},
					{
						displayName: nls.localize('lastLogBackup', 'Last Log Backup'),
						value: 'lastLogBackupDate',
						ignore: [
							'1/1/0001 12:00:00 AM'
						]
					},
					{
						displayName: nls.localize('compatibilityLevel', 'Compatibility Level'),
						value: 'compatibilityLevel'
					},
					{
						displayName: nls.localize('owner', 'Owner'),
						value: 'owner'
					}
				],
				serverProperties: [
					{
						displayName: nls.localize('version', 'Version'),
						value: 'serverVersion'
					},
					{
						displayName: nls.localize('edition', 'Edition'),
						value: 'serverEdition'
					},
					{
						displayName: nls.localize('computerName', 'Computer Name'),
						value: 'machineName'
					},
					{
						displayName: nls.localize('osVersion', 'OS Version'),
						value: 'osVersion'
					}
				]
			},
			{
				flavor: 'cloud',
				condition: {
					field: 'isCloud',
					operator: '==',
					value: true
				},
				databaseProperties: [
					{
						displayName: azureEditionDisplayName,
						value: 'azureEdition'
					},
					{
						displayName: nls.localize('serviceLevelObjective', 'Pricing Tier'),
						value: 'serviceLevelObjective'
					},
					{
						displayName: nls.localize('compatibilityLevel', 'Compatibility Level'),
						value: 'compatibilityLevel'
					},
					{
						displayName: nls.localize('owner', 'Owner'),
						value: 'owner'
					}
				],
				serverProperties: [
					{
						displayName: nls.localize('version', 'Version'),
						value: 'serverVersion'
					},
					{
						displayName: azureType,
						value: 'serverEdition'
					}
				]
			}
		]
	}
];