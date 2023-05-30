import React from 'react';

export default function Pages(props){
  const {pageHandler,users} = props;
  const pageNumbers = [];
  for(let i = 1;i < Math.ceil(users.length/3)+1;++i){
    pageNumbers.push(i);
  }
  return(
    <>
      <div>
        {pageNumbers.map((page)=><>
          <button key={page} onClick={()=>pageHandler(page)}>{page}</button>
        </>)}
      </div>
    </>
  );
}