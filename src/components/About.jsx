import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <h3>ホテルと駐車場</h3>
                <div>
                    <h4><a href= "https://www.toyoko-inn.com/search/detail/00126"><i class="fas fa-hotel"></i>&thinsp;東横INN熊本城通町筋</a></h4>
                    <p>駐車場あり (48台収容 先着順)</p>
                </div>
                <div>
                    <h4><a href= "https://www.choice-hotels.jp/hotel/kumamoto"><i class="fas fa-hotel"></i>&thinsp;コンフォートホテル熊本新市街</a></h4>
                    <p>敷地内駐車場無し　(連携駐車場あり　以下)</p>
                    <li><a href= "https://www.google.com/maps/dir/?api=1&destination=${新市街パーキング}" >新市街パーキング</a></li>
                    <li><a href= "https://www.google.com/maps/dir/?api=1&destination=${パスート24辛島公園}" >パスート24辛島公園</a></li>
                    <li><a href= "https://www.google.com/maps/dir/?api=1&destination=${パスート24熊本中央}" >パスート24熊本中央</a></li>
                </div>
                <div>
                    <h4>その他駐車場</h4>
                    <p><a href= "https://www.google.com/maps/dir/?api=1&destination=${パークシティ24水道町}" >パークシティ24水道町</a></p>
                </div>
            </div>
        );
    }
}
export default About;