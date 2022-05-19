import * as React from "react"

import { Link } from "gatsby"

const PlaysList = () => (
    <div id="plays-list" className='mt-5'>
      <p className=""><strong>Please contact the playwright with questions regarding rights and royalties.</strong>  
</p>
      {/* Play */}
      <div className="plays-list-content">
        <a href="/a-christmas-carol" className="">A Christmas Carol</a>
      </div>
       {/* Play */}
       <div className="plays-list-content">
        <a href="/agnes-smedley-our-american-friend" className="">Agnes Smedley, Our American Friend</a>
      </div>
      {/* Play */}
      <div className="plays-list-content">
        <a href="/daniel-in-babylon" className="">Daniel In Babylon</a>
      </div>
      {/* Play */}
      <div className="plays-list-content">
        <a href="/glass-mountain" className="">Glass Mountain</a>
      </div>
      {/* Play */}
      <div className="plays-list-content">
        <a href="/mrs-california" className="">Mrs. California</a>
      </div>
      {/* Play */}
      <div className="plays-list-content">
        <a href="/prairie-fire" className="">Prairie Fire</a>
      </div>
      {/* Play */}
      <div className="plays-list-content">
        <a href="/sex-sting" className="">Sex Sting (with Susan Raffanti)</a>
      </div>
      {/* Play */}
      <div className="plays-list-content">
        <a href="/shiloh-rules" className="">Shiloh Rules</a>
      </div>
      {/* Play */}
      <div className="plays-list-content">
        <a href="/sister-kennys-children" className="">Sister Kenny's Children</a>
      </div>
      {/* Play */}
      <div className="plays-list-content">
        <a href="/sisters-of-peace" className="">Sisters of Peace</a>
      </div>
      {/* Play */}
      <div className="plays-list-content">
        <a href="the-dyers-hand" className="">The Dyer's Hand</a>
      </div>
      {/* Play */}
      <div className="plays-list-content">
        <a href="/the-mikado-project" className="">The Mikado Project (with Ken Narasaki)</a>
      </div>
      {/* Play */}
      <div className="plays-list-content">
        <h6>Vietnam Three:</h6>
        <ul>
            <li><a href="/tears-of-rage" className="">Tears of Rage</a></li>
            <li><a href="/mimis-guide" className="">Mimi's Guide</a></li>
            <li><a href="/may" className="">May</a></li>
          </ul>
        
      </div>
    </div>
  );
  
  export default PlaysList;