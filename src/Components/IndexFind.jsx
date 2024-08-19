import React from 'react'

const IndexFind = ({ItemIndex}) => {
    const Index=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var num=0;
    
  return (
    <div className='my-5 flex gap-5  text-white flex-wrap items-center justify-center'>
        {
            Index.map((item,i)=>(
                <div key={num++} className='bg-black p-3 rounded-full cursor-pointer ' onClick={()=>ItemIndex(item)}>
                    {item}
                </div>
            ))
        }
    </div>
  )
}

export default IndexFind