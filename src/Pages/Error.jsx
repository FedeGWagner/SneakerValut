import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 5000);
    }, [navigate]);

    return (
        <div>
            <h1>Error 404</h1>
            <p>Será redirigido a la página principal</p>
        </div>
    );
}

export default Error;
