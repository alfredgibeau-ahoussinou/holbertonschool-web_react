import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  test('header with one cell spanning two columns when second is null', () => {
    render(<table><thead><CourseListRow isHeader={true} textFirstCell="Available courses" /></thead></table>);
    const colheader = screen.getByRole('columnheader', { name: /available courses/i });
    expect(colheader).toHaveAttribute('colspan', '2');
  });

  test('header with two th when second provided', () => {
    render(<table><thead><CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" /></thead></table>);
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(2);
  });

  test('regular row renders two td inside tr', () => {
    render(<table><tbody><CourseListRow textFirstCell="ES6" textSecondCell="60" /></tbody></table>);
    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(2);
  });
});


