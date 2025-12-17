import "./Login.css";

export default function Login() {
    return (
    <div className="container">
        <div className="login-container">

            <div className="l-container">
            <h2>Login</h2>
            <input 
                type="text" 
                placeholder="Username" 
            />
            <input 
                type="password" 
                placeholder="Password" 
            />
            <button>Login</button>
            </div>

            <div className="r-container">
            </div>
        </div>
    </div>
    );
}
