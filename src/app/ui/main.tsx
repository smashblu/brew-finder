export function Sidebar() {
        return (
                <div className="sidebar">
                        <div className="col-lg-4 enter-zip" id="sub-side">
                                <label for="location-with-zip" className="form-label">Zip Code</label>
                                <div className="side-input">
                                        <input type="text" className="form-control" id="location-with-zip" placeholder="12345" />
                                </div>
                                <div className="side-button">
                                        <button type="button" id="submit-zip" className="btn btn-primary">Submit</button>
                                </div>
                        </div>
                </div>
        )
}
