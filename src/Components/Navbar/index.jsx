import Cartwidget from "../Cartwidget";
import Logo from "../../assets/img/logo.png";

function Navbar() {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <img src={Logo} alt="Logo" />
                <a className="btn btn-ghost normal-case text-xl">SneakerValut</a>
                <a className="btn btn-ghost normal-case text-m">Categoria 1</a>
                <a className="btn btn-ghost normal-case text-m">Categoria 2</a>
                <a className="btn btn-ghost normal-case text-m">Categoria 3</a>
                <a className="btn btn-ghost normal-case text-m">Categoria 4</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <Cartwidget />
                    </label>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;