
import * as assert from 'assert';
import * as vscode from 'vscode';
import { readTemplate, replaceVariables } from '../../generator';

suite('Generator Test Suite', () => {
	// readTemplateのテスト
	test('replaceVariables Test', () => {
		const template = "%component%%component%%presentational%%presentational%";
		const variables = {
			component: 'component',
			presentational: 'presentational'
		};
		const expected = 'componentcomponentpresentationalpresentational';
		const actual = replaceVariables(template, variables);
		assert.equal(actual, expected);
	});
});