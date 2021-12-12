
const Input = (props)=>{
    const {form, inputType, inputDefaultValue, inputPattern, inputId, inputClassNames, inputPlaceholder,
        inputName, onChangeFunction, inputAutoComplete, optionalLabel, textLabel, labelClassNames,
        optionalDivSvg, divSvgClassNames, divSvgInLineStyles, divSvgOnClick, required, onKeyPress, disabled, autoFocus, commentId} = props
    return( 
        <>
            {optionalLabel ? <label htmlFor={inputId} className={labelClassNames}> {textLabel} </label> : null}
            <input id={inputId} className={inputClassNames}  pattern={inputPattern}  type={inputType} placeholder={inputPlaceholder} 
            value={inputDefaultValue} autoComplete={inputAutoComplete} name={inputName} onChange={onChangeFunction} data-form={form}
            required={required} onKeyPress={onKeyPress} disabled={disabled} autoFocus={autoFocus} data-commentid={commentId}
            />
            {optionalDivSvg ? <div onClick={divSvgOnClick} className={divSvgClassNames} style={divSvgInLineStyles}></div> : null}

        </>
    )



}



export default Input