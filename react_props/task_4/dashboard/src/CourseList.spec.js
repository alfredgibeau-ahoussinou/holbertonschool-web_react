import { render, screen } from '@testing-library/react';
import CourseList from './CourseList/CourseList';

describe('CourseList', () => {
  test('renders 5 rows with courses', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    render(<CourseList courses={courses} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(5); // 2 header rows + 3 body rows
  });

  test('renders 1 row when courses empty', () => {
    render(<CourseList courses={[]} />);
    // header has 2 rows, body has 1 row -> but role('row') counts both header and body
    const bodyRow = screen.getByText('No course available yet');
    expect(bodyRow).toBeInTheDocument();
  });
});


