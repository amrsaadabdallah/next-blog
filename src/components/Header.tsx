import Link from 'next/link';

interface Props {
	bg?: string;
}

const Header = ({ bg = 'bg-teal-500' }: Props) => {
	return (
		<header className={`${bg} py-4 px-10  flex justify-between items-center`}>
			{/* <h2 className='text-4xl'>Nextify</h2> */}

			<Link href='/'>
				<img
					className='h-10'
					src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png'
					alt='czxczx'
				/>
			</Link>
			<nav className='mx-auto'>
				<ul className='flex gap-5'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
					<li>
						<Link href='/contact'>Contact</Link>
					</li>
					<li>
						<Link href='/courses'>Courses</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
