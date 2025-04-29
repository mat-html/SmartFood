import "../css/forms.css";

function LoginForm() {
  return (
    <div className="d-flex justify-content-center">
      <form>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email address:
          </label>
          <input type="email" id="form2Example1" className="form-control" />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password:
          </label>
          <input type="password" id="form2Example2" className="form-control" />
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="form2Example31">
                Remember me?
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          type="submit"
          data-mdb-button-init
          data-mdb-ripple-init
          className="form-btn btn btn-block mb-4"
          id="loginBtn"
        >
          Sign in
        </button>

        {/*   ES IST NOCH ZU MACHEN 
      
      <div className="text-center">
        <p>
          Not a member? <a href="">Sign Up</a>
        </p>
      </div> */}
      </form>
    </div>
  );
}

export default LoginForm;
