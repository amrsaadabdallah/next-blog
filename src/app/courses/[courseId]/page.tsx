interface Props {
	params: { courseId: string };
}

const Course = ({ params: { courseId } }: Props) => {
	return <h1> Couese #{courseId} Page</h1>;
};

export default Course;
