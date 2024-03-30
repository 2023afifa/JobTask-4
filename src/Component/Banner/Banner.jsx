import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/vVWnjCL/pexels-cottonbro-studio-6804093.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold">Effortless Task Management: Streamline Your Workflow</h1>
                        <p className="mb-5">Welcome to our task management platform, where productivity meets simplicity. Say goodbye to scattered to-do lists and overwhelming schedules. With our intuitive tools and seamless organization features, managing your tasks has never been easier.</p>
                        <Link to="/login">
                            <button className="btn btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;