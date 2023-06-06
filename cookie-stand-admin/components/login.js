

export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.username.value)
        console.log(event.target.password.value)
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <form onSubmit={handleSubmit} className=" px-2 py-1 bg-green-500 text-black m-20 rounded-lg flex items-center justify-center">
            <fieldset autoComplete='off'>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <button className="m-2 bg-green-300" type="submit">Log In</button>
            </fieldset>
        </form>
    );
}

