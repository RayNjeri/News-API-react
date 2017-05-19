import React from 'react';
import Content from './Content';
import Footer from './Footer';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="content"><Content children={this.props.children}/></div>
                <Footer />
            </div >
        );
    }
}
