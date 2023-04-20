
export default function ContactUs() {
    return (
        <div className="main-content c-us">
            <div className="d-flex socials justify-content-center">
                <div className="r-box">
                    <img src="/img/linkedin.png" alt="Linkedin" />
                </div>
                <div className="r-box">
                    <img src="/img/instagram.png" alt="Instagram" />
                </div>
                <div className="r-box">
                    <img src="/img/behance.png" alt="Behance" />
                </div>
            </div>
            <div className="text-touch">
                <div className="q">
                    <span>Want to get in touch?</span>
                    <span className="purp">Drop us a line</span>
                </div>
            </div>

            <div className="form">
                <div className="d-flex ff flex-wrap">
                    <div className="c-content">
                        <div className="title">Name</div>
                        <input type="text" placeholder="Enter your name" className="form-text" />
                    </div>
                    <div className="c-content">
                        <div className="title">Email Address</div>
                        <input type="text" placeholder="Enter your Email" className="form-text" />
                    </div>
                    <div className="c-content x">
                        <div className="title">Message</div>
                        <textarea name="message" placeholder="Enter your message" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}