import React from 'react'
import "./trial4.css"

function trial4() {
  return (
    <div className="outsidewrapper">
      <section id="slidermain">
  <input type="radio" name="slider" id="s1"/>
  <input type="radio" name="slider" id="s2"/>
  <input type="radio" name="slider" id="s3" checked/>
  <input type="radio" name="slider" id="s4"/>
  <input type="radio" name="slider" id="s5"/>
  <label for="s1" id="slide1"></label>
  <label for="s2" id="slide2"></label>
  <label for="s3" id="slide3"></label>
  <label for="s4" id="slide4"></label>
  <label for="s5" id="slide5"></label>
</section>
    </div>
  )
}

export default trial4