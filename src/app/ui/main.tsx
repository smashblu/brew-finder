import '@/styles/main.css'

export function FormLabel({ text, style, htmlfor }) {
        return (
                <label htmlFor={htmlfor} className={style}>{text}</label>
        )
}

export function FormButton({ text, style, handleClick }) {
        return (
                <button className={style} onClick={handleClick}>{text}</button>
        )
}

export function FormInput({ type, style, id, placeholder }) {
        return (
                <input type={type} className={style} id={id} placeholder={placeholder}></input>
        )
}

export function Sidebar() {
        function handleClick(i) {
                if (i) {
                        return <h1>{i}</h1>
                }
        }

        return (
                <div>
                        <div id="sub-side">
                                <FormLabel htmlfor={'location-with-zip'} style={'form-label'} text={'Zip Code'} />
                                <div className="side-input">
                                        <FormInput type={'text'} style={'form-control'} id={'location-with-zip'} placeholder={'12345'} />
                                </div>
                                <div className="side-button">
                                        <FormButton text={'Submit'} style={'side-button'} onClick={handleClick('test')} />
                                </div>
                        </div>
                </div>
        )
}
