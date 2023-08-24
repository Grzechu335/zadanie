import {AiOutlineArrowRight as ArrowIcon} from 'react-icons/ai'

export default function Home() {
  return (
    <div className="px-[20px] flex flex-col items-center space-y-[42px]">
		<section className="text-center flex flex-col space-y-4">
			<h1 className="uppercase text-3xl font-bold">Give me art</h1>
			<h2 className="font-semibold">Generate your <span className="uppercase">art</span><br />by typing in field below any words that comes to your mind!</h2>
		</section>
		{/* ====== */}
		<section className="grid grid-cols-3 text-[#9C9C9C] w-full">
			<div className="flex flex-col items-center space-y-[5px] text-center">
				<div className="relative w-full grid place-content-center">
					<div className="w-[24px] h-[24px] bg-red-500 grid place-content-center rounded text-white font-bold">
						1
					</div>
					<span className="block absolute  w-full top-1/2 transform translate-y-[-50%] h-[4px] rounded bg-red-500 -z-10"/>
				</div>
				<p className="text-red-500 font-semibold tracking-wide">Generate <br />image</p>
			</div>
			<div className="flex flex-col items-center space-y-[5px] text-center text-[#9C9C9C] ">
				<div className="relative w-full grid place-content-center">
					<div className="w-[24px] h-[24px] bg-[#E5E5E7] grid place-content-center rounded text-[#9C9C9C] font-bold">
						2
					</div>
					<span className="block absolute  w-full top-1/2 transform translate-y-[-50%] h-[4px] rounded bg-[#E5E5E7] -z-10"/>
				</div>
				<p className=" tracking-wide text-[#9C9C9C]">Choose your <br /> product</p>
			</div>
			<div className="flex flex-col items-center space-y-[5px] text-center text-[#9C9C9C] ">
				<div className="relative w-full grid place-content-center">
					<div className="w-[24px] h-[24px] bg-[#E5E5E7] grid place-content-center rounded text-[#9C9C9C] font-bold">
						3
					</div>
					<span className="block absolute  w-full top-1/2 transform translate-y-[-50%] h-[4px] rounded bg-[#E5E5E7] -z-10"/>
				</div>
				<p className=" tracking-wide text-[#9C9C9C]">Order</p>
			</div>
		</section>
		<section className="w-full">
			<label htmlFor="" className="overflow-hidden rounded h-12 flex items-center bg-[#F5F5F6] shadow-md">
				<input placeholder="What do you want to create?" type="text" name="" className="py-[14px] px-[12px] h-full placeholder:text-sm font-medium placeholder:text-[#C0C1C9] focus:outline-none flex-grow bg-[#F5F5F6] rounded-l" />
				<button className="bg-red-500 grid place-content-center rounded w-12 h-12"></button>
			</label>
		</section>
		<section className="w-full">
				<ul className="flex items-center space-x-3">
					<li className="bg-[#F5F5F6] text-center font-semibold rounded flex-grow py-4 cursor-pointer">High Quality</li>
					<li className="bg-[#F5F5F6] text-center font-semibold rounded flex-grow py-4 cursor-pointer">Pop Art</li>
					<li className="bg-[#F5F5F6] text-center font-semibold rounded flex-grow py-4 cursor-pointer">Realistic Look</li>
				</ul>
		</section>
		<section className="w-full">
			<div className="grid grid-cols-2 px-4 py-2 shadow-2xl rounded bg-[#e3e4e7] bg-opacity-[0.02]">
				<div className="flex flex-col">
					<p className="text-center">Style preview</p>
					{/* Image here as a div */}
					<div className="bg-red-500 w-full h-full"></div>
				</div>
				<div className="flex flex-col items-center">
					<button className="hover:bg-red-500 hover:text-white text-black p-2 text-center cursor-pointer w-fit disabled:cursor-not-allowed">Minimalistic</button>
					<button className="hover:bg-red-500 hover:text-white text-black p-2 text-center cursor-pointer w-fit disabled:cursor-not-allowed">Cartoon</button>
					<button className="hover:bg-red-500 hover:text-white text-black  p-2 text-center cursor-pointer w-fit disabled:cursor-not-allowed">Artistic</button>
				</div>
			</div>
		</section>
		<section className='w-full'>
			<div className="text-center bg-[#e3e4e7] bg-opacity-[0.02] rounded flex flex-col items-center">
				<h3 className="uppercase font-semibold "><span className="text-red-500">Get inspired!</span><br />Best users designs</h3>
				<button className='flex items-center justify-center font-bold'>See more <ArrowIcon size='15' className='ml-2 '/></button>
				{/* Image here as a div */}
				<div className='bg-red-500 w-[235px] h-[235px]'/>
			</div>
			{/* Input */}
			<label htmlFor="" className='flex rounded-lg overflow-hidden items-center h-[44px] bg-[#E5E5E7] w-full mt-4'>
				<input type="text" className='bg-[#E5E5E7] px-2 h-full flex-grow focus:outline-none placeholder:font-medium' placeholder='Punk heart, gothic' />
				<button className='uppercase px-4 h-full gradient-bg'>Artistic</button>
			</label>
		</section>
		<button className='uppercase text-white bg-red-500 font-bold text-xl text-center w-1/2 mx-auto rounded py-3'>Buy</button>
    </div>
  )
}
