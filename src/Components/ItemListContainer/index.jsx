function ItemListContainer(props) {
    const text = props.text;

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/184/94/desktop-wallpaper-canadian-sneakerheads-on-how-they-re-surviving-quarantine.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{text}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;
