import '@/styles/main.css'

export function SubmitButton({ text, style }) {
        return (
                <button className={style}>{text}</button>
        )
}

export function Sidebar() {
        return (
                <div>
                        <div className="enter-zip" id="sub-side">
                                <label htmlFor="location-with-zip" className="form-label">Zip Code</label>
                                <div className="side-input">
                                        <input type="text" className="form-control" id="location-with-zip" placeholder="12345" />
                                </div>
                                <div className="side-button">
                                        <SubmitButton text={'Submit'} style={'side-button'} />
                                </div>
                        </div>
                </div>
        )
}
