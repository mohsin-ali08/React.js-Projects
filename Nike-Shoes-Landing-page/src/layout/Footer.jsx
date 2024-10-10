import React from 'react'

const Footer = () => {
    return (
        <div className='border-t'>
            <div className='flex flex-col md:flex-row justify-around px-6 py-6 md:px-10 md:py-3'>
                <div className='mb-4 md:mb-0'>
                    <h1 className='font-bold'>MOHSIN ALI</h1>
                    <p className='w-full md:w-[400px] py-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro eaque praesentium nihil eligendi, asperiores voluptates numquam ullam, laboriosam, fugiat dignissimos quis nisi rerum. Modi, accusamus enim. Velit, atque nobis.</p>
                    <h1 className='text-semibold py-2'>All rights reserved @Mohsin Ali</h1>
                </div>

                <div className='font-semibold flex flex-col items-start'>
                    <a href="#"><h2 className='py-2 font-bold'>Contact Us</h2></a>
                    <div className='flex items-center'>
                        <input type="text" placeholder="Your email" className='px-3 p-1 border-gray-900 border rounded text-black outline-none w-[200px] md:w-[250px]' />
                        <button className='bg-[#D01C28] px-2 py-1 border border-black rounded ml-2 text-white hover:bg-black'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
