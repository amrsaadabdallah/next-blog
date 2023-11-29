import Link from 'next/link';

const Courses = () => {
	return (
		<>
			<h1 className='text-3xl'>Courses Page</h1>
			<ul className='flex flex-col gap-5'>
				<li>
					<Link href='/courses/1'>HTML</Link>
				</li>
				<li>
					<Link href='/courses/2'>JS</Link>
				</li>
				<li>
					<Link href='/courses/3'>CSS</Link>
				</li>
				<li>
					<Link href='/courses/4'>Python</Link>
				</li>
			</ul>
		</>
	);
};

export default Courses;
