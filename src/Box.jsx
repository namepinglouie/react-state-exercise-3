import { useState } from "react";
function Box() {
    const [check, setCheck] = useState(false);
    function checking() {
      if(check === false) setCheck(true);
      else setCheck(false);
    }
    return(
        <div className="box" onClick={checking}>{check ? "X" : ""}</div>
    )
}

export default Box;