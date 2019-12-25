import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';


class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <br />
                <div>
                    <h2><a href= 'https://www.hotpepper.jp/strJ001154661/' >藤ノ屋 市役所前店</a></h2>
                    <p><a href= 'https://www.google.com/maps/dir/?api=1&destination=${あいたいビル}'><i class="fas fa-map-marker-alt"></i>&thinsp;熊本県熊本市中央区下通1-2-4 あいたいビル2階</a></p>
                </div>
            </div>
        );
    }
}
export default Home;