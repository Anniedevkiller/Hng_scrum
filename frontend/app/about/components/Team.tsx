import React from 'react'
import Director from './Director'

export default function Team() {
  return (
    <div>
        <div className="w-[70%] mx-auto text-center h-[66px] bg-blue-900 text-white flex justify-center items-center p-3 mt-3 mb-8">
            <p className="text-white font-semibold bg-blue-900 2xl_up:text-5xl xl_up:text-4xl md_up:text-2xl text-xl  text-center">OUR ORGANISATION/TEAMS</p>
        </div>
        <p className='text-center text-xl 2xl:text-lg md:text-base about-container'>The board of directors, comprised of four dedicated full-time members, assumes the responsibility of managing and overseeing the operations of the association in accordance with its established statute. With their collective expertise and strategic vision, the board diligently guides and directs the business affairs of the organization. Each member brings a unique skill set and perspective to the table, ensuring a well-rounded decision-making process. Through their conscientious efforts, the board upholds the principles and objectives set forth in the association's statute, fostering a foundation of stability and adherence to governing guidelines. By working harmoniously, the board of directors plays a pivotal role in the successful functioning and governance of the associatio</p>
        <Director/>
    </div>
  )
}
