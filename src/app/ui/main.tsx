import '@/styles/main.css'

export function FormButton({ text, style }) {
        return (
                <button className={style}>{text}</button>
        )
}

export function FormInput({ type, style, id, placeholder }) {
        return (
                <input type={type} className={style} id={id} placeholder={placeholder}></input>
        )
}

export function Sidebar() {
        return (
                <div>
                        <div id="sub-side">
                                <label htmlFor="location-with-zip" className="form-label">Zip Code</label>
                                <div className="side-input">
                                        <FormInput type={'text'} style={'form-control'} id={'location-with-zip'} placeholder={'12345'} />
                                </div>
                                <div className="side-button">
                                        <FormButton text={'Submit'} style={'side-button'} />
                                </div>
                        </div>
                </div>
        )
}
