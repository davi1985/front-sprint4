/* globals describe, expect, it */

import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { Alert } from '.';

describe('Alert component', () => {
	it('should render correctly', () => {
		const alertText = 'Text example';

		render(<Alert alertText={alertText}>{alertText}</Alert>);

		expect(screen.getByText('Text example')).toBeInTheDocument();
	});
});
