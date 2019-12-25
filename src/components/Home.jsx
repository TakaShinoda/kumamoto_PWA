import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';


class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <a href= "https://www.hotpepper.jp/strJ001154661/" ><h3>藤ノ屋 市役所前店</h3></a>
                <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.6219654027545!2d130.70618951568875!3d32.80228158096424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f40cfe14dc61%3A0x7794f19bc37ee0a4!2z44CSODYwLTA4MDcg54aK5pys55yM54aK5pys5biC5Lit5aSu5Yy65LiL6YCa77yR5LiB55uu77yS4oiS77yU!5e0!3m2!1sja!2sjp!4v1577272506363!5m2!1sja!2sjp" width="370" height="270" frameborder="0" allowfullscreen=""></iframe></div>
                <a href= "https://www.google.com/maps/dir/?api=1&destination=${あいたいビル}" ><p><i class="fas fa-map-marker-alt"></i>&thinsp;熊本県熊本市中央区下通1-2-4 あいたいビル2階</p></a>
            </div>
        );
    }
}
export default Home;