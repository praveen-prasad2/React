import Name from "./Name"
import EMail from "./Email"
import PhnNo from "./PhnNo"
import Message from "./Message"
import Portfolio from "./Portfolio"

function bottomSection(){
    return(
        <>
    <Name />
    <EMail />
<PhnNo />
<div className="buttons">
<Message />
<Portfolio />
</div>
        </>
    )
}
export default bottomSection