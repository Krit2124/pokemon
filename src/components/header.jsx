import logoImage from "../assets/logo.png"

export default function Header() {
    return (
        <section>
            <div className="container flex-row-c-c">
                <img src={logoImage} alt="logo" className="logo"/>
            </div>
        </section>
    );
}