import "../css/login.css"
const Login = () => {
  return (
    


    
    <form>
      
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="email" id="form2Example1" className="form-control" />
        <label className="form-label" htmlFor="form2Example1">
          Email address
        </label>
      </div>

      
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="password" id="form2Example2" className="form-control" />
        <label className="form-label" htmlFor="form2Example2">
          Password
        </label>
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
              Remember me
            </label>
          </div>
        </div>

        <div className="col">
        
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      
      <button
        type="button"
        data-mdb-button-init
        data-mdb-ripple-init
        className="btn btn-primary btn-block mb-4"
      >
        Sign in
      </button>

     
      <div className="text-center">
        <p>
          Not a member? <a href="">Sign Up</a>
        </p>
       
        
        

        
         

      
      </div>
    </form>
  );
};

export default Login;
