import status from './status.jpg';
import scan from './qr_img.jpg';
import { Checkbox } from '@material-ui/core';
import demo from './demo.mp4';
function Scan() {
    return (
        <div className="main">
        <div className="name">
            <img className="status" src={status}/>
            <span>STATUS WEB</span>
        </div>
            <div className="main_body">
        <div className="info">
            <p id="use">How to use Status on your Computer :</p>
            <div className="guide">
                <p>1. Open Status on your phone</p>
                <p>2. Tap <span>Menu </span> or <span>Settings</span> and select Status Web</p>
                <p>3. Point your phone to this screen to capture the code</p>
            </div>
        </div>
        <div className="scan">
        <img src={scan} />
        <span><Checkbox />Keep me signed in</span>
        </div>
        <div></div>
        <div className="video">
        <video src={demo} width="500" height="00" controls="controls" autoPlay="true" />
        </div>
            </div>
            
        </div>
    )
}

export default Scan
