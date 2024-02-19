const Display=({intiVal})=>{
    return(
        <p className='inptfld'>
            <input id="inptfld" type="text" value={intiVal} readOnly placeholder="0"/>
        </p>
    )
}
export default Display;