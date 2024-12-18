import "./WorkTogether.css";
import Link from "next/link";

export default function WorkTogether() {
    return (
        <section className="work-together-section" style={{marginBottom:'60px' , background:'#f0f4f9' , padding:'30px'}}>
            <div className="container">
                <h2 className="section-title">Let’s Work Together</h2>
                <p className="section-description">
                    If you’re ready to take your research and editorial processes to the next level, we’d love to hear from you:
                </p>
                <ul className="contact-list" style={{display:'flex' , gap:'40px'}}>
                    <li>
                        <strong>Email Us:</strong>{" "}
                        <a href="mailto:success@manuscriptedit.com" className="contact-link">
                            success@manuscriptedit.com
                        </a>
                    </li>

                    <li>
                        <strong>Join the Program:</strong>{" "}
                        <Link href="https://secure.manuscriptedit.com/register" className="contact-link">
                            Sign Up Today
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}
