import React from 'react';
import { GoogleLogin } from 'react-google-login-component';



export default class Login extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    responseGoogle(googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
        console.log({ accessToken: id_token });

    }

    render() {
        return (
            <div>
                <GoogleLogin socialId="300991801998-8s16am8jt76ou8pge5iisdih6dokqss5"
                    class="google-login"
                    scope="profile"
                    responseHandler={this.responseGoogle}
                    buttonText="Login With Google" />
            </div>
        );
    }

}


